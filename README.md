# Destin Byrd's portfolio

The live site at https://destinbyrd.com is the static website in `public/`:

- `public/index.html`: profile, experience, skills, and projects
- `public/css/style.css`: original dark and orange theme and responsive layout
- `public/js/main.js`: mobile navigation and footer year

Preview locally from the repository root:

```sh
python3 -m http.server 8765 --bind 127.0.0.1 --directory public
```

Open http://127.0.0.1:8765. No build or dependency installation is needed for the static site.

The existing Vercel integration deploys pushes to GitHub's `master` branch. Verify the production deployment and domain after publishing.

The nested `destinbyrd-portfolio/` directory is an older React/Vite starter and is not the source of the current live website.
