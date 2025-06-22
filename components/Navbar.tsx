"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const checkLogin = () => setIsLoggedIn(!!localStorage.getItem("user"));
    checkLogin();
    window.addEventListener("storage", checkLogin);
    window.addEventListener("login-status-change", checkLogin);
    return () => {
      window.removeEventListener("storage", checkLogin);
      window.removeEventListener("login-status-change", checkLogin);
    };
  }, []);

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (searchValue.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchValue.trim())}`);
      setSearchValue("");
    }
  };

  // Zatvorí dropdown po kliku
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    window.dispatchEvent(new Event("login-status-change"));
    setDropdownOpen(false);
    router.push("/login");
  };

  const handleLogin = () => {
    setDropdownOpen(false);
    router.push("/login");
  };

  return (
    <nav className="w-full bg-white border-b border-orange-100 shadow-sm top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        <Link href="/" className="flex items-center gap-2 min-w-[120px]">
          <Image src="https://gymbeam.sk/media/logo/stores/1/GB_Logo_Energy_SK.png" alt="GymBeam logo" width={140} height={40} className="h-10 w-auto sm:h-12" />
        </Link>
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/products" className="text-gray-800 hover:text-gymbeam-orange font-semibold transition">Produkty</Link>
          <Link href="/znacky" className="text-gray-800 hover:text-gymbeam-orange font-semibold transition">Značky</Link>
          <Link href="/novinky" className="text-gray-800 hover:text-gymbeam-orange font-semibold transition">Novinky</Link>
          <Link href="/akcie" className="text-gray-800 hover:text-gymbeam-orange font-semibold transition">Akcie</Link>
          <Link href="/kontakt" className="text-gray-800 hover:text-gymbeam-orange font-semibold transition">Kontakt</Link>
        </div>
        <div className="flex gap-2 items-center relative">
          <form
            onSubmit={handleSearch}
            className="hidden md:flex items-center gap-2 px-2 py-1"
            style={{ borderRadius: 0 }}
          >
            <input
              type="text"
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              className="border px-2 py-1 text-sm focus:outline-none"
              placeholder="Hľadať produkty..."
              style={{ borderRadius: 0 }}
            />
            <button type="submit" className="text-gymbeam-orange font-bold px-2 py-1" style={{ borderRadius: 0 }} aria-label="Hľadať">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M20 20l-3-3"/></svg>
            </button>
          </form>
          {/* Ikona osoby s dropdownom - vždy viditeľná, nie v burger menu TODO */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center justify-center p-2 text-gray-800 hover:text-gymbeam-orange focus:outline-none"
              aria-label="Účet"
              onClick={() => setDropdownOpen((v) => !v)}
              type="button"
            >
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M4 20c0-2.5 3.5-4 8-4s8 1.5 8 4" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-orange-100 shadow-lg z-50" style={{ borderRadius: 0 }}>
                {isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-gymbeam-orange font-semibold transition"
                    style={{ borderRadius: 0 }}
                  >
                    Odhlásiť sa
                  </button>
                ) : (
                  <button
                    onClick={handleLogin}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-gymbeam-orange font-semibold transition"
                    style={{ borderRadius: 0 }}
                  >
                    Prihlásiť sa
                  </button>
                )}
              </div>
            )}
          </div>
          <button
            className="md:hidden flex items-center justify-center p-2 text-gray-800 hover:text-gymbeam-orange focus:outline-none"
            aria-label="Otvoriť menu"
            onClick={() => setMobileMenuOpen((v) => !v)}
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-orange-100 shadow-lg px-4 py-4 flex flex-col gap-2 animate-fade-in z-40">
          <Link href="/products" className="text-gray-800 hover:text-gymbeam-orange font-semibold transition py-2" onClick={() => setMobileMenuOpen(false)}>Produkty</Link>
          <Link href="/znacky" className="text-gray-800 hover:text-gymbeam-orange font-semibold transition py-2" onClick={() => setMobileMenuOpen(false)}>Značky</Link>
          <Link href="/novinky" className="text-gray-800 hover:text-gymbeam-orange font-semibold transition py-2" onClick={() => setMobileMenuOpen(false)}>Novinky</Link>
          <Link href="/akcie" className="text-gray-800 hover:text-gymbeam-orange font-semibold transition py-2" onClick={() => setMobileMenuOpen(false)}>Akcie</Link>
          <Link href="/kontakt" className="text-gray-800 hover:text-gymbeam-orange font-semibold transition py-2" onClick={() => setMobileMenuOpen(false)}>Kontakt</Link>
          <form
            onSubmit={handleSearch}
            className="flex items-center gap-2 px-2 py-1 mt-2"
            style={{ borderRadius: 0 }}
          >
            <input
              type="text"
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              className="border px-2 py-1 text-sm focus:outline-none w-full"
              placeholder="Hľadať produkty..."
              style={{ borderRadius: 0 }}
            />
            <button type="submit" className="text-gymbeam-orange font-bold px-2 py-1" style={{ borderRadius: 0 }} aria-label="Hľadať">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M20 20l-3-3"/></svg>
            </button>
          </form>
        </div>
      )}
    </nav>
  );
}
