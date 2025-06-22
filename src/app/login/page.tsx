"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (res.ok && data.token) {
        localStorage.setItem(
          "user",
          JSON.stringify({ username, token: data.token })
        );
        window.dispatchEvent(new Event("login-status-change"));
        router.push("/");
      } else {
        setError("Nesprávne meno alebo heslo.");
      }
    } catch {
      setError("Prihlásenie zlyhalo. Skúste to znova.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <div className="w-full max-w-lg mx-auto">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center">
            <img
              src="https://gymbeam.sk/media/logo/stores/1/GB_Logo_Energy_SK.png"
              alt="GymBeam logo"
              className="h-12 w-auto"
            />
          </div>
          <div className="text-sm text-gray-700 font-semibold">
            Zavolajte nám{" "}
            <span className="text-orange-500">12 34 567 890</span>
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center w-full">
        <div className="w-full max-w-lg mx-auto bg-white p-10 shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-orange-500">
            Prihlásenie užívateľa
          </h2>
          {error && (
            <div className="mb-4 text-red-500 text-left">{error}</div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Meno</label>
              <input
                type="text"
                className="w-full border px-3 py-2 focus:outline-none focus:ring focus:border-orange-400 bg-white"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoFocus
                required
              />
            </div>
            <div className="mb-2">
              <label className="block mb-1 font-medium">Heslo</label>
              <input
                type="password"
                className="w-full border px-3 py-2 focus:outline-none focus:ring focus:border-orange-400 bg-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 transition mb-2"
              disabled={loading}
            >
              {loading ? "Prihlasovanie..." : "Prihlásiť"}
            </button>
            <div className="mb-6">
              <a
                href="#"
                className="text-sm text-orange-500 hover:underline block mt-2 text-left"
              >
                Zabudli ste heslo?
              </a>
            </div>
          </form>
          <div className="border-t pt-6 mt-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Noví zákazníci
            </h3>
            <p className="mb-2 text-gray-700 text-sm">
              Ak u nás ešte nemáte účet, môžete si vytvoriť účet{" "}
              <a
                href="#"
                className="inline-block text-orange-500 font-semibold hover:underline text-sm"
              >
                tu
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
