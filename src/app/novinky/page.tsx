export default function NovinkyPage() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-orange-600 mb-4">Novinky</h1>
      <p className="mb-6 text-gray-700">Objavte najnovšie produkty a trendy vo svete fitness, zdravého životného štýlu a športovej výživy. Pravidelne pre vás prinášame novinky, ktoré stoja za vyskúšanie!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white shadow p-6 text-left">
          <h2 className="text-xl font-semibold mb-2">Mini Protein Cookies</h2>
          <p className="text-gray-600 mb-2">Lahodné sušienky s vysokým obsahom bielkovín a vlákniny. Ideálne ako snack pre športovcov aj deti.</p>
          <span className="inline-block bg-orange-100 text-orange-700 px-2 py-1 text-xs font-bold">Novinka</span>
        </div>
        <div className="bg-white shadow p-6 text-left">
          <h2 className="text-xl font-semibold mb-2">ASAP Pre-Workout</h2>
          <p className="text-gray-600 mb-2">Predtréningovka s unikátnym zložením pre maximálny výkon a energiu počas tréningu.</p>
          <span className="inline-block bg-orange-100 text-orange-700 px-2 py-1 text-xs font-bold">Novinka</span>
        </div>
      </div>
    </div>
  );
}
