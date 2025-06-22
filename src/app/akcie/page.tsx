export default function AkciePage() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-orange-600 mb-4">Akcie</h1>
      <p className="mb-6 text-gray-700">Využite aktuálne zľavy a špeciálne ponuky na vybrané produkty. Akcie platia len do vypredania zásob alebo do odvolania.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white shadow p-6 text-left">
          <h2 className="text-xl font-semibold mb-2">Just Whey 1000g</h2>
          <p className="text-gray-600 mb-2">Zľava 20% na všetky príchute. Kvalitný srvátkový proteín pre podporu rastu svalov.</p>
          <span className="inline-block bg-green-100 text-green-700 px-2 py-1 text-xs font-bold">Akcia</span>
        </div>
        <div className="bg-white shadow p-6 text-left">
          <h2 className="text-xl font-semibold mb-2">Protein Bar 60g</h2>
          <p className="text-gray-600 mb-2">Kúpte 2 a získajte 1 zadarmo! Skvelá desiata na cesty alebo po tréningu.</p>
          <span className="inline-block bg-green-100 text-green-700 px-2 py-1 text-xs font-bold">Akcia</span>
        </div>
      </div>
    </div>
  );
}
