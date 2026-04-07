# behagoras-blog

[![Next.js](https://img.shields.io/badge/Next.js-latest-000?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000?logo=vercel)](https://behar.io)

Personal blog and website at [behar.io](https://behar.io). Posts are written as Markdown files (with frontmatter) and rendered at build time through Next.js static generation.

The content lives in an Obsidian vault (`common_md/`), so writing and publishing use the same workflow: edit in Obsidian, push to `main`, Vercel deploys automatically.

## Features

- **Markdown-driven content** with gray-matter frontmatter parsing
- **Obsidian-compatible** wiki-links, backlinks, and image references
- **Fuzzy search** across all posts (client-side, via `fast-fuzzy`)
- **SEO** through `next-seo` with per-page Open Graph metadata
- **Dark mode toggle**
- **Auto image pipeline** that copies Obsidian vault attachments into Next.js `/public` at build time
- **GitHub Actions CI/CD** with type checking and Vercel preview deploys on PRs

## Running Locally

```bash
git clone https://github.com/behagoras/behagoras-blog.git
cd behagoras-blog
cp .env.example .env
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding a Post

1. Create a `.md` file inside `common_md/`
2. Optionally add frontmatter (`title`, `date`, `excerpt`, `tags`)
3. Images go in `common_md/attachments/` or next to the markdown file
4. Run the dev server and visit `http://localhost:3000/<filename>`

Posts without a `title` in frontmatter use the filename. Posts without a `date` are still rendered but won't sort chronologically.

## Deployment

Pushes to `main` trigger a production deploy on Vercel. Pull requests get preview URLs. The CI pipeline runs `npm run typecheck` and `npm run build` before deploying.

One-time setup: run `./scripts/setup-vercel.sh` and add the required secrets to your GitHub repo.

## License

MIT
