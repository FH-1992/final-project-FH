import { useState } from 'react';

export default function PaintingHomePage() {
  const [view, setView] = useState("home");

  const references = [
    { name: "Jan Novák", text: "Rychlá práce, krásný výsledek. Doporučuji!" },
    { name: "Petra Malá", text: "Malování bez starostí. Perfektní přístup." },
  ];

  const gallery = [
    "/images/room1.jpg",
    "/images/room2.jpg",
    "/images/room3.jpg",
    "/images/room4.jpg",
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Malování pokojů</h1>
        <p className="text-lg text-gray-600">Kvalitně. Rychle. Bez nepořádku.</p>
      </header>

      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setView("references")}
          className="bg-blue-500 text-white px-5 py-2 rounded-xl hover:bg-blue-600"
        >
          Reference
        </button>
        <button
          onClick={() => setView("gallery")}
          className="bg-green-500 text-white px-5 py-2 rounded-xl hover:bg-green-600"
        >
          Fotogalerie
        </button>
      </div>

      {view === "references" && (
        <section className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-center">Co o nás říkají klienti</h2>
          <ul className="space-y-4">
            {references.map((ref, index) => (
              <li
                key={index}
                className="bg-white p-4 rounded-xl shadow border border-gray-200"
              >
                <p className="font-semibold">{ref.name}</p>
                <p className="text-gray-700">{ref.text}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {view === "gallery" && (
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-center">Ukázky naší práce</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Room ${index + 1}`}
                className="rounded-xl shadow-sm hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
