// assets/js/blog-lock.js
// Client-side unlock for the private /blog/ page. The blog content is stored
// only as an AES-256-GCM ciphertext (assets/blog/payload.json); the plaintext
// is never committed. The password is entered by the visitor at runtime, used
// to derive the key via PBKDF2-HMAC-SHA256, and never stored on the server.
// Requires a secure context (https or localhost) for window.crypto.subtle.
(function () {
  "use strict";

  var SESSION_KEY = "blog-unlock-pw";

  function fromBase64(b64) {
    var binary = atob(b64);
    var bytes = new Uint8Array(binary.length);
    for (var i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
  }

  async function decrypt(payload, password) {
    var subtle = window.crypto && window.crypto.subtle;
    if (!subtle) {
      throw new Error("insecure-context");
    }
    var enc = new TextEncoder();
    var keyMaterial = await subtle.importKey("raw", enc.encode(password), { name: "PBKDF2" }, false, ["deriveKey"]);
    var key = await subtle.deriveKey(
      {
        name: "PBKDF2",
        salt: fromBase64(payload.salt),
        iterations: payload.iter || 250000,
        hash: payload.hash || "SHA-256",
      },
      keyMaterial,
      { name: "AES-GCM", length: 256 },
      false,
      ["decrypt"]
    );
    var plainBuffer = await subtle.decrypt({ name: "AES-GCM", iv: fromBase64(payload.iv) }, key, fromBase64(payload.ct));
    return new TextDecoder().decode(plainBuffer);
  }

  function init() {
    var lock = document.getElementById("blog-lock");
    var form = document.getElementById("blog-lock-form");
    var input = document.getElementById("blog-lock-password");
    var error = document.getElementById("blog-lock-error");
    var content = document.getElementById("blog-content");
    if (!lock || !form || !input || !content) {
      return;
    }

    var payloadUrl = lock.getAttribute("data-payload");
    var payloadPromise = fetch(payloadUrl, { cache: "no-store" }).then(function (res) {
      if (!res.ok) {
        throw new Error("payload-missing");
      }
      return res.json();
    });

    function reveal(html) {
      content.innerHTML = html;
      content.hidden = false;
      lock.hidden = true;
    }

    function fail(message) {
      error.textContent = message;
      input.value = "";
      input.focus();
    }

    async function attempt(password, isAuto) {
      try {
        var payload = await payloadPromise;
        var html = await decrypt(payload, password);
        reveal(html);
        try {
          window.sessionStorage.setItem(SESSION_KEY, password);
        } catch (e) {
          /* sessionStorage may be unavailable; ignore */
        }
      } catch (err) {
        if (err && err.message === "payload-missing") {
          fail("Could not load the protected content. Please try again later.");
        } else if (err && err.message === "insecure-context") {
          fail("This page must be opened over https to unlock.");
        } else if (isAuto) {
          try {
            window.sessionStorage.removeItem(SESSION_KEY);
          } catch (e) {
            /* ignore */
          }
        } else {
          fail("Incorrect password. Please try again.");
        }
      }
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      error.textContent = "";
      var password = input.value;
      if (!password) {
        return;
      }
      attempt(password, false);
    });

    var remembered = null;
    try {
      remembered = window.sessionStorage.getItem(SESSION_KEY);
    } catch (e) {
      /* ignore */
    }
    if (remembered) {
      attempt(remembered, true);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
