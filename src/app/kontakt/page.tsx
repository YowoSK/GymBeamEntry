export default function KontaktPage() {
  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-orange-600 mb-4">Kontakt</h1>
      <p className="mb-6 text-gray-700">Máte otázky? Kontaktujte nás prostredníctvom formulára alebo na nižšie uvedených kontaktoch.</p>
      <div className="bg-white shadow p-6 mb-6">
        <h2 className="text-lg font-semibold mb-2">Kontaktný formulár</h2>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Vaše meno" className="border border-gray-300 px-3 py-2" required />
          <input type="email" placeholder="Váš e-mail" className="border border-gray-300 px-3 py-2" required />
          <textarea placeholder="Vaša správa" className="border border-gray-300 px-3 py-2" rows={4} required />
          <button type="submit" className="bg-orange-500 text-white font-bold py-2 px-4 hover:bg-orange-600 transition">Odoslať</button>
        </form>
      </div>
      <div className="bg-white shadow p-6">
        <h2 className="text-lg font-semibold mb-2">Kontaktné údaje</h2>
        <p className="mb-1">E-mail: <a href="mailto:info@gymbeam.sk" className="text-orange-600 underline">info@gymbeam.sk</a></p>
        <p className="mb-1">Telefón: <a href="tel:+421123456789" className="text-orange-600 underline">+421 123 456 789</a></p>
        <p>Adresa: Rastislavova 93, 040 01 Košice, Slovensko</p>
      </div>
    </div>
  );
}
