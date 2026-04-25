<div align="center">
  <h1>Lung Cancer Staging System</h1>
  <p><strong>Bilingual single-file web app for NSCLC / SCLC staging, treatment-pathway guidance, and follow-up suggestions.</strong></p>
  <p><strong>English</strong> | <a href="README.zh-CN.md">简体中文</a></p>
</div>

## Overview

This project packages the lung cancer staging tool into a directly usable standalone HTML release.

Current production features:

- One-click Chinese / English toggle
- Separate NSCLC and SCLC pages
- Automatic T / N / M and overall stage generation
- Surgery / chemoradiotherapy / targeted therapy / immunotherapy pathway suggestions
- Follow-up suggestion panel
- Single-file deployment for browser opening or GitHub Pages hosting

## Clinical Basis

The current auto-staging engine has been synchronized to the reviewed lung cancer TNM 9th edition content, together with the matching NSCLC / SCLC pathway presentation used in the current release.

The design direction also references:

- NCCN 2025 NSCLC updates
- CSCO 2024/2025 lung cancer guidance updates
- Chinese Medical Association 2025 lung cancer guideline

## v1.2.0 Update Notes

- Updated the README clinical-basis wording to reflect the TNM 9th edition positioning used by the current release
- Synchronized the project description with the latest bilingual standalone HTML deliverable
- Refreshed the v1.2.0 release messaging for NSCLC / SCLC staging, pathway guidance, and follow-up suggestion content

## Files

```text
index.html                Main production bilingual HTML
README.md                 English readme
README.zh-CN.md           Chinese readme
package.json              Local project metadata
scripts/build-html-release.js
dist-html/                Generated packaged HTML output
```

## Use

Open directly in a browser:

```bash
open index.html
```

Or build a packaged HTML output:

```bash
npm run build:html
```

## Notes

- This tool is for clinical support, education, and workflow design.
- It does not replace MDT discussion, imaging interpretation, pathology review, or formal clinical decision-making.
