# Binh Minh Tran — Academic website

Live website: **https://binhminhtran203.github.io/**

An Astro static website containing a research profile, publications, biography, CV, and four research project pages. The breast-cancer receptor and variational graph projects include original architecture and results figures from their cited papers, with full-paper downloads and accessible figure viewers.

## Local development

Use Node.js 24 and npm.

```sh
npm ci
npm run dev
```

Build and preview the production site:

```sh
npm run build
npm run preview
```

The generated website is in `dist/`. The `prebuild` script also preserves the previous website's `/uploads/Binh_Minh_Tran_CV.pdf` URL by copying the current public CV there. The earlier portrait URL is retained.

## Deployment

GitHub Pages uses **GitHub Actions** as its publishing source. Every push to `main` runs `.github/workflows/deploy.yml`, which installs dependencies, builds the Astro site, uploads `dist/`, and deploys it to GitHub Pages. The workflow can also be run manually from the Actions tab.

`SITE_URL` sets the canonical origin, Open Graph URLs, and sitemap origin. This repository deploys at the domain root, so no Astro `base` is required. If using a custom domain, update the workflow environment, the fallback in `astro.config.mjs`, `public/robots.txt`, and the paper URLs embedded in the public CV.

The earlier single-page website remains available in Git history, before the Astro migration commit. Restore via a reviewed revert rather than deleting history.

## Update content

- `src/data/profile.ts`: profile links, research descriptions, evaluation results, and project status.
- `src/data/publications.json`: bibliography, publication status, paper links, and BibTeX, plus the fields behind the paper rows: `summary` (one sentence), `note` (bold status after the venue), `project` (related project page), `highlight` (representative paper), and `media` (paper figures by `image`/`hover`, or a conceptual `art` kind). Vietnamese `title`, `citation`, `note`, and `summary` live in `publications.vi.json`.
- `src/data/news.ts`: bilingual homepage news, newest month first. Keep date precision and study status faithful to the source; the homepage renders localized links and a stable `#news` anchor.
- `src/data/awards.ts`: bilingual award titles, full details, and concise homepage summaries shared by Home and About. Preserve finalist status and the awarding institution when editing.
- `src/data/community.ts`: the supplied biography and community activity.
- `src/views/AboutPage.astro`: education, experience, and skills in both languages, plus the shared awards list.
- `src/data/paper-figures.json`: figure captions, alt text, dimensions, and PDF page references.
- `public/assets/papers/`: the two supplied Springer chapter PDFs, unchanged.
- `public/assets/figures/`: nine original figures extracted without resampling or redrawing.
- `public/assets/thumbnails/`: 360px-wide copies of four of those figures, used only as publication thumbnails.
- `public/assets/binh-minh-tran-cv.pdf`: the current public CV (November 2026, v11), as supplied by the author. It includes the phone number and referee contacts.
- `src/styles/minimal-light.css`: the active Minimal Light layout, typography, and responsive/dark-mode rules.
- `src/styles/fonts.css` and `src/styles/paper-figures.css`: self-hosted fonts and scientific figure viewer styles.

Preserve explicit academic status when editing: planned doctoral study remains subject to formal admission, NIPT is funded and planned, and manuscripts under review are not accepted publications. Publication identifiers follow the November 2026 CV: conference papers C1–C4, journal article J1, and manuscripts under review M1–M2. HiNT-Surv (C4, formerly M4) is accepted as a full paper at CIHM, IEEE SSCI 2027; J1 (formerly M3) is accepted at the Journal of Medical Research. Both have status `accepted`, separate from `published`; DOI and proceedings details have not been supplied. Keep the legacy BibTeX keys. NIMSurv and HiNT-Surv are distinct models. The IUKM 2026 chapter uses the publisher's 2027 imprint year.

## English and Vietnamese

The English site remains at `/`; the Vietnamese edition is at `/vi/`. The sidebar language links switch to the corresponding page and retain the section anchor. Navigation stays within the chosen language. These are static pages and do not require a translation service or JavaScript to read.

