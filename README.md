# Hifan Global Website

This is the official repository for the **Hifan Global** consultancy website. It is built using [Next.js](https://nextjs.org) (App Router), Material UI, and Framer Motion, designed to run as a static site for standard web hosting.

## 🚀 Project Overview

**Hifan Global** is a consultancy firm providing services in immigration, study abroad, recruitment, business consulting, digital marketing, and more. This website serves as their digital portfolio and contact hub.

### Tech Stack
-   **Framework**: Next.js 14+ (App Router)
-   **Styling**: Material UI (MUI) + Custom CSS
-   **Animations**: Framer Motion
-   **Routing**: Static Export with Dynamic Routes (`generateStaticParams`)
-   **Hosting**: Namecheap (Shared Hosting / cPanel)

---

## 🛠️ Getting Started

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### 2. Installation
Install the required dependencies:
```bash
npm install
```

### 3. Local Development
Run the development server to verify changes locally:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📦 Build & Deployment

This project uses `output: 'export'` in `next.config.mjs` to generate a purely static HTML/CSS/JS site. This allows it to be hosted on any standard web server (like Apache/Nginx on cPanel) without needing a Node.js server.

### 1. Build the Project
Run the build command to generate the static files:
```bash
npm run build
```
*   This will create an **`out`** folder in the root directory.
*   This folder contains everything needed for the live site.

### 2. Deploy to Namecheap (cPanel)

#### A. USA Website (`hifanglobal.org`)
1.  **Locate the `out` folder**: After building (`npm run build`), go to your project root.
2.  **Zip the contents**: specific for the USA version.
3.  **Upload**:
    *   Navigate to **File Manager** > **`hifanglobal.org`** folder.
    *   Upload and Extract your zip file here.

#### B. UK Website (`hifanglobal.uk`)
1.  **Locate the `out` folder**: After building the UK version.
2.  **Zip the contents**.
3.  **Upload**:
    *   Navigate to **File Manager** > **`public_html`** (Main Domain root).
    *   **Important**: Do not upload to a subfolder like `hifanglobal.uk`. Use `public_html` directly.
    *   Upload and Extract your zip file here.

#### General Steps
1.  **Delete** old files in the target folder before extracting.
2.  **Extract** the zip file.
3.  **Verify** files (like `index.html`) are in the root of the target folder.
4.  **Visit** the respective URL to verify.

---

## 📂 Project Structure

-   **`src/app`**: Main application routes (Pages).
-   **`src/components`**: Reusable UI components (Header, Footer, Content sections).
-   **`src/data`**: Static data files (Projects, Blog Posts).
-   **`src/theme`**: MUI theme configuration.
-   **`public`**: Static assets like images and fonts.

## ⚠️ Important Configurations

-   **`trailingSlash: true`**: Enabled in `next.config.mjs` to ensure subpages (like `/about`) generate folders with `index.html` (e.g., `/about/index.html`). This is critical for cPanel hosting to prevent 404 errors on refresh.
-   **`images: { unoptimized: true }`**: Enabled to allow Next.js `Image` component to work without a Node.js server.
