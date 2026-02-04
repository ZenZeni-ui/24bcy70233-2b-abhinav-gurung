# Netlify Deployment Guide

## 📋 Prerequisites

Before deploying to Netlify, ensure:

1. **Repository Created:** Create a new GitHub repository named `24bcy70233-2b-abhinav-gurung`
2. **GitHub Account:** Active account with [@ZenZeni-ui](https://github.com/ZenZeni-ui)
3. **Netlify Account:** Free account at [netlify.com](https://netlify.com)
4. **Local Git Setup:** Configured with your credentials

## 🚀 Step-by-Step Deployment

### Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Sign in with your account (@ZenZeni-ui)
3. Click "New" button
4. **Repository name:** `24bcy70233-2b-abhinav-gurung`
5. **Description:** Dynamic Product Filter Application - 2B Release
6. Choose **Public**
7. Click "Create repository"

### Step 2: Push Code to GitHub

Once the repository is created:

```bash
# Navigate to project directory
cd c:\Users\grgab\Downloads\24BCY70233-2b-Abhinav-Gurung-main

# Remote is already configured, just push
git push -u origin main
```

### Step 3: Deploy to Netlify

#### Option A: Using Netlify CLI (Quick)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify (opens browser for authentication)
netlify login

# Deploy to production
netlify deploy --prod
```

#### Option B: Using Netlify Dashboard (Recommended)

1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Click "New site from Git"
3. Select **GitHub** as provider
4. Search for `24bcy70233-2b-abhinav-gurung`
5. Verify build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
   - **Node version:** 18
6. Click "Deploy site"
7. Wait for build to complete

Netlify automatically detects `netlify.toml` configuration.

### Step 4: Configure Custom Domain (Optional)

1. In Netlify dashboard, go to Site settings
2. Click "Change site name"
3. Enter a custom subdomain
4. Or add custom domain under "Domain management"

## 📦 Build Configuration

The `netlify.toml` file includes:

```toml
[build]
  command = "npm run build"
  publish = "build"

[build.environment]
  NODE_VERSION = "18"
  NPM_VERSION = "9"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "SAMEORIGIN"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

## 🔒 Environment Variables

If you need environment variables, add them in Netlify dashboard:

1. Site settings → Build & deploy → Environment
2. Click "Edit variables"
3. Add your variables:
   - Key: `REACT_APP_API_URL`
   - Value: `your_api_endpoint`

The `.env.local` file won't be committed; use Netlify environment variables instead.

## ✅ Deployment Checklist

- [ ] GitHub repository created (`24bcy70233-2b-abhinav-gurung`)
- [ ] Code pushed to main branch
- [ ] Netlify account created
- [ ] netlify.toml file present and configured
- [ ] package.json build script works (`npm run build`)
- [ ] build/ directory generates successfully
- [ ] All dependencies in package.json
- [ ] .gitignore prevents node_modules upload
- [ ] Environment variables set (if needed)

## 🔍 Troubleshooting

### Build Fails

1. Check build logs in Netlify dashboard
2. Verify `npm run build` works locally
3. Check Node.js version compatibility
4. Clear cache: Site settings → Build & deploy → Trigger deploy

### Site Shows Old Content

1. Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
2. Clear browser cache
3. Deploy again in Netlify

### React Router Issues

Already fixed with redirect rules in `netlify.toml`:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Performance Issues

- Check Lighthouse in Netlify Analytics
- Optimize images and assets
- Enable Gzip compression (automatic)
- Use CDN (automatic with Netlify)

## 📊 Post-Deployment

### Monitor Performance

- Netlify Analytics dashboard
- Google Lighthouse scores
- Network requests in DevTools

### Set Up Continuous Deployment

1. Push code to GitHub
2. Netlify automatically rebuilds and deploys
3. Check deployment status in dashboard

### Enable HTTPS

Automatic with Netlify - no additional setup needed.

## 📝 Project Information

- **Repository:** 24bcy70233-2b-abhinav-gurung
- **Build Command:** `npm run build`
- **Publish Directory:** `build`
- **Node Version:** 18
- **Package Manager:** npm

## 💡 Tips

- Netlify free tier includes automatic SSL, CDN, and continuous deployment
- Builds are cached for faster deployments
- Preview deployments on every pull request
- 100 GB bandwidth per month on free tier

## 📧 Support

For deployment issues:
- [Netlify Support Docs](https://docs.netlify.com/)
- [Netlify Community](https://community.netlify.com/)
- GitHub Issues on this repository

---

**Last Updated:** February 4, 2026
