---
layout: page
title: Blog
permalink: /blog/
nav: false
sitemap: false
robots: noindex
description: A private, password-protected space.
---

<!-- _pages/blog.md
     Private blog. The content is encrypted (assets/blog/payload.json) and
     decrypted in the browser by assets/js/blog-lock.js once the correct
     password is entered. No plaintext content is committed to the repository. -->

<style>
  .blog-lock {
    max-width: 380px;
    margin: 2.5rem auto 3rem;
    text-align: center;
  }
  .blog-lock .lock-icon {
    font-size: 2.2rem;
    color: var(--global-theme-color);
    margin-bottom: 0.6rem;
  }
  .blog-lock p.hint {
    opacity: 0.7;
    font-size: 0.9rem;
    margin-bottom: 1.2rem;
  }
  .blog-lock input {
    width: 100%;
    padding: 0.6rem 0.8rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    background: var(--global-card-bg-color, var(--global-bg-color));
    color: var(--global-text-color);
    font-size: 1rem;
    margin-bottom: 0.8rem;
  }
  .blog-lock input:focus {
    outline: none;
    border-color: var(--global-theme-color);
  }
  .blog-lock button {
    width: 100%;
    padding: 0.6rem 0.8rem;
    border: none;
    border-radius: 8px;
    background: var(--global-theme-color);
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
  }
  .blog-lock button:hover {
    background: var(--global-hover-color, var(--global-theme-color));
  }
  .blog-lock .error {
    color: #d9534f;
    min-height: 1.3em;
    margin-top: 0.7rem;
    font-size: 0.9rem;
  }
  .blog-intro {
    opacity: 0.82;
    margin-bottom: 1.6rem;
  }
  .blog-cat h2 {
    border-bottom: 1px solid var(--global-divider-color);
    padding-bottom: 0.3rem;
    margin-top: 1.8rem;
  }
  .blog-cat h2 i {
    color: var(--global-theme-color);
    margin-right: 0.4em;
  }
  .blog-post {
    margin-bottom: 1.6rem;
  }
  .blog-post-title {
    margin-bottom: 0.2rem;
  }
  .blog-post-meta {
    font-size: 0.8rem;
    opacity: 0.68;
    margin-bottom: 0.45rem;
  }
  .blog-post-meta i {
    margin-right: 0.4em;
  }
  .blog-readmore {
    font-weight: 600;
  }
</style>

<div id="blog-lock" class="blog-lock" data-payload="{{ '/assets/blog/payload.json' | relative_url }}">
  <div class="lock-icon"><i class="fa-solid fa-lock"></i></div>
  <p class="hint">This space is private. Enter the password to continue.</p>
  <form id="blog-lock-form" autocomplete="off">
    <input
      id="blog-lock-password"
      type="password"
      name="blog-password"
      placeholder="Password"
      aria-label="Password"
      autocomplete="current-password"
    />
    <button type="submit">Unlock</button>
    <p id="blog-lock-error" class="error" role="alert" aria-live="polite"></p>
  </form>
</div>

<div id="blog-content" hidden></div>

<script defer src="{{ '/assets/js/blog-lock.js' | relative_url }}"></script>
