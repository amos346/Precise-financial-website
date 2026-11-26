# Precise Financial Systems | Legal & Financial Consultancy

A premium, modern, minimalist, and highly professional website for **Precise Financial Systems**, a premier legal and financial services firm based in Lagos, Nigeria.

## Technology Stack

- **React** (v19)
- **Vite**
- **TypeScript**
- **Tailwind CSS** (v4)
- **Framer Motion / Motion** (v12)
- **Lucide React**

---

## Project Structure

```text
├── .env.example
├── .gitignore
├── README.md
├── index.html
├── metadata.json
├── package.json
├── package-lock.json
├── tsconfig.json
├── vercel.json
├── vite.config.ts
├── public/
│   └── assets/
│       └── aistudio/
│           ├── WhatsApp_Image_2026-11-25_at_6.57.51_PM_0d3a8fff.jpeg
│           ├── WhatsApp_Image_2026-11-25_at_6.57.51_PM__1__c5328d90.jpeg
│           ├── WhatsApp_Image_2026-11-25_at_6.57.51_PM__2__ce3837f3.jpeg
│           ├── WhatsApp_Image_2026-11-25_at_6.57.52_PM_aacaeec9.jpeg
│           ├── WhatsApp_Image_2026-11-25_at_6.57.52_PM__1__9422fa8e.jpeg
│           └── WhatsApp_Image_2026-11-25_at_6.57.52_PM__2__853a172e.jpeg
└── src/
    ├── App.tsx
    ├── main.tsx
    ├── index.css
    └── components/
        ├── Navbar.tsx
        ├── Hero.tsx
        ├── AboutUs.tsx
        ├── PracticeAreas.tsx
        ├── ServiceModal.tsx
        ├── LawGallery.tsx
        ├── WhyChooseUs.tsx
        ├── ApproachCommitment.tsx
        ├── ContactSection.tsx
        ├── Footer.tsx
        └── WhatsAppWidget.tsx
```

---

## Getting Started & Installation

1. **Clone or Extract the Project**
   Extract the downloaded ZIP file to your local computer.

2. **Install Dependencies**
   Open your terminal in the project root directory and run:
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

4. **Build for Production**
   ```bash
   npm run build
   ```
   The production build will be generated in the `dist/` directory.

---

## GitHub & Vercel Deployment Instructions

1. **Upload to GitHub**
   - Create a new repository on GitHub.
   - Initialize git and push your project:
     ```bash
     git init
     git add .
     git commit -m "Initial commit - Precise Financial Systems website"
     git branch -M main
     git remote add origin <YOUR_GITHUB_REPOSITORY_URL>
     git push -u origin main
     ```

2. **Deploy on Vercel**
   - Log in to your [Vercel Dashboard](https://vercel.com).
   - Click **Add New...** > **Project** and import your GitHub repository.
   - Vercel will automatically detect **Vite** as the framework preset:
     - **Root Directory:** `./`
     - **Build Command:** `npm run build`
     - **Output Directory:** `dist`
     - **Install Command:** `npm install`
   - Click **Deploy**.

---

## Environment Variables

Copy `.env.example` to `.env` if needed for local development:
```bash
cp .env.example .env
```
No secret API keys are required for static deployment.
