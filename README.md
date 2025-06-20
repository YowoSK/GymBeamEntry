# GymBeam Product App

A modern, responsive web application built with Next.js, TypeScript, and Tailwind CSS. This app allows authenticated users to browse products from the Fake Store API, view product details, and manage authentication with a GymBeam-branded UI.

## Features

- 🔒 **Authentication**: Simple login/logout flow (registration optional)
- 🛒 **Product List**: Browse products from the [Fake Store API](https://fakestoreapi.com/products)
- 📦 **Product Detail**: View detailed information for each product
- 🎨 **GymBeam Branding**: Official logo, colors, and consistent UI
- 💻 **Responsive Design**: Works on all modern browsers and devices
- ⚡ **Fast & Modern**: Built with Next.js 15, TypeScript, and Tailwind CSS

## Screenshots

> 

---

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

---

## Usage

- **Login:** Use any non-empty username and password to log in.
- **Browse Products:** Click "Produkty" in the navbar or "View Products" on the homepage.
- **View Details:** Click any product to see more information.
- **Logout:** Use the "Log out" button in the navbar.

---

## Project Structure

```
/components      # Reusable React components (Navbar, AuthProvider, etc.)
/src/app         # Next.js app directory (pages, layouts, styles)
/styles          # Custom CSS (if needed)
/public          # Static assets (logo, etc.)
```

---

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router, TypeScript)
- [Tailwind CSS](https://tailwindcss.com/)
- [Fake Store API](https://fakestoreapi.com/)

---

## Customization

- **Branding:** Replace the logo or colors in `tailwind.config.js` and `/public` as needed.
- **API:** Swap out the Fake Store API for your own backend if desired.

---

## License

This project is for educational/demo purposes only. Not affiliated with GymBeam.