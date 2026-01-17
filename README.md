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
1.  **Locate the `out` folder**: After building, go to your project root.
2.  **Zip the contents**: Open the `out` folder, select **ALL** files and folders inside it, and compress them into a `.zip` file.
3.  **Upload**:
    *   Log in to **Namecheap cPanel** > **File Manager**.
    *   Navigate to your domain's folder (e.g., `/hifanglobal.org`).
    *   **Delete** any old files in that folder.
    *   **Upload** your new `.zip` file.
4.  **Extract**:
    *   Right-click the uploaded zip and select **Extract**.
    *   Ensure the files (like `index.html`) are directly in the domain folder, not inside a subfolder.
5.  **Verify**: Visit your website URL.

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
