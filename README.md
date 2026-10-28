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
- `src/data/publications.json`: bibliography, publication status, paper links, and BibTeX.
- `src/data/community.ts`: the supplied biography and community activity.
- `src/views/AboutPage.astro`: education, experience, awards, and skills in both languages.
- `src/data/paper-figures.json`: figure captions, alt text, dimensions, and PDF page references.
- `public/assets/papers/`: the two supplied Springer chapter PDFs, unchanged.
- `public/assets/figures/`: nine original figures extracted without resampling or redrawing.
- `public/assets/binh-minh-tran-cv.pdf`: the current public CV, excluding phone and referee contacts.
- `src/styles/global.css` and `src/styles/profile.css`: layout and typography.

Preserve explicit academic status when editing: planned doctoral study remains subject to formal admission, NIPT is funded and planned, and manuscripts under review are not accepted publications. NIMSurv and HiNT-Surv are distinct models. The IUKM 2026 chapter uses the publisher's 2027 imprint year.

## English and Vietnamese

The English site remains at `/`; the Vietnamese edition is at `/vi/`. The header language links switch to the corresponding page and retain the section anchor. Navigation stays within the chosen language. These are static pages and do not require a translation service or JavaScript to read.

Shared page markup lives in `src/views/`; the files in `src/pages/` and `src/pages/vi/` are route wrappers. `src/i18n.ts` defines locale and route helpers. Keep `profile.vi.ts`, `community.vi.ts`, and `paper-figures.vi.json` in sync with their English sources, including numeric results and study status. Publication titles, citations, BibTeX, original figures, and downloadable PDFs retain the source language. Each page has its own canonical URL and reciprocal English/Vietnamese `hreflang` links, also included in the sitemap.

### Vietnamese editorial conventions

Use a natural first-person academic voice while preserving the original evidence and degree of certainty. Keep official degree names where a literal translation could be misleading. Use “nghiên cứu viên khách mời” for Visiting Researcher, “học trên đồ thị” for graph learning, “ảnh toàn tiêu bản” for whole-slide images, and “đánh giá chéo” for cross-validation. Distinguish “độ hiệu chuẩn” (calibration of predicted probabilities) from “điều chuẩn” (regularisation). Explain specialised terms once, retaining the English term or acronym where useful, including imaging mass cytometry (IMC). Translate association as “mối liên hệ”; do not imply causation. Preserve all numerical results, uncertainty, publication status and planned-study wording.

## Assets and checks

The portrait was supplied by Binh Minh Tran. The paper figures retain the originals' labels, panels, legends, and resolution. Source links appear alongside every figure. Other research illustrations are labelled conceptual. Fonts are hosted locally, with their SIL Open Font Licenses included.

The production build, internal routes and assets, PDF downloads, citation copying, mobile layouts, and figure viewer were checked during implementation. Repository history records subsequent changes and deployments.
