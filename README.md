# GymBeam Product App

A modern, responsive e-commerce web application built with Next.js 15, TypeScript, and Tailwind CSS. This app features authentication, product browsing, detailed product pages, and a suite of informational and marketing pages, all styled with GymBeam branding.

## Features

- 🔒 **Authentication**: Simple login/logout flow (see below for test credentials)
- 🛒 **Product List**: Browse products from the [Fake Store API](https://fakestoreapi.com/products)
- 📦 **Product Detail**: View detailed information for each product
- 📰 **Informational Pages**: Značky, Novinky, Akcie, Kontakt, Blog, and more (see footer)
- 🎨 **GymBeam Branding**: Official logo, colors, and consistent UI
- 💻 **Responsive Design**: Works on all modern browsers and devices
- ⚡ **Fast & Modern**: Built with Next.js 15, TypeScript, and Tailwind CSS

## Test Login

Use the following credentials to log in:

- **Username:** `kevinryan`
- **Password:** `kev02937@`

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

3. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## Usage

- **Login:** Use the test credentials above to log in.
- **Browse Products:** Click "Produkty" in the navbar or view featured products on the homepage.
- **View Details:** Click any product to see more information and similar products.
- **Informational Pages:** Access Značky, Novinky, Akcie, Kontakt, Blog, and other pages via the navbar and footer.
- **Logout:** Use the "Logout" button in the navbar.

## Project Structure

```
/components      # Reusable React components (Navbar, Footer, AuthProvider, etc.)
/src/app         # Next.js app directory (routing, pages, layouts, styles)
/styles          # Custom CSS (globals, Tailwind overrides)
/public          # Static assets (logo, images, etc.)
```

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router, TypeScript)
- [Tailwind CSS](https://tailwindcss.com/)
- [Fake Store API](https://fakestoreapi.com/)

## Customization

- **Branding:** Update the logo or colors in `tailwind.config.js` and `/public` as needed.
- **API:** Swap out the Fake Store API for your own backend if desired.
- **Pages:** Add or edit informational pages in `/src/app/content/`.

## License

This project is for educational/demo purposes only. Not affiliated with GymBeam.