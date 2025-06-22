"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

const FEATURED_IDS = [1, 2, 3, 4];

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.filter((p: Product) => FEATURED_IDS.includes(p.id)));
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center my-8">Načítavam produkty...</div>;

  return (
    <section className="w-full max-w-6xl mx-auto mb-10">
      <h2 className="mb-5 mt-6 text-xl font-semibold uppercase leading-5 text-black">Vybrané produkty</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="flex flex-col items-start bg-white border border-orange-100 shadow transition p-2 sm:p-3 xl:p-4"
            style={{ borderRadius: 0 }}
            aria-label={product.title}
            title={product.title}
          >
            <div className="relative w-full">
              <div className="relative aspect-square w-full">
                <img
                  src={product.image}
                  alt={product.title}
                  loading="eager"
                  className="h-full w-full object-contain"
                  width={215}
                  height={215}
                />
              </div>
            </div>
            <span className="product-name my-2 block text-sm overflow-hidden font-bold text-black h-[2.5rem]">
              <span className="line-clamp-2">{product.title}</span>
            </span>
            <span className="mt-0.5 block h-[1em] text-sm font-bold text-orange-600">
              <span className="pr-1 font-normal text-gray-700">Od</span>{product.price.toLocaleString("sk-SK", { style: "currency", currency: "EUR" })}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
