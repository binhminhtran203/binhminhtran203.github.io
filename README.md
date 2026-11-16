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
- `src/data/publications.json`: bibliography, publication status, paper links, and BibTeX, plus `note` (status after the venue), `project` (related project page) and `summary` (one sentence, used only by search). The identifier (`C4`, `J1`, `M3`) follows the CV: its letter sets the group, and it names the entry's anchor (`#paper-C4`). `badge` and `media` held the venue label and figure of the earlier preview cards; the text-only list does not show them. Vietnamese `title`, `citation`, `note`, and `summary` live in `publications.vi.json` (`imageAlt` belongs to the earlier previews).
- `src/data/news.ts`: bilingual homepage news, newest first, in the usual academic-homepage format: a bold `[Mon. YYYY]` date, one short sentence of about one line, and a single link on the key term. Keep date precision and study status faithful to the source; the homepage renders localized links and a stable `#news` anchor.
- `src/data/awards.ts`: bilingual Honours and Awards for the homepage, each with a title (the prize, in bold) and the awarding organisation (with an optional short form). The homepage sets them like the other CV sections: the year in the left column, then "**Title**, organisation". Preserve finalist status and the awarding institution when editing.
- `src/data/education.ts`: bilingual homepage Education entries from the CV, newest first, set like an academic CV: the years in a left column (above the entry on phones), then a bold degree and the institution, with the field, the thesis title (linked to its PDF) and the supervisor on their own lines. The doctoral study stays marked as incoming; the bachelor's degree is complete.
- `src/data/experience.ts`: bilingual homepage Research Experience entries from the CV, newest first, in the same CV format and in the field order that university CV guides give: the dates in the left column, then the position (bold), department, institution and location, and a line for the supervisor or host. At the author's request the entries say where the work was done, not what it was.
- `src/data/grants.ts`: bilingual homepage Research Grants, placed between Research Experience and Awards as in the CV and set in the same CV format: the funding period in the left column, then the funder (bold) and scheme, the project title in italics, and a line for the role and the amount. Leave out a year, project, role or amount that no source gives; an entry without a period has an empty date column.
- The former About page has been removed; the sidebar navigation has a CV button instead, and `/about/` and `/vi/about/` redirect to the CV PDF (`redirects` in `astro.config.mjs`). At the author's request the navigation has no Research link either (Home, Publications, CV); the research overview and project pages remain and are reached from publication, news and project links.
- `src/data/paper-figures.json`: figure captions, alt text, dimensions, and PDF page references.
- `public/assets/papers/tran-honours-thesis-2026.pdf`: public copy of the honours thesis (Multimodal Graph Learning for Breast Cancer Survival Prediction, 6 November 2026), linked from Education and the NIMSurv project page. The student ID on the title page, the signed plagiarism statement page, its contents entry and bookmark were removed with pypdf; all other pages are unchanged (145 of 146 pages).
- `public/assets/papers/`: the two supplied Springer chapter PDFs and the HiNT-Surv manuscript (`tran-hintsurv-niche-aware-survival.pdf`), unchanged. The HiNT-Surv file is the submitted version (no author names, no IEEE notice) and is labelled "Preprint"; replace it with the accepted version carrying IEEE's copyright notice when that is available.
- `public/assets/figures/`: nine original figures extracted without resampling or redrawing, plus HiNT-Surv Figure 1 (`hintsurv-fig1-overview.png`), rendered from the vector PDF at 300 dpi and cropped, not redrawn. The HiNT-Surv figure was the C4 preview and is not shown at present.
- `public/assets/thumbnails/`: 360px-wide copies of the figures that served as publication previews (C4, C3, C2 and J1); not shown since the list became text-only.
- `public/assets/figures/lgct-fig1a-gradcam.jpg`: the Grad-CAM heatmap from panel a of Figure 1 in the final J1 manuscript ("Bản thảo LGCT - cuối"), cropped without its Vietnamese labels, formerly the J1 preview; not shown at present.
- `public/assets/binh-minh-tran-cv.pdf`: the current public CV (16 November 2026, revised v18_1), as supplied by the author. It includes the phone number and referee contacts.
- `public/favicon.svg`, `public/favicon.ico` (16, 32 and 48px) and `public/apple-touch-icon.png` (180px): the site icon, a sunrise for the author's given name, Bình Minh ("dawn"): a gold half-sun with ivory rays over a horizon line, on the site's navy. The SVG is the source; the ICO and PNG repeat its geometry.
- `src/styles/minimal-light.css`: the active Minimal Light layout, typography, and responsive/dark-mode rules.
- `src/styles/fonts.css` and `src/styles/paper-figures.css`: self-hosted fonts and scientific figure viewer styles.

Preserve explicit academic status when editing: planned doctoral study remains subject to formal admission, NIPT is funded and planned, and manuscripts under review are not accepted publications. Publication identifiers follow the CV of 16 November 2026: conference papers C1–C4, journal article J1, and manuscripts under review M1–M3. M3 is under review at ACIIDS 2027 and has no manuscript link; the identifier M3 was earlier used for J1. HiNT-Surv (C4, formerly M4) is accepted as a full paper at CIHM, IEEE SSCI 2027; J1 (formerly M3) is accepted at the Journal of Medical Research. M2 is under review at Scientific Reports and posted as a bioRxiv preprint (doi:10.64898/2026.11.01.761587, 3 November 2026), linked with a bioRxiv badge and button. Both have status `accepted`, separate from `published`; DOI and proceedings details have not been supplied; C4 links the submitted manuscript as a preprint. Keep the legacy BibTeX keys. NIMSurv and HiNT-Surv are distinct models. The IUKM 2026 chapter uses the publisher's 2027 imprint year.

