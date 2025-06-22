export default function ZnackyPage() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-orange-600 mb-4">Značky</h1>
      <p className="mb-6 text-gray-700">Prehľad všetkých značiek dostupných na GymBeam. Tu nájdete produkty od najlepších výrobcov športovej výživy, fitness doplnkov a zdravých potravín.</p>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <li className="bg-white shadow p-4 text-center font-semibold">GymBeam</li>
        <li className="bg-white shadow p-4 text-center font-semibold">BeastPink</li>
        <li className="bg-white shadow p-4 text-center font-semibold">VanaVita</li>
        <li className="bg-white shadow p-4 text-center font-semibold">XBEAM</li>
        <li className="bg-white shadow p-4 text-center font-semibold">Strix</li>
        <li className="bg-white shadow p-4 text-center font-semibold">ActivLab</li>
        <li className="bg-white shadow p-4 text-center font-semibold">Optimum Nutrition</li>
        <li className="bg-white shadow p-4 text-center font-semibold">Nutrend</li>
      </ul>
    </div>
  );
}
