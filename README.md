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

`git checkout main`          # make sure you’re on main
`git pull origin main`       # get the latest version from GitHub

2️⃣ Make your changes

Add a new page/component (e.g., About.tsx)

Modify existing code

Update styles, etc.

3️⃣ Save your work locally

Commit your changes to main:

`git add .`
`git commit -m "Add About page"`

4️⃣ Push to GitHub

Send your updated source code to GitHub:

`git push origin main`

5️⃣ Build the production site

Create a new version of the static site:

`npm install`      # només si no tens els node_modules actualitzats

`npm run build`   # genera la carpeta dist/ amb la web estàtica

This generates the dist/ folder.

6️⃣ Veure un preview de la WEB (localment)

`npm run dev` # preview de com es veuria GitHub Pages els fitxers (servei de desenvolupament)


7️⃣ Visualitzar Web amb GitHub
Despres del `npm run build` i des del directori principal, he de fer:

 `git checkout gh-pages`

⚠️ Si t’avisa de “local changes would be overwritten”, fes: `git add .` i `git commit -m "Save changes"`  # per guardar-ho abans
 
 `cp -r dist/* .`  # Copiar els fitxers del build (dist) a gh-pages

 `git add .`  # afegir fitxers al git

 `git commit -m "Deploy new build"`  # fer le commit

 `git push origin gh-pages --force`  # pujar-ho a GitHub

7️⃣ Tornar a main per seguir treballant
`git checkout main`





👉 Check your site

Go to:

https://nseguividal.github.io/academia-impuls/


(Wait 1–2 minutes for GitHub Pages to refresh.)



MANERA MENYS SEGURA DE FER-HO, deixaré de fer-ho: 
6️⃣ Deploy to GitHub Pages

`cd dist`
`git add .`
`git commit -m "Deploy new build"`
`git push origin gh-pages --force`
`cd ..`
