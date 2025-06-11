# Deployment Guide

## Automated Deployment Pipeline

Your blog now has a fully automated deployment pipeline that will:

✅ **Quality Checks**: Run type checking and build tests on every commit
✅ **Preview Deployments**: Create preview URLs for pull requests  
✅ **Production Deployments**: Auto-deploy to production on main branch pushes
✅ **Rollback Support**: Easy rollback through Vercel dashboard

## Setup Instructions

### 1. Initial Vercel Setup
Run the setup script and follow prompts:
```bash
./scripts/setup-vercel.sh
```

### 2. GitHub Repository Secrets

Go to your GitHub repository → Settings → Secrets and variables → Actions

Add these **Repository Secrets**:

| Secret Name | How to Get It | Description |
|-------------|---------------|-------------|
| `VERCEL_TOKEN` | [Vercel Account Tokens](https://vercel.com/account/tokens) | Create a new token with full access |
| `VERCEL_ORG_ID` | `.vercel/project.json` (after running `vercel link`) | Your organization/team ID |
| `VERCEL_PROJECT_ID` | `.vercel/project.json` (after running `vercel link`) | Your project ID |

### 3. Vercel Dashboard Setup

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Find your project
3. Go to **Settings** → **Git**
4. Connect your GitHub repository
5. Set **Production Branch** to `main` (or `master`)

## How It Works

### Branch Strategy
- **`main` branch** → Production deployment at your custom domain
- **Pull Requests** → Preview deployments with unique URLs
- **Other branches** → No automatic deployment

### Deployment Flow
```
Code Push → Quality Checks → Build → Deploy → Live Site
     ↓            ↓           ↓        ↓        ↓
  GitHub      Type Check   Vercel   Update   behar.io
              Build Test    Build   Domain
```

### Quality Gates
Before any deployment, the pipeline runs:
- **Type checking** (`npm run typecheck`)
- **Build verification** (`npm run build`)
- **Dependency check** (npm ci)

If any check fails, deployment is blocked.

## Usage

### Deploy to Production
```bash
git add .
git commit -m "Add new blog post"
git push origin main
```

### Create Preview Deployment
```bash
git checkout -b new-feature
# Make changes
git push origin new-feature
# Create pull request → Preview deployment created automatically
```

### Manual Deployment (if needed)
```bash
vercel --prod  # Deploy current branch to production
vercel         # Deploy current branch to preview
```

## Monitoring

- **Vercel Dashboard**: Monitor deployments, view logs, manage domains
- **GitHub Actions**: View deployment status in repository Actions tab
- **Pull Request Comments**: Preview URLs automatically posted

## Troubleshooting

### Common Issues

**Build Fails**
- Check GitHub Actions logs
- Run `npm run build` locally to reproduce
- Verify all dependencies are in `package.json`

**Secrets Not Working**
- Verify secret names match exactly (case-sensitive)
- Regenerate Vercel token if needed
- Check `.vercel/project.json` for correct IDs

**Domain Not Updating**
- Check Vercel dashboard for deployment status
- Verify DNS settings for custom domain
- Clear browser cache

### Getting Help
- Vercel docs: https://vercel.com/docs
- GitHub Actions logs in your repository
- Vercel support: https://vercel.com/help 