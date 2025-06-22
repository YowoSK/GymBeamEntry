"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("user");
      // Ak nie je lognuty a nie je na /login, pošle na login
      if (!user && pathname !== "/login") {
        router.replace("/login");
      }
    }
  }, [router, pathname]);

  if (typeof window !== "undefined") {
    if (pathname === "/login") {
      return <>{children}</>;
    }
    const user = localStorage.getItem("user");
    if (!user) {
      return null;
    }
  }

  return <>{children}</>;
}
