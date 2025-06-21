"use client";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("user");
      router.push("/login");
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition font-semibold"
    >
      Logout
    </button>
  );
}
