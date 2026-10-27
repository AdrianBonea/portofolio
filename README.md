# boneaadrian.dev

Personal landing page, built with [Astro](https://astro.build) and deployed on Cloudflare Pages.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deploy (Cloudflare Pages)

Connect the GitHub repo in Cloudflare → Workers & Pages → Create → Pages → Connect to Git.

- Framework preset: **Astro**
- Build command: `npm run build`
- Output directory: `dist`

Then add the custom domain `boneaadrian.dev` under the project's **Custom domains** tab.
