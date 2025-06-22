# GymBeam Product App

A modern, responsive e-commerce web application built with Next.js 15, TypeScript, and Tailwind CSS. This app features authentication, product browsing, detailed product pages, search, and a suite of informational and marketing pages, all styled with GymBeam branding.

## Features

- 🔒 **Authentication**: Simple login/logout flow (see below for test credentials)
- 🛒 **Product List**: Browse products from the [Fake Store API](https://fakestoreapi.com/products)
- 🔍 **Product Search**: Search for products by name or keyword using the search bar in the navbar
- 📦 **Product Detail**: View detailed information for each product, including description, price, category, and similar products
- 📰 **Informational Pages**: Značky, Novinky, Akcie, Kontakt, Blog, and more (see footer)
- 🏷️ **Product Filtering**: Filter products by category and sort by various criteria (newest, bestsellers, price, rating, etc.)
- 🎨 **GymBeam Branding**: Official logo, colors, and consistent UI
- 💻 **Responsive Design**: Works on all modern browsers and devices
- ⚡ **Fast & Modern**: Built with Next.js 15, TypeScript, and Tailwind CSS

## Functionality

- **User Authentication**
  - Login required to access the main site (except /login)
  - Logout available from the navbar

- **Product Browsing**
  - Homepage shows featured products and blog slider
  - "Produkty" page lists all products with filtering and sorting
  - Product detail page shows all product info and similar products

- **Product Search**
  - Search bar in the navbar allows searching by product name or keyword
  - Search results update the product list accordingly

- **Product Filtering & Sorting**
  - Filter by category (e.g. Oblečenie, Doplnky, Elektronika, etc.)
  - Sort by newest, bestsellers, reviews, rating, price (asc/desc)

- **Informational & Marketing Pages**
  - Značky: Overview of all brands
  - Novinky: Latest products and news
  - Akcie: Current discounts and special offers
  - Kontakt: Contact form and company contact info
  - Blog: Links to fitness and lifestyle blog posts
  - Footer: Links to all informational pages (Obchodné podmienky, Ochrana osobných údajov, Reklamačný poriadok, Pridaj sa do tímu, Veľkoobchod, Najčastejšie otázky, Overovanie recenzií, Doručenie a platba, Predajňa Košice, Mobilná aplikácia, Nastavenie cookies)

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
- **Search:** Use the search bar in the navbar to find products by name or keyword.
- **Filter/Sort:** Use category filters and sorting options on the products page.
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