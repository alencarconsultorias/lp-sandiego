# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static landing page (`index.html`) for a Brazilian criminal defense law firm, written entirely in Brazilian Portuguese. Deployed to Vercel as a static site.

## Architecture

Three plain files, no build step, no package manager, no framework — edit and open `index.html` directly in a browser:
- `index.html` — markup only, links `styles.css` in `<head>` and `script.js` at the bottom of `<body>`
- `styles.css` — all styling
- `script.js` — all behavior (mobile nav toggle, sticky nav shadow, form handler)

CSS custom properties (design tokens) are defined in `:root` at the top of `styles.css` — always use these variables (`--blue`, `--gold`, `--slate`, etc.) rather than hardcoded values.

## Deployment

Hosted on Vercel via `vercel.json` as a static site. To preview locally, open `index.html` directly in a browser or run any static file server (e.g., `npx serve .` or `python3 -m http.server`).

## Key Details

- Form submissions are **demo-only** — `handleForm()` (in `script.js`) just resets the form; there is no backend integration yet.
- The attorney is a criminal defense specialist (advogado criminalista); all copy and practice areas should stay framed around Direito Penal.
- **WhatsApp is the primary contact channel** — number `+55 12 98848-1288`. CTAs throughout the page link to `https://wa.me/5512988481288` (not `tel:`) with a pre-filled message. Keep new CTAs consistent with this.
- Email: `contato@sandiegoadvogado.com.br` — real client contact, already set in the HTML.
- Logo: `logo-site-sandiego.png` (navbar and footer).
- The attorney photo section (`about-img-placeholder`) is a placeholder — it should be replaced with a real `<img>` when a photo is available.
- Responsive breakpoints: `900px` (tablet) and `640px` (mobile).
