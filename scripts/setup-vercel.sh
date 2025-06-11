#!/bin/bash

echo "🚀 Setting up Vercel deployment pipeline for your blog..."

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel@latest
fi

echo "🔗 Linking your project to Vercel..."
echo "Please follow the prompts to link your project to Vercel."
echo "Choose 'N' when asked if you want to link to an existing project (unless you already have one)."
echo "Set up and deploy? Choose 'N' - we'll handle deployment via GitHub Actions."

vercel link

echo ""
echo "📋 Next steps to complete your setup:"
echo ""
echo "1. Go to your Vercel dashboard (https://vercel.com/dashboard)"
echo "2. Find your project settings"
echo "3. Go to the 'Git' tab and connect your GitHub repository"
echo ""
echo "4. Add these secrets to your GitHub repository:"
echo "   Go to: Settings > Secrets and variables > Actions"
echo ""
echo "   Add these repository secrets:"
echo "   - VERCEL_TOKEN: Get from https://vercel.com/account/tokens"
echo "   - VERCEL_ORG_ID: Found in .vercel/project.json after running 'vercel link'"
echo "   - VERCEL_PROJECT_ID: Found in .vercel/project.json after running 'vercel link'"
echo ""
echo "5. Your deployment pipeline is now ready!"
echo "   - Push to main/master branch = Production deployment"
echo "   - Create Pull Request = Preview deployment"
echo "   - All deployments include quality checks (type checking, build testing)"
echo ""
echo "🎉 Setup complete! Your next push will trigger the automated deployment." 