"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description?: string;
  rating?: { rate: number; count: number };
}

const CATEGORY_LABELS: Record<string, string> = {
  "men's clothing": "Pánske oblečenie",
  "women's clothing": "Dámske oblečenie",
  "jewelery": "Šperky",
  "electronics": "Elektronika",
  oblecenie: "Oblečenie",
  doplnky: "Doplnky",
};

const SORT_OPTIONS = [
  { value: "new", label: "Najnovšie" },
  { value: "bestsellers", label: "Najpredávanejšie" },
  { value: "reviews_count", label: "Počet recenzií" },
  { value: "rating_summary", label: "Najlepšie hodnotené" },
  { value: "price_asc", label: "Najlacnejšie" },
  { value: "price_desc", label: "Najdrahšie" },
];

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [multiCategory, setMultiCategory] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [sort, setSort] = useState<string>("new");

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const cat = searchParams.get("cat");
    if (cat) {
      const catArr = cat.split(",").filter(Boolean);
      setMultiCategory(catArr);
      setSelectedCategory(catArr[0] || "");
    } else {
      setMultiCategory([]);
      setSelectedCategory("");
    }
  }, [searchParams, categories]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Nepodarilo sa načítať produkty.");
        setLoading(false);
      });
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const searchValueParam = searchParams.get("search")?.toLowerCase() || "";
  const filteredProducts = products.filter((p) => {
    if (multiCategory.length > 0) {
      if (multiCategory.includes("oblecenie")) {
        if (p.category === "men's clothing" || p.category === "women's clothing") return true;
      }
      if (multiCategory.includes("doplnky")) {
        if (p.category === "jewelery") return true;
      }
      if (multiCategory.includes("men")) {
        if (p.category === "men's clothing") return true;
      }
      if (multiCategory.includes("women")) {
        if (p.category === "women's clothing") return true;
      }
      if (multiCategory.some((cat) => cat === p.category)) return true;
      return false;
    }
    if (selectedCategory === "oblecenie") {
      return p.category === "men's clothing" || p.category === "women's clothing";
    }
    if (selectedCategory === "doplnky") {
      return p.category === "jewelery";
    }
    if (selectedCategory === "men") {
      return p.category === "men's clothing";
    }
    if (selectedCategory === "women") {
      return p.category === "women's clothing";
    }
    if (selectedCategory && p.category !== selectedCategory) return false;
    if (searchValueParam) {
      return (
        p.title.toLowerCase().includes(searchValueParam) ||
        (p.description && p.description.toLowerCase().includes(searchValueParam))
      );
    }
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sort) {
      case "new":
        return b.id - a.id; // Najnovšie ako prvé
      case "price_asc":
        return a.price - b.price;
      case "price_desc":
        return b.price - a.price;
      case "bestsellers":
      case "reviews_count":
      case "rating_summary":
      default:
        return 0;
    }
  });

  const handleCategoryToggle = (cat: string) => {
    let newCats = multiCategory.includes(cat)
      ? multiCategory.filter((c) => c !== cat)
      : [...multiCategory, cat];
    setMultiCategory(newCats);
    setSelectedCategory("");
    router.push(`/products?cat=${newCats.join(",")}`);
  };

  if (loading) return <div className="text-center mt-10">Načítava sa...</div>;
  if (error) return <div className="text-center text-red-500 mt-10">{error}</div>;

  const categoryOptions = [
    { value: "", label: "Všetky" },
    { value: "oblecenie", label: "Oblečenie" },
    { value: "doplnky", label: "Doplnky" },
    ...categories.map((cat) => ({ value: cat, label: CATEGORY_LABELS[cat] || cat })),
  ];

  return (
    <div className="max-w-[1800px] mx-auto px-2 sm:px-4 py-10">
      <div className="flex items-center gap-4 mb-8 justify-end">
        <div className="relative inline-block w-64">
          <div className="pointer-events-none absolute inset-y-0 flex items-center pl-2">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" className="my-auto fill-white"><path d="M18.211.062v23.404l9.1-8.852v6.258L15.937 31.938 4.563 20.872v-6.258l9.099 8.852V.062h4.548z"></path></svg>
          </div>
          <select
            data-test="category-select"
            aria-label="Kategória"
            className="h-10 px-3 transition rounded-none focus:rounded-none focus:shadow-grey-200 disabled:cursor-not-allowed disabled:opacity-50 outline-none border-black w-full appearance-none border-0 bg-gray-400 pl-7 pr-4 text-sm font-bold text-white focus:shadow-none"
            value={selectedCategory}
            onChange={e => {
              setSelectedCategory(e.target.value);
              setMultiCategory(e.target.value ? [e.target.value] : []);
              if (e.target.value) {
                router.push(`/products?cat=${e.target.value}`);
              } else {
                router.push(`/products`);
              }
            }}
          >
            {categoryOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
        <div className="relative inline-block w-64">
          <div className="pointer-events-none absolute inset-y-0 flex items-center pl-2">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" className="my-auto fill-white"><path d="M18.211.062v23.404l9.1-8.852v6.258L15.937 31.938 4.563 20.872v-6.258l9.099 8.852V.062h4.548z"></path></svg>
          </div>
          <select
            data-test="select"
            aria-label="Select"
            className="h-10 px-3 transition rounded-none focus:rounded-none focus:shadow-grey-200 disabled:cursor-not-allowed disabled:opacity-50 outline-none border-black w-full appearance-none border-0 bg-gray-400 pl-7 pr-4 text-sm font-bold text-white focus:shadow-none"
            value={sort}
            onChange={e => setSort(e.target.value)}
          >
            {SORT_OPTIONS.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
        {sortedProducts.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="flex w-full flex-col items-start bg-white border border-orange-100 shadow transition group p-2 sm:p-3 xl:p-4"
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
                <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
                  {product.category === "electronics" && (
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 font-semibold select-none" style={{ borderRadius: 0 }}>Elektronika</span>
                  )}
                  {product.category === "jewelery" && (
                    <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-0.5 font-semibold select-none" style={{ borderRadius: 0 }}>Šperk</span>
                  )}
                  {(product.category === "men's clothing" || product.category === "women's clothing") && (
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 font-semibold select-none" style={{ borderRadius: 0 }}>Oblečenie</span>
                  )}
                  {product.id === 1 && (
                    <span className="bg-green-200 text-green-800 text-xs px-2 py-0.5 font-semibold select-none" style={{ borderRadius: 0 }}>Vegan</span>
                  )}
                  {product.id > 15 && (
                    <span className="bg-orange-100 text-orange-700 text-xs px-2 py-0.5 font-semibold select-none" style={{ borderRadius: 0 }}>Novinka</span>
                  )}
                </div>
                <button
                  className="text-white font-bold leading-normal items-center justify-center bg-black/60 transition ease-in-out duration-300 absolute bottom-0 left-0 m-0 h-11 w-11 flex flex-1 items-center justify-center"
                  tabIndex={0}
                  title="Pridať do košíka"
                  aria-label="Pridať do košíka"
                  type="button"
                  onClick={e => { e.preventDefault(); /* TODO: handle add to cart */ }}
                >
                  <svg aria-hidden="true" data-test="cart" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="680.7 197.5 39 28" fill="#ffffff"><path d="m709.9 206-2.8-8.5h-14.2L690 206h-9.3l.5 1.4 6.2 18.1h25.2l6.7-19.5h-9.4zm-15.1 17.4-1-6.5h5v6.5h-4zm-11.1-15.2h6.5l1 6.5h-5.3l-2.2-6.5zm8.8 0h6.4v6.5h-5.4l-1-6.5zm8.5 8.7h5l-1 6.5h-4v-6.5zm0-2.2v-6.5h6.4l-1 6.5H701zm8.6-6.5h6.5l-2.2 6.5h-5.3l1-6.5zm-15.2-8.5h11l2.1 6.3h-15.3l2.2-6.3zm-7.7 17.2h5l1 6.5h-3.8l-2.2-6.5zm24.3 6.5h-3.7l1-6.5h5l-2.3 6.5z"></path></svg>
                </button>
              </div>
            </div>
            <span className="product-name my-2 block text-sm overflow-hidden font-bold text-black h-[2.5rem]">
              <span className="line-clamp-2">{product.title}</span>
            </span>
            <div className="flex items-center text-gray-500 font-bold text-xs m-0 mb-1 gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill={product.rating && product.rating.rate >= i + 1 ? '#ff6600' : '#e5e7eb'}
                  className="inline-block"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                </svg>
              ))}
              {product.rating && (
                <span className="ml-1">{product.rating.rate.toFixed(1)}</span>
              )}
              {product.rating && (
                <span className="ml-1 hidden font-bold md:inline">({product.rating.count})</span>
              )}
            </div>
            <span className="mt-0.5 block h-[1em] text-sm font-bold text-orange-600">
              <span className="pr-1 font-normal text-gray-700">Od</span>{product.price.toLocaleString("sk-SK", { style: "currency", currency: "EUR" })}
            </span>
          </Link>
        ))}
        {sortedProducts.length === 0 && (
          <div className="col-span-full text-center text-gray-400">Žiadne produkty v tejto kategórii.</div>
        )}
      </div>
    </div>
  );
}
