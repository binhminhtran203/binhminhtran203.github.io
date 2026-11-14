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
- `src/data/publications.json`: bibliography, publication status, paper links, and BibTeX, plus `badge` (venue label on the preview), `note` (red status after the buttons), `project` (related project page), `media` (a paper figure by `image`, or a conceptual `art` kind), and `summary` (one sentence, used only by search). Vietnamese `title`, `citation`, `note`, and `summary` live in `publications.vi.json`.
- `src/data/news.ts`: bilingual homepage news, newest first, in the usual academic-homepage format: a bold `[Mon. YYYY]` date, one short sentence of about one line, and a single link on the key term. Keep date precision and study status faithful to the source; the homepage renders localized links and a stable `#news` anchor.
- `src/data/awards.ts`: bilingual awards for the homepage, each with a title (the prize, in bold) and the awarding organisation (with an optional short form). The homepage shows one line per award, "**Title**, organisation, year", following the usual academic-homepage convention; full details are in the CV. Preserve finalist status and the awarding institution when editing.
- `src/data/education.ts`: bilingual homepage Education entries from the CV, newest first: a bold degree and the institution, the years at the right of the line (under the title on phones), and an optional second line for field and supervisor. The doctoral study stays marked as incoming; the bachelor's degree is complete.
- `src/data/experience.ts`: bilingual homepage Research Experience entries from the CV, newest first, in the same format: a bold role and the organisation, the dates at the right of the line, and a second line for unit, topic and supervisor or host.
- The former About page has been removed; the sidebar navigation has a CV button instead, and `/about/` and `/vi/about/` redirect to the CV PDF (`redirects` in `astro.config.mjs`).
- `src/data/paper-figures.json`: figure captions, alt text, dimensions, and PDF page references.
- `public/assets/papers/tran-honours-thesis-2026.pdf`: public copy of the honours thesis (Multimodal Graph Learning for Breast Cancer Survival Prediction, 6 November 2026), linked from Education and the NIMSurv project page. The student ID on the title page, the signed plagiarism statement page, its contents entry and bookmark were removed with pypdf; all other pages are unchanged (145 of 146 pages).
- `public/assets/papers/`: the two supplied Springer chapter PDFs and the HiNT-Surv manuscript (`tran-hintsurv-niche-aware-survival.pdf`), unchanged. The HiNT-Surv file is the submitted version (no author names, no IEEE notice) and is labelled "Preprint"; replace it with the accepted version carrying IEEE's copyright notice when that is available.
- `public/assets/figures/`: nine original figures extracted without resampling or redrawing, plus HiNT-Surv Figure 1 (`hintsurv-fig1-overview.png`), rendered from the vector PDF at 300 dpi and cropped, not redrawn.
- `public/assets/thumbnails/`: 360px-wide copies of the figures used as publication previews (C4, C3, C2 and J1).
- `public/assets/figures/lgct-fig1a-gradcam.jpg`: the Grad-CAM heatmap from panel a of Figure 1 in the final J1 manuscript ("Bản thảo LGCT - cuối"), cropped without its Vietnamese labels, used as the J1 preview.
- `public/assets/binh-minh-tran-cv.pdf`: the current public CV (November 2026, v11), as supplied by the author. It includes the phone number and referee contacts.
- `src/styles/minimal-light.css`: the active Minimal Light layout, typography, and responsive/dark-mode rules.
- `src/styles/fonts.css` and `src/styles/paper-figures.css`: self-hosted fonts and scientific figure viewer styles.

Preserve explicit academic status when editing: planned doctoral study remains subject to formal admission, NIPT is funded and planned, and manuscripts under review are not accepted publications. Publication identifiers follow the November 2026 CV: conference papers C1–C4, journal article J1, and manuscripts under review M1–M2. HiNT-Surv (C4, formerly M4) is accepted as a full paper at CIHM, IEEE SSCI 2027; J1 (formerly M3) is accepted at the Journal of Medical Research. M2 is under review at Scientific Reports and posted as a bioRxiv preprint (doi:10.64898/2026.11.01.761587, 3 November 2026), linked with a bioRxiv badge and button. Both have status `accepted`, separate from `published`; DOI and proceedings details have not been supplied; C4 links the submitted manuscript as a preprint. Keep the legacy BibTeX keys. NIMSurv and HiNT-Surv are distinct models. The IUKM 2026 chapter uses the publisher's 2027 imprint year.

## English and Vietnamese

