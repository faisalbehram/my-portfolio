# Deployment Guide - faisalbehram.com

This guide will help you deploy your portfolio to production and set up a custom domain.

## Option 1: Deploy with Vercel (Recommended - Easiest)

Vercel offers free hosting with automatic HTTPS and easy custom domain setup.

### Step 1: Push to GitHub

1. Create a new repository on GitHub (e.g., `faisal-behram-portfolio`)
2. Initialize git and push your code:

```bash
git init
git add .
git commit -m "Initial commit - Portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/faisal-behram-portfolio.git
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/login (use GitHub account)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Vite settings
5. Click "Deploy"
6. Your site will be live at `your-project-name.vercel.app`

### Step 3: Set Up Custom Domain (faisalbehram.com)

#### A. Purchase Domain

1. Buy domain from:
   - [Namecheap](https://www.namecheap.com) - Recommended
   - [Google Domains](https://domains.google)
   - [GoDaddy](https://www.godaddy.com)
   - [Cloudflare](https://www.cloudflare.com/products/registrar)

2. Search for available domains:
   - `faisalbehram.com`
   - `faisalbehram.dev`
   - `faisalbehram.net`
   - `faisalbehram.io`

#### B. Configure Domain in Vercel

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your domain: `faisalbehram.com` (or your chosen domain)
4. Vercel will show DNS records to configure

#### C. Configure DNS at Your Domain Registrar

**If using Namecheap/GoDaddy:**
- Go to your domain registrar's DNS settings
- Add these records (Vercel will show exact values):

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**If using Cloudflare:**
- Add your domain to Cloudflare
- Update nameservers at your registrar
- In Cloudflare DNS, add:
  - Type: CNAME, Name: @, Target: cname.vercel-dns.com (Proxy: Proxied)
  - Type: CNAME, Name: www, Target: cname.vercel-dns.com (Proxy: Proxied)

4. Wait 5-60 minutes for DNS propagation
5. Vercel will automatically issue SSL certificate

---

## Option 2: Deploy with Netlify

### Step 1: Push to GitHub (same as above)

### Step 2: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com) and sign up
2. Click "Add new site" → "Import an existing project"
3. Connect GitHub and select your repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

### Step 3: Set Up Custom Domain

1. In Netlify dashboard → Site settings → Domain management
2. Click "Add custom domain"
3. Enter `faisalbehram.com`
4. Follow Netlify's DNS instructions
5. Netlify will automatically configure SSL

---

## Option 3: Deploy with GitHub Pages

### Step 1: Install gh-pages package

```bash
npm install --save-dev gh-pages
```

### Step 2: Update package.json

Add these scripts:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "npm run build && gh-pages -d dist"
}
```

### Step 3: Update vite.config.js

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/faisal-behram-portfolio/' // Replace with your repo name
})
```

### Step 4: Deploy

```bash
npm run deploy
```

### Step 5: Enable GitHub Pages

1. Go to repository Settings → Pages
2. Source: Deploy from branch `gh-pages`
3. Your site: `https://YOUR_USERNAME.github.io/faisal-behram-portfolio/`

### Step 6: Custom Domain

1. Create `CNAME` file in `public` folder with: `faisalbehram.com`
2. In GitHub repo Settings → Pages, add custom domain
3. Configure DNS at your registrar:
   - Type: A records pointing to GitHub IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Type: CNAME, Name: www, Value: YOUR_USERNAME.github.io

---

## Domain Name Suggestions

Based on your name "Faisal Behram", here are domain options:

1. **faisalbehram.com** - Most professional
2. **faisalbehram.dev** - Tech-focused
3. **faisalbehram.net** - Alternative
4. **faisalbehram.io** - Modern tech
5. **fbehram.com** - Shorter option
6. **faisal-b.com** - Very short

## Quick Start (Vercel - Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Portfolio website"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Visit vercel.com
   - Import GitHub repo
   - Deploy (automatic)

3. **Add Custom Domain:**
   - Buy domain (namecheap.com recommended)
   - Add domain in Vercel settings
   - Update DNS records
   - Wait for SSL (automatic)

## Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Test contact form (integrate with email service)
- [ ] Add actual profile picture
- [ ] Update resume download link
- [ ] Test on mobile devices
- [ ] Test dark/light mode toggle
- [ ] Verify all sections load correctly
- [ ] Check Google Analytics (optional)
- [ ] Set up custom email (optional): hello@faisalbehram.com

## Contact Form Integration

To make the contact form work, integrate with:

1. **Formspree** (easiest):
   - Sign up at formspree.io
   - Get form endpoint
   - Update Contact.jsx form action

2. **EmailJS**:
   - Sign up at emailjs.com
   - Configure email service
   - Add EmailJS SDK

3. **Your own backend API**

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Domain Setup: Check your registrar's documentation

