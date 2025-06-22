"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rating?: { rate: number; count: number };
}

export default function ProductDetailPage() {
  const params = useParams();
  const { id } = params;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [similar, setSimilar] = useState<Product[]>([]);

  useEffect(() => {
    if (!id) return;
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Nepodarilo sa načítať produkt.");
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    if (!product) return;
    fetch(`https://fakestoreapi.com/products/category/${encodeURIComponent(product.category)}`)
      .then((res) => res.json())
      .then((data) => {
        setSimilar(data.filter((p: Product) => p.id !== product.id).slice(0, 4));
      });
  }, [product]);

  if (loading) return <div className="text-center mt-10">Načítava sa...</div>;
  if (error) return <div className="text-center text-red-500 mt-10">{error}</div>;
  if (!product) return <div className="text-center mt-10">Produkt nebol nájdený.</div>;

  function getBreadcrumbs(product: Product) {
    let nav = [];
    switch (product.category) {
      case "men's clothing":
        nav = [
          { name: "Hlavná stránka", href: "/" },
          { name: "Oblečenie", href: "/products?cat=oblecenie" },
          { name: "Pánske oblečenie", href: "/products?cat=men" },
        ];
        break;
      case "women's clothing":
        nav = [
          { name: "Hlavná stránka", href: "/" },
          { name: "Oblečenie", href: "/products?cat=oblecenie" },
          { name: "Dámske oblečenie", href: "/products?cat=women" },
        ];
        break;
      case "jewelery":
        nav = [
          { name: "Hlavná stránka", href: "/" },
          { name: "Doplnky", href: "/products?cat=doplnky" },
          { name: "Šperky", href: "/products?cat=jewelery" },
        ];
        break;
      case "electronics":
        nav = [
          { name: "Hlavná stránka", href: "/" },
          { name: "Elektronika", href: "/products?cat=electronics" },
        ];
        break;
      default:
        nav = [
          { name: "Hlavná stránka", href: "/" },
          { name: product.category, href: `/products?cat=${encodeURIComponent(product.category)}` },
        ];
    }
    nav.push({ name: product.title, href: `/products/${product.id}` });
    return nav;
  }

  const breadcrumbs = getBreadcrumbs(product);

  return (
    <div className="max-w-6xl mx-auto px-2 sm:px-4 py-6">
      <nav className="text-sm text-gray-500 flex flex-wrap gap-1 mb-2">
        {breadcrumbs.map((b, i) => (
          <span key={b.name} className="flex items-center">
            {i > 0 && <span className="mx-1">»</span>}
            {i < breadcrumbs.length - 1 ? (
              <Link href={b.href} className="hover:underline text-gray-500">{b.name}</Link>
            ) : (
              <span className="text-gray-800 font-semibold">{b.name}</span>
            )}
          </span>
        ))}
      </nav>
      <div className="my-4 grid grid-cols-1 gap-12 md:grid-cols-[1fr_2fr]">
        <div className="col-span-1">
          <div className="flex w-full">
            <div data-test="pdp-product-image" className="relative flex flex-1 flex-col space-y-1">
              <div className="flex w-full flex-1 justify-center items-center">
                <img
                  src={product.image}
                  alt={product.title}
                  loading="eager"
                  className="h-full w-full max-h-96 object-contain bg-contain bg-center bg-no-repeat"
                  width={400}
                  height={400}
                />
              </div>
              <div className="flex flex-row flex-wrap justify-center gap-1 w-full mt-2">
                {product.category === "electronics" && (
                  <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 font-semibold select-none border border-blue-300 rounded">Elektronika</span>
                )}
                {product.category === "jewelery" && (
                  <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-0.5 font-semibold select-none border border-yellow-300 rounded">Šperk</span>
                )}
                {(product.category === "men's clothing" || product.category === "women's clothing") && (
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 font-semibold select-none border border-green-300 rounded">Oblečenie</span>
                )}
                {product.id === 1 && (
                  <span className="bg-green-200 text-green-800 text-xs px-2 py-0.5 font-semibold select-none border border-green-400 rounded">Vegan</span>
                )}
                {product.id > 15 && (
                  <span className="bg-orange-100 text-orange-700 text-xs px-2 py-0.5 font-semibold select-none border border-orange-300 rounded">Novinka</span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 min-h-[570px] md:min-h-[453px]">
          <div className="mb-4 md:flex-nowrap">
            <h1>
              <button data-test="pdp-product-name" className="page-title mb-1 cursor-pointer border-none bg-transparent text-left text-lg font-bold text-black" type="button">
                {product.title} - GymBeam
              </button>
            </h1>
            <div className="mb-3 flex flex-1 items-center justify-between">
              <p className="text-xs text-gray-500">Výrobca:&nbsp;
                <a data-testid="link" aria-label="GymBeam" className="underline" data-test="pdp-manufacturer" href="https://gymbeam.sk">GymBeam</a>
              </p>
              <div data-test="pdp-reviews-stars-and-percentage" className="cursor-pointer">
                <button type="button" className="flex w-fit cursor-pointer border-b border-transparent hover:border-b hover:border-gray-300" aria-label="Rating" data-test="rating-component">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="-mx-0.5" data-test={`star-${i + 1}`}>
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024" className={`h-6 w-6 ${product.rating && product.rating.rate >= i + 1 ? 'fill-orange-500' : 'fill-gray-300'}`}><path d="M804.645 444.599c-1.499-4.681-5.888-7.899-10.789-7.899h-206.958l-64.073-196.754c-1.536-4.645-5.888-7.826-10.825-7.826-4.901 0-9.289 3.182-10.825 7.863l-64.439 196.754h-206.592c-4.901 0-9.289 3.218-10.825 7.863-1.499 4.681 0.146 9.874 4.096 12.763l167.205 121.783-64.439 197.851c-1.536 4.681 0.146 9.838 4.133 12.727 3.95 2.889 9.399 2.889 13.349 0l168.338-122.185 167.936 122.149c2.011 1.463 4.315 2.231 6.693 2.231s4.681-0.768 6.693-2.231c4.023-2.889 5.669-8.009 4.133-12.727l-64.439-197.851 167.57-121.783c3.95-2.889 5.632-8.046 4.059-12.727z" /></svg>
                      </span>
                    ))}
                  </div>
                  <div className="ml-1 flex items-center text-gray-500">
                    {product.rating && <span className="font-bold">{(product.rating.rate * 20).toFixed(0)}&nbsp;%</span>}
                    {product.rating && <span className="ml-1 hidden font-bold md:inline">({product.rating.count})</span>}
                  </div>
                </button>
              </div>
            </div>
            <div data-test="pdp-product-description-short" className="mb-5 w-full">
              <div className="block text-justify">
                <div>
                  <p><strong>{product.title}</strong> <span style={{ fontWeight: 400 }}>{product.description}</span></p>
                </div>
              </div>
            </div>
          </div>
          <div className="min-w-fit md:w-1/2">
            <div className="flex flex-col">
              <div className="order-2 flex md:order-1">
                <div className="my-2 flex flex-wrap gap-2">
                  <div className="bg-orange-500 py-[0.15rem]">
                    <span className="text-white font-bold uppercase px-2 py-0.5">Skladom</span>
                  </div>
                  <div className="relative" role="button" aria-label="Delivery date tooltip" tabIndex={0}>
                    <span className="block h-full cursor-help font-bold px-2 py-0.5 bg-green-600 text-white">Môžete mať pozajtra</span>
                  </div>
                </div>
              </div>
              <div className="order-1 flex-col md:order-1">
                <div className="my-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div data-test="pdp-product-price" className="flex items-center">
                        <span className="text-orange-600 text-lg font-bold leading-none">
                          <span data-test="hp-bestsellers-price">{product.price.toFixed(2).replace('.', ',')} €</span>
                        </span>
                      </div>
                      <span className="text-xs">27,00 €/kg</span>
                    </div>
                    <div className="flex flex-col mt-0">
                      <div className="flex flex-col mt-1 items-end">
                        <div className="text-gray-700 text-xs text-right">
                          <div>Doručenie: od <span><span data-test="hp-bestsellers-price">1,90 €</span></span></div>
                          <div>Zdarma pri nákupe nad <span><span data-test="hp-bestsellers-price">60,00 €</span></span></div>
                        </div>
                        <a className="text-gray-700 text-xs underline" href="https://gymbeam.sk/content/dorucenie-platba">Vrátenie tovaru zadarmo</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:mt-2">
              <div className="mb-4 flex flex-wrap">
                <div className="flex w-full flex-col gap-3 md:flex-row md:gap-y-0" data-test="hp-variant-section">
                  <div className="min-w-fit">
                    <div className="text-left">
                      <div className="flex flex-col">
                        <label className="text-gray-700 text-sm">Balenie (g)<span className="ml-1 text-red-500">*</span></label>
                        <div className="relative mt-1">
                          <select className="h-field px-3 transition rounded-none focus:rounded-none focus:shadow-md focus:shadow-gray-200 disabled:cursor-not-allowed disabled:opacity-50 outline-none border-2 border-black mt-1 min-h-[28px] w-full appearance-none bg-white bg-no-repeat pr-[2em] text-sm">
                            <option value="2311">100 g</option>
                            <option value="5779">20 x 100 g</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="min-w-fit">
                    <div className="text-left">
                      <div className="flex flex-col">
                        <label className="text-gray-700 text-sm">Príchuť<span className="ml-1 text-red-500">*</span></label>
                        <div className="relative mt-1">
                          <select className="h-field px-3 transition rounded-none focus:rounded-none focus:shadow-md focus:shadow-gray-200 disabled:cursor-not-allowed disabled:opacity-50 outline-none border-2 border-black mt-1 min-h-[28px] w-full appearance-none bg-white bg-no-repeat pr-[2em] text-sm">
                            <option value="3757">arašidové maslo čokoláda</option>
                            <option value="171652">arašidové maslo a slaný karamel</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex min-w-fit flex-col items-start justify-between gap-1">
                    <div className="md:invisible">
                      <label htmlFor="quantity-input" className="mb-1 whitespace-nowrap text-sm">Množstvo</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        className="text-white leading-normal items-center justify-center transition-colors duration-500 ease-in-out bg-none hover:bg-transparent w-8 font-semibold h-7"
                        tabIndex={0}
                        aria-label="Množstvo minus"
                        onClick={() => setQuantity(q => Math.max(1, q - 1))}
                      >
                        <div className="flex flex-1 items-center justify-center space-x-2">
                          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="20px" height="20px"><path d="M0 11h28v6H0z"></path></svg>
                        </div>
                      </button>
                      <input
                        className="h-field text-sm leading-7 w-full transition rounded-none hover:border-[#757779] focus:rounded-none focus:shadow-md focus:shadow-gray-200 disabled:cursor-not-allowed disabled:opacity-50 outline-none border-2 border-black p-0 text-center"
                        id="quantity-input"
                        step={1}
                        min={1}
                        max={20000}
                        aria-label="Množstvo"
                        inputMode="decimal"
                        pattern="[0-9]*"
                        data-test="quantity-input"
                        autoComplete="off"
                        type="number"
                        value={quantity}
                        onChange={e => setQuantity(Math.max(1, Number(e.target.value)))}
                      />
                      <button
                        className="text-white leading-normal items-center justify-center transition-colors duration-500 ease-in-out bg-none hover:bg-transparent w-8 font-semibold h-7"
                        tabIndex={0}
                        aria-label="Množstvo plus"
                        onClick={() => setQuantity(q => q + 1)}
                      >
                        <div className="flex flex-1 items-center justify-center space-x-2">
                          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="20px" height="20px"><path d="M10 0h7v28h-7z"></path><path d="M0 11h28v6H0z"></path></svg>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="text-white font-bold leading-normal items-center justify-center transition-colors duration-500 ease-in-out bg-orange-500 hover:bg-orange-600 h-[50px] w-full uppercase md:w-full lg:w-full"
                tabIndex={0}
                title="Pridať do košíka"
                aria-label="Pridať do košíka"
                role="button"
                data-test="pdp-add-to-cart-main"
              >
                <div className="flex flex-1 items-center justify-center space-x-2 flex-row-reverse gap-2">
                  <span>
                    <svg aria-hidden="true" data-test="cart" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="680.7 197.5 39 28" fill="#ffffff"><path d="m709.9 206-2.8-8.5h-14.2L690 206h-9.3l.5 1.4 6.2 18.1h25.2l6.7-19.5h-9.4zm-15.1 17.4-1-6.5h5v6.5h-4zm-11.1-15.2h6.5l1 6.5h-5.3l-2.2-6.5zm8.8 0h6.4v6.5h-5.4l-1-6.5zm8.5 8.7h5l-1 6.5h-4v-6.5zm0-2.2v-6.5h6.4l-1 6.5H701zm8.6-6.5h6.5l-2.2 6.5h-5.3l1-6.5zm-15.2-8.5h11l2.1 6.3h-15.3l2.2-6.3zm-7.7 17.2h5l1 6.5h-3.8l-2.2-6.5zm24.3 6.5h-3.7l1-6.5h5l-2.3 6.5z"></path></svg>
                  </span>
                  Pridať do košíka
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h3 className="text-lg font-bold mb-4 text-gray-800">Zákazníci si tiež dokúpili</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {similar.length === 0 && <div className="col-span-4 text-gray-400 text-center">Žiadne podobné produkty</div>}
          {similar.map((item) => (
            <Link key={item.id} href={`/products/${item.id}`} className="bg-white shadow p-2 flex flex-col items-center transition" style={{ borderRadius: 0 }}>
              <img src={item.image} alt={item.title} className="h-20 w-20 object-contain mb-2" />
              <div className="text-xs text-gray-700 text-center line-clamp-2">{item.title}</div>
              <div className="text-orange-600 font-bold text-sm mt-1">{item.price.toFixed(2).replace('.', ',')} €</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
