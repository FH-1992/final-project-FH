import "./room.jsx"; // importujeme náš nový CSS soubor

import { useState } from "react";

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
    <div className="page">
      <header className="header">
        <h1>Filip The Painter</h1>
        <p>Kvalitně. Rychle. Bez nepořádku.</p>
      </header>

      <div className="buttons">
        <button onClick={() => setView("references")}>References</button>
        <button onClick={() => setView("gallery")}>Photo gallery</button>
        <button onClick={() => (window.location.href = "/calculator")}>
          Calculator
        </button>
        <button onClick={() => (window.location.href = "/booking")}>
          Booking
        </button>
      </div>
      {view === "references" && (
        <section className="references">
          <h2>Co o nás říkají klienti</h2>
          <ul>
            {references.map((ref, index) => (
              <li key={index}>
                <p className="name">{ref.name}</p>
                <p>{ref.text}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {view === "gallery" && (
        <section className="gallery">
          <h2>Ukázky naší práce</h2>
          <div className="images">
            {gallery.map((src, index) => (
              <img key={index} src={src} alt={`Room ${index + 1}`} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
