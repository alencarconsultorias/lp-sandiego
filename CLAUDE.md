# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static landing page (`index.html`) for a Brazilian criminal defense law firm, written entirely in Brazilian Portuguese. Deployed to Vercel as a static site.

## Architecture

Everything lives in a single `index.html` file:
- CSS is inlined in `<style>` within `<head>`
- JavaScript is inlined in `<script>` at the bottom of `<body>`
- No build step, no package manager, no framework — edit and open directly in a browser

CSS custom properties (design tokens) are defined in `:root` at the top of the `<style>` block — always use these variables (`--blue`, `--gold`, `--slate`, etc.) rather than hardcoded values.

## Deployment

Hosted on Vercel via `vercel.json` as a static site. To preview locally, open `index.html` directly in a browser or run any static file server (e.g., `npx serve .` or `python3 -m http.server`).

## Key Details

- Form submissions are **demo-only** — `handleForm()` just shows a toast; there is no backend integration yet.
- Phone number `(11) 99999-0000` and email `contato@advogadocriminalista.com.br` are placeholder values to be replaced by the actual client's contact info.
- The attorney photo section (`about-img-placeholder`) is a placeholder — it should be replaced with a real `<img>` when a photo is available.
- Responsive breakpoints: `900px` (tablet) and `640px` (mobile).