## English and Vietnamese

The English site remains at `/`; the Vietnamese edition is at `/vi/`. The sidebar language links switch to the corresponding page and retain the section anchor. Navigation stays within the chosen language. These are static pages and do not require a translation service or JavaScript to read.

Shared page markup lives in `src/views/`; the files in `src/pages/` and `src/pages/vi/` are route wrappers. `src/i18n.ts` defines locale and route helpers. Keep `profile.vi.ts` and `paper-figures.vi.json` in sync with their English sources, including numeric results and study status. Publication titles, citations, BibTeX, original figures, and downloadable PDFs retain the source language. Each page has its own canonical URL and reciprocal English/Vietnamese `hreflang` links, also included in the sitemap.

### Vietnamese editorial conventions

Use a natural first-person academic voice while preserving the original evidence and degree of certainty. Keep official degree names where a literal translation could be misleading. Use “nghiên cứu viên khách mời” for Visiting Researcher, “học trên đồ thị” for graph learning, “ảnh toàn tiêu bản” for whole-slide images, and “đánh giá chéo” for cross-validation. Distinguish “độ hiệu chuẩn” (calibration of predicted probabilities) from “điều chuẩn” (regularisation). Explain specialised terms once, retaining the English term or acronym where useful, including imaging mass cytometry (IMC). Translate association as “mối liên hệ”; do not imply causation. Preserve all numerical results, uncertainty, publication status and planned-study wording.

## Assets and checks

The portrait was supplied by Binh Minh Tran. The sidebar avatar, `public/assets/binh-minh-tran-avatar.jpg`, is a 360px square crop of `public/uploads/portrait.jpg`, framed so the whole head fits inside the circle. The paper figures retain the originals' labels, panels, legends, and resolution. Source links appear alongside every figure. Other research illustrations are labelled conceptual. Fonts are hosted locally, with their SIL Open Font License and Ubuntu Font Licence notices included.

The production build, internal routes and assets, PDF downloads, citation copying, mobile layouts, and figure viewer were checked during implementation. Repository history records subsequent changes and deployments.

## Publication list layout

Publications follow the usual academic-homepage list, as on al-folio, academicpages and Jon Barron's page, in text only. Each entry has the title in bold, then the authors with my name in bold and † for equal contribution, then the venue and year in italics followed by the status in red ("Accepted, full paper", "Under review"), and a row of bracketed links: project page, DOI, PDF, preprint, proceedings and BibTeX. On Vietnamese pages the translated title leads and the original title follows on a muted line. BibTeX copies to the clipboard and falls back to showing the source. The publications page groups entries as the CV does: peer-reviewed conference papers, peer-reviewed journal articles, then manuscripts under review; the status filters and search remain. The home page lists the accepted and published papers in the same order, and project pages list their related work. One component, `src/components/Publication.astro`, renders all three.

## Colours and theme switch

The palette is a set of tokens at the top of `src/styles/minimal-light.css`: ivory paper, charcoal text, navy headings, and a deep academic blue for links. Every text colour meets WCAG AA contrast in both modes. Dark mode follows the visitor's system setting. The Auto / Light / Dark switch under the language links overrides it and remembers the choice in `localStorage` under `theme`. A small inline script in `Layout.astro` applies a saved choice before the first paint, so pages do not flash. Without JavaScript the switch is hidden and the system setting applies. Dark tokens are defined twice (system and `html[data-theme="dark"]`) and must stay identical; both are screen-only so printing uses the print palette.

## Minimal Light template

The design is adapted from [Minimal Light by Yaoyao Liu](https://github.com/yaoyao-liu/minimal-light), upstream commit `dd114c3fef2d97adc1c6b6d46901e0d96ab83a7c`, under CC0-1.0 (see `licenses/minimal-light-CC0.txt`). The original 232px profile sidebar and 650px reading column, Crimson Pro typography, blue palette, circular portrait, and automatic light/dark mode are adapted to the existing Astro pages; the template's publication preview cards were later replaced by a text-only list. The main reading column starts directly with the introduction; compact site navigation and language links sit below the sidebar icons. Full affiliations remain in the biography, and the home page uses labelled interest bullets and a short project list. Navigation, two languages, publication filters, and figure viewers remain available. No Jekyll runtime or third-party analytics is required.

Crimson Pro includes Latin, extended Latin and Vietnamese glyphs, including italic styles. Font licences are bundled in `public/assets/fonts/`. The publication previews (genuine paper figures for C4, C3, C2 and J1, conceptual illustrations for the others) are no longer shown; their data and files are kept in case they return.

Academic profile icons use self-hosted Academicons 1.8.6 (SIL OFL 1.1 / MIT) and the Font Awesome 6.4.2 LinkedIn SVG (CC BY 4.0). Attribution and licence notices are in `licenses/academicons-license.txt` and `licenses/academicons-fontawesome-linkedin-license.txt`.
