---
applyTo: "_pages/**,_posts/**,_projects/**,_news/**,_teachings/**,_books/**,_bibliography/**,_data/**,_includes/**,assets/css/**"
---

# Content Width / No Horizontal Overflow (v1.x)

Scope: any content, data, include, layout, or stylesheet change that renders to a page.

## Rule

- Never let a change make a page wider than the configured content width.
- The definitive symptom is a **horizontal scroll bar along the bottom of the page** (the
  browser viewport gains a left–right drag bar). If that bar appears, the content is wider
  than the set width and the change is not acceptable — fix it before shipping.
- This must hold on **every platform / breakpoint** (narrow phones through wide desktops),
  not only the width you happen to view.

## How to verify

- Build (`bundle exec jekyll build`) and serve `_site`, then confirm
  `document.documentElement.scrollWidth <= document.documentElement.clientWidth` at several
  widths — at minimum 320, 375, 768, 1024, 1280, 1440 px. Page overflow must be 0 at each.
- Or simply resize the browser from narrow to wide: a bottom horizontal scrollbar must
  never appear.

## Common causes and fixes (this repo)

- **Raw `<table>` in page content.** `assets/js/no_defer.js` adds `.table-responsive`
  (`overflow-x: auto`) to a table's parent element. If the table is a direct child of the
  main content column, the whole column becomes a horizontal scroller and any small inner
  overflow shows a page-wide bar. Fix: wrap each table in its own `<div>` so the class lands
  on that wrapper (see `.skills-table-wrap` / `.edu-table-wrap` in `_pages/about.md`).
- **Long unbreakable tokens** (emails, URLs, long identifiers): add
  `overflow-wrap: break-word; word-break: break-word;`, and `min-width: 0` on flex children
  so they can shrink below their content width.
- **Wide tables**: use `table-layout: fixed` plus `overflow-wrap: break-word` so cells wrap
  instead of forcing the table wider than its column.
- **Fixed pixel widths / media**: cap with `max-width: 100%`; images use
  `width: 100%; height: auto`.
- **Wide code / `<pre>` blocks**: keep them inside their own scroll container; never let
  them widen the content column.

## Validation

Use the validated command set in `AGENTS.md`, plus the width check above.
