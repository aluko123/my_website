## Personal Website

Personal site for research engineering work, publications, projects, and writing.

## Run Locally

```bash
npm ci
npm run dev
```

## Edit Content

- Update profile/work/publication/blog content in `src/content/siteContent.ts`.
- Update visual style in `src/theme.ts` and `src/index.css`.

## Deploy (GitHub Pages)

- Push to `master` to trigger `.github/workflows/deploy.yml`.
- GitHub Pages serves the built `dist/` output from Actions.
- Custom domain is configured via `public/CNAME`.

DNS records for `folaaluko.com`:

- `A` → `185.199.108.153`
- `A` → `185.199.109.153`
- `A` → `185.199.110.153`
- `A` → `185.199.111.153`
- `CNAME` (`www`) → `aluko123.github.io`