Shared page markup lives in `src/views/`; the files in `src/pages/` and `src/pages/vi/` are route wrappers. `src/i18n.ts` defines locale and route helpers. Keep `profile.vi.ts`, `community.vi.ts`, and `paper-figures.vi.json` in sync with their English sources, including numeric results and study status. Publication titles, citations, BibTeX, original figures, and downloadable PDFs retain the source language. Each page has its own canonical URL and reciprocal English/Vietnamese `hreflang` links, also included in the sitemap.

### Vietnamese editorial conventions

Use a natural first-person academic voice while preserving the original evidence and degree of certainty. Keep official degree names where a literal translation could be misleading. Use “nghiên cứu viên khách mời” for Visiting Researcher, “học trên đồ thị” for graph learning, “ảnh toàn tiêu bản” for whole-slide images, and “đánh giá chéo” for cross-validation. Distinguish “độ hiệu chuẩn” (calibration of predicted probabilities) from “điều chuẩn” (regularisation). Explain specialised terms once, retaining the English term or acronym where useful, including imaging mass cytometry (IMC). Translate association as “mối liên hệ”; do not imply causation. Preserve all numerical results, uncertainty, publication status and planned-study wording.

## Assets and checks

The portrait was supplied by Binh Minh Tran. The paper figures retain the originals' labels, panels, legends, and resolution. Source links appear alongside every figure. Other research illustrations are labelled conceptual. Fonts are hosted locally, with their SIL Open Font License and Ubuntu Font Licence notices included.

The production build, internal routes and assets, PDF downloads, citation copying, mobile layouts, and figure viewer were checked during implementation. Repository history records subsequent changes and deployments.

## Publication list layout

Paper rows follow [Jon Barron's academic website](https://github.com/jonbarron/jonbarron_website), whose source is offered for personal reuse: a thumbnail that swaps to a second paper figure on hover (or on tap, on touch screens), a bold title, authors with my name in bold, the venue in italics with a bold status note, slash-separated links, and a one-sentence summary. Papers with `highlight: true` get a soft yellow background, explained by the sentence above each list. The same component renders the home page, the publications page, and related work on project pages. It is restyled in the site's Minimal Light typography rather than copied.

## Colours and theme switch

The palette is a set of tokens at the top of `src/styles/minimal-light.css`: ivory paper, charcoal text, navy headings, and a deep academic blue for links. Every text colour meets WCAG AA contrast in both modes. Dark mode follows the visitor's system setting. The Auto / Light / Dark switch under the language links overrides it and remembers the choice in `localStorage` under `theme`. A small inline script in `Layout.astro` applies a saved choice before the first paint, so pages do not flash. Without JavaScript the switch is hidden and the system setting applies. Dark tokens are defined twice (system and `html[data-theme="dark"]`) and must stay identical; both are screen-only so printing uses the print palette.

## Minimal Light template

The design is adapted from [Minimal Light by Yaoyao Liu](https://github.com/yaoyao-liu/minimal-light), upstream commit `dd114c3fef2d97adc1c6b6d46901e0d96ab83a7c`, under CC0-1.0 (see `licenses/minimal-light-CC0.txt`). The original 232px profile sidebar and 650px reading column, Crimson Pro typography, blue palette, circular portrait, publication previews, and automatic light/dark mode are adapted to the existing Astro pages. The main reading column starts directly with the introduction; compact site navigation and language links sit below the sidebar icons. Full affiliations remain in the biography, and the home page uses labelled interest bullets and a short project list. Navigation, two languages, publication filters, and figure viewers remain available. No Jekyll runtime or third-party analytics is required.

Crimson Pro includes Latin, extended Latin and Vietnamese glyphs, including italic styles. Font licences are bundled in `public/assets/fonts/`. Genuine paper figures are used as thumbnails for C3 and C2; the other papers use conceptual illustrations captioned “Illustration”.

Academic profile icons use self-hosted Academicons 1.8.6 (SIL OFL 1.1 / MIT) and the Font Awesome 6.4.2 LinkedIn SVG (CC BY 4.0). Attribution and licence notices are in `licenses/academicons-license.txt` and `licenses/academicons-fontawesome-linkedin-license.txt`.
