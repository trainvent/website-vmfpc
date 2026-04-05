# GitHub Actions Pages Site

This project is a static Next.js site deployed with GitHub Actions and GitHub Pages.

## Local development

1. Install dependencies with `npm install`
2. Start the dev server with `npm run dev`
3. Build the production export with `npm run build`

## Deployment

The repository includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.

It does the following:

1. Runs on pushes to `main`
2. Installs dependencies with `npm ci`
3. Builds the static export with `npm run build`
4. Uploads `out/` as the Pages artifact
5. Deploys that artifact to GitHub Pages

## Next.js Pages configuration

`next.config.mjs` is configured for static export and GitHub Pages deployment.

- `output: "export"` generates a static site
- `images.unoptimized` keeps image handling compatible with static export
- `basePath` and `assetPrefix` are set automatically in GitHub Actions for repository Pages deployments

If this repository is published as `username.github.io`, no extra base path is applied.

## GitHub Pages setup

In the GitHub repository settings:

1. Open `Settings > Pages`
2. Set the source to `GitHub Actions`
3. Push to `main` or run the workflow manually

## References

- GitHub Actions: https://docs.github.com/actions
- GitHub Pages with custom workflows: https://docs.github.com/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