The English site remains at `/`; the Vietnamese edition is at `/vi/`. The sidebar language links switch to the corresponding page and retain the section anchor. Navigation stays within the chosen language. These are static pages and do not require a translation service or JavaScript to read.

Shared page markup lives in `src/views/`; the files in `src/pages/` and `src/pages/vi/` are route wrappers. `src/i18n.ts` defines locale and route helpers. Keep `profile.vi.ts` and `paper-figures.vi.json` in sync with their English sources, including numeric results and study status. Publication titles, citations, BibTeX, original figures, and downloadable PDFs retain the source language. Each page has its own canonical URL and reciprocal English/Vietnamese `hreflang` links, also included in the sitemap.

### Vietnamese editorial conventions

Use a natural first-person academic voice while preserving the original evidence and degree of certainty. Keep official degree names where a literal translation could be misleading. Use “nghiên cứu viên khách mời” for Visiting Researcher, “học trên đồ thị” for graph learning, “ảnh toàn tiêu bản” for whole-slide images, and “đánh giá chéo” for cross-validation. Distinguish “độ hiệu chuẩn” (calibration of predicted probabilities) from “điều chuẩn” (regularisation). Explain specialised terms once, retaining the English term or acronym where useful, including imaging mass cytometry (IMC). Translate association as “mối liên hệ”; do not imply causation. Preserve all numerical results, uncertainty, publication status and planned-study wording.

## Assets and checks

The portrait was supplied by Binh Minh Tran. The sidebar avatar, `public/assets/binh-minh-tran-avatar.jpg`, is a 360px square crop of `public/uploads/portrait.jpg`, framed so the whole head fits inside the circle. The paper figures retain the originals' labels, panels, legends, and resolution. Source links appear alongside every figure. Other research illustrations are labelled conceptual. Fonts are hosted locally, with their SIL Open Font License and Ubuntu Font Licence notices included.

The production build, internal routes and assets, PDF downloads, citation copying, mobile layouts, and figure viewer were checked during implementation. Repository history records subsequent changes and deployments.

## Publication list layout

Paper entries follow Minimal Light's paper list: a preview card with a venue badge, then the title, authors with my name in bold, the venue in italics, outlined buttons (project page, DOI, PDF, proceedings, BibTeX), and a red status note such as "Accepted, full paper" or "Under review". C3 and C2 preview their architecture figures; the other papers use conceptual illustrations captioned "Illustration". BibTeX copies to the clipboard and falls back to showing the source. The same component renders the home page, the publications page, and related work on project pages.

## Colours and theme switch

The palette is a set of tokens at the top of `src/styles/minimal-light.css`: ivory paper, charcoal text, navy headings, and a deep academic blue for links. Every text colour meets WCAG AA contrast in both modes. Dark mode follows the visitor's system setting. The Auto / Light / Dark switch under the language links overrides it and remembers the choice in `localStorage` under `theme`. A small inline script in `Layout.astro` applies a saved choice before the first paint, so pages do not flash. Without JavaScript the switch is hidden and the system setting applies. Dark tokens are defined twice (system and `html[data-theme="dark"]`) and must stay identical; both are screen-only so printing uses the print palette.

## Minimal Light template

The design is adapted from [Minimal Light by Yaoyao Liu](https://github.com/yaoyao-liu/minimal-light), upstream commit `dd114c3fef2d97adc1c6b6d46901e0d96ab83a7c`, under CC0-1.0 (see `licenses/minimal-light-CC0.txt`). The original 232px profile sidebar and 650px reading column, Crimson Pro typography, blue palette, circular portrait, publication previews, and automatic light/dark mode are adapted to the existing Astro pages. The main reading column starts directly with the introduction; compact site navigation and language links sit below the sidebar icons. Full affiliations remain in the biography, and the home page uses labelled interest bullets and a short project list. Navigation, two languages, publication filters, and figure viewers remain available. No Jekyll runtime or third-party analytics is required.

Crimson Pro includes Latin, extended Latin and Vietnamese glyphs, including italic styles. Font licences are bundled in `public/assets/fonts/`. Genuine paper figures are used as previews for C4, C3, C2 and J1; the other papers use conceptual illustrations captioned “Illustration”. C4's preview alt text lives in its `media` fields (English) and `imageAlt` (Vietnamese), since its figure is not shown on a project page.

Academic profile icons use self-hosted Academicons 1.8.6 (SIL OFL 1.1 / MIT) and the Font Awesome 6.4.2 LinkedIn SVG (CC BY 4.0). Attribution and licence notices are in `licenses/academicons-license.txt` and `licenses/academicons-fontawesome-linkedin-license.txt`.
