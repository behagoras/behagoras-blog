# behar.io

[![Next.js](https://img.shields.io/badge/Next.js-15-000?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000?logo=vercel)](https://behar.io)

Personal portfolio and blog at [behar.io](https://behar.io). Built with Next.js, TypeScript, and Tailwind CSS. Content is written as Markdown files (with frontmatter) and rendered at build time through static generation.

The content lives in an Obsidian vault (`common_md/`), so writing and publishing use the same workflow: edit in Obsidian, push to `main`, Vercel deploys automatically.

## Pages

| Route | Source | Description |
|-------|--------|-------------|
| `/` | `pages/index.tsx` | Landing page with hero, metrics, featured work, tech stack, and blog posts |
| `/cv` | `pages/cv.tsx` | Interactive CV with timeline, metric highlights, and tech icons |
| `/about` | `common_md/about.md` | Career narrative and personal background |
| `/posts/1` | `pages/posts/` | Paginated blog index |
| `/<slug>` | `common_md/*.md` | Individual blog posts and markdown pages |

## Tech Stack

- **Framework:** Next.js 15 with static generation
- **UI:** [shadcn/ui](https://ui.shadcn.com/) (Radix primitives), Tailwind CSS, lucide-react icons
- **Content:** Markdown with gray-matter frontmatter, remark/rehype pipeline
- **Search:** Client-side fuzzy search via `fast-fuzzy`
- **SEO:** `next-seo` with per-page OG metadata, Schema.org JSON-LD structured data
- **Accessibility:** WCAG 2.1 AA compliant (skip-to-content, focus indicators, semantic HTML, `prefers-reduced-motion`)
- **Deploy:** Vercel with GitHub Actions CI (typecheck + build)

## Features

- **Markdown-driven content** with gray-matter frontmatter parsing
- **Obsidian-compatible** wiki-links, backlinks, and image references
- **Fuzzy search** across all posts (client-side)
- **SEO optimized** with meta tags, OG data, canonical URLs, and JSON-LD Person schema
- **Dark mode** with system preference detection and manual toggle
- **Accessible** with keyboard navigation, screen reader support, and reduced motion support
- **Auto image pipeline** that copies Obsidian vault attachments into `/public` at build time
- **CI/CD** with type checking and Vercel preview deploys on PRs

## Project Structure

```
common_md/           # Obsidian vault (markdown content)
  home.md            # Homepage markdown fallback
  about.md           # About page content
  posts/             # Blog posts
  attachments/       # Images referenced in markdown
components/
  ui/                # shadcn/ui components (button, card, badge, etc.)
  misc/              # Layout, header, footer, search, dark mode toggle
  blog/              # Pagination, popular posts
  post/              # Post layout, preview, single post
pages/
  index.tsx          # Homepage
  cv.tsx             # CV page
  [...slug].tsx      # Dynamic markdown page renderer
  posts/             # Blog post listing
styles/
  index.css          # Global styles, focus indicators
  additional-styles/ # Homepage, CV, and utility CSS
```

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
2. Add frontmatter (`title`, `date`, `excerpt`, `tags`)
3. Images go in `common_md/attachments/` or next to the markdown file
4. Run the dev server and visit `http://localhost:3000/<filename>`

Posts without a `title` in frontmatter use the filename. Posts without a `date` are still rendered but won't sort chronologically.

## Deployment

Pushes to `main` trigger a production deploy on Vercel. Pull requests get preview URLs. The CI pipeline runs `npm run typecheck` and `npm run build` before deploying.

One-time setup: run `./scripts/setup-vercel.sh` and add the required secrets to your GitHub repo.

## License

MIT
