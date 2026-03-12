# 🚀 Deployment Guide: SecureEye CCTV

This project is optimized for deployment on **Vercel** and integration with **GitHub**.

## 1. Push to GitHub
If you haven't already, push your local code to a GitHub repository:

```powershell
# 1. Add your remote repository URL (Replace with your actual repo link)
git remote add origin https://github.com/YOUR_USERNAME/cctv-booking.git

# 2. Rename the branch to 'main'
git branch -M main

# 3. Push to GitHub
git push -u origin main
```

## 2. Deploy to Vercel
1.  **Sign Up/Login:** Go to [vercel.com](https://vercel.com).
2.  **Import Project:** Click "Add New" -> "Project".
3.  **Connect GitHub:** Authorize Vercel to access your GitHub repositories.
4.  **Select Repo:** Find and select `cctv-booking`.
5.  **Deploy:** Vercel will automatically detect **Next.js**. Click **Deploy**.

## 3. SEO & Production Features
- **Sitemap:** Automatically generated at `/sitemap.xml`.
- **Robots.txt:** Configured in `public/robots.txt`.
- **Structured Data:** JSON-LD LocalBusiness data is embedded in `app/layout.tsx`.
- **Performance:** Next.js App Router ensures minimal bundle sizes and fast TTFB.

## 4. Continuous Integration (CI)
Every time you `git push` to your GitHub `main` branch, Vercel will automatically:
1.  Run a production build.
2.  Run tests (if any).
3.  Deploy a live preview or production update.

---
*Created by Gemini CLI*
