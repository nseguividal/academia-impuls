<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1uWFsG-7z30TddCZd5aMkHvuUJVk-JRGe

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`




Workflow for editing your site
1️⃣ Start working (always sync first!)

Before making any changes, pull the latest code so your local project matches GitHub:

git checkout main          # make sure you’re on main
git pull origin main       # get the latest version from GitHub

2️⃣ Make your changes

Add a new page/component (e.g., About.tsx)

Modify existing code

Update styles, etc.

3️⃣ Save your work locally

Commit your changes to main:

git add .
git commit -m "Add About page"

4️⃣ Push to GitHub

Send your updated source code to GitHub:

git push origin main

5️⃣ Build the production site

Create a new version of the static site:

npm run build


This generates the dist/ folder.

6️⃣ Deploy to GitHub Pages

Option A: Manual way (what you’re doing now)

cd dist
git add .
git commit -m "Deploy new build"
git push origin gh-pages --force
cd ..


Option B: Recommended way (simpler) → Use gh-pages package:

Install:

npm install --save-dev gh-pages


Add to package.json scripts:

"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}


Deploy with:

npm run deploy


👉 This automatically builds and pushes dist/ to gh-pages without needing to cd dist.

7️⃣ Check your site

Go to:

https://nseguividal.github.io/academia-impuls/


(Wait 1–2 minutes for GitHub Pages to refresh.)
