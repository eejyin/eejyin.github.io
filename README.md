# eejyin.github.io

Personal academic website of **Junjie Yin** — PhD researcher in Electrical Engineering
at the University of Tennessee, Knoxville (CURENT), working on **AI for power systems**.

Live site: <https://eejyin.github.io>

Built with [Jekyll](https://jekyllrb.com/) and the [al-folio](https://github.com/alshedivat/al-folio) theme.

## Where the content lives

| Content | Location |
| --- | --- |
| Homepage bio, research interests | `_pages/about.md` |
| News / announcements | `_news/*.md` |
| Publications (BibTeX) | `_bibliography/papers.bib` |
| Projects | `_projects/*.md` |
| CV / résumé (structured) | `_data/cv.yml` and `_pages/cv.md` |
| Social & academic profiles | `_data/socials.yml` |
| Global settings (name, URL, analytics) | `_config.yml` |
| Images, PDFs | `assets/img/`, `assets/pdf/` |

Search the repo for `[take action]` to find items that still need your input
(e.g., a couple of project thumbnails and a skills review).

## Local development

Requires Ruby (3.1+). Node and ImageMagick are optional locally — they are only needed
for responsive-image generation and CSS purging, which the GitHub Actions build handles.

```bash
bundle install
bundle exec jekyll serve   # then open http://localhost:4000
```

> On Windows, responsive-image (`.webp`) generation is skipped locally because ImageMagick
> is not installed; original images still display. Images are generated correctly by CI.

## Deployment

Pushing to the default branch (`main`) triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml),
which builds the site (Ruby + Node + Python + ImageMagick) and deploys it to GitHub Pages
using the official GitHub Actions Pages deployment.

**GitHub Pages setting:** under *Settings → Pages → Build and deployment*, the *Source*
should be **GitHub Actions** (this is the mode the repository already uses).
