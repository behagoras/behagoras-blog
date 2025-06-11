My personal website and blog, built with Next.js and Tailwind CSS.

The site will be available at [behar.io](https://behar.io)

## Features
- Static site generation with Next.js
- Tailwind CSS for styling
- Markdown files for content

## How to run

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

## Deployment

This project uses an automated deployment pipeline with Vercel:

- **Production**: Automatically deploys when you push to `main` branch
- **Preview**: Creates preview deployments for pull requests
- **Quality Checks**: Runs type checking and build tests before deployment

### Setup Deployment (One-time)

1. Run the setup script: `./scripts/setup-vercel.sh`
2. Follow the Vercel CLI prompts to link your project
3. Add required secrets to your GitHub repository (see setup script output)

## How to add a new post

1. Run the [dev server](#how-to-run)
2. Create a new markdown file in the `common_md` folder.
3. The post will be available at `http://localhost:3000/<post-name>`.