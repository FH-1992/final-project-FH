import { useState } from "react";

export default function PaintPriceCalculator() {
  const [area, setArea] = useState("");
  const [colorType, setColorType] = useState("bila");

  const numericArea = parseFloat(area);
  const isValidArea = !isNaN(numericArea) && numericArea > 0;

  const pricePerSquareMeter = colorType === "bila" ? 60 : 75;

  const totalPrice = isValidArea ? numericArea * pricePerSquareMeter : 0;

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-50 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Painting price</h2>

      <label className="block mb-2 font-semibold" htmlFor="area">
        Zadejte plochu v m²:
      </label>
      <input
        id="area"
        type="number"
        min="0"
        step="0.1"
        value={area}
        onChange={(e) => setArea(e.target.value)}
        placeholder="např. 100"
        className="w-full p-2 mb-4 border rounded"
      />

      <label className="block mb-2 font-semibold">Vyberte barvu:</label>
      <div className="mb-4">
        <label className="mr-4">
          <input
            type="radio"
            name="colorType"
            value="bila"
            checked={colorType === "bila"}
            onChange={() => setColorType("bila")}
            className="mr-1"
          />
          Bílá (60 Kč/m²)
        </label>

        <label>
          <input
            type="radio"
            name="colorType"
            value="barevna"
            checked={colorType === "barevna"}
            onChange={() => setColorType("barevna")}
            className="mr-1"
          />
          Barevná (75 Kč/m²)
        </label>
      </div>

      <div className="text-center text-xl font-bold">
        Cena: {isValidArea ? totalPrice.toLocaleString("cs-CZ") + " Kč" : "-"}
      </div>
    </div>
  );
}
