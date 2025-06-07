import "./calculator.css";

import { useEffect, useState } from "react";

export default function PaintPriceCalculator() {
  const [area, setArea] = useState("");
  const [colorType, setColorType] = useState("bila");

  useEffect(() => {
    const savedArea = localStorage.getItem("paint_area");
    const savedColor = localStorage.getItem("paint_color");

    if (savedArea) setArea(savedArea);
    if (savedColor) setColorType(savedColor);
  }, []);

  useEffect(() => {
    localStorage.setItem("paint_area", area);
  }, [area]);

  useEffect(() => {
    localStorage.setItem("paint_color", colorType);
  }, [colorType]);

  const numericArea = parseFloat(area);
  const isValidArea = !isNaN(numericArea) && numericArea > 0;

  const pricePerSquareMeter = colorType === "bila" ? 60 : 75;
  const totalPrice = isValidArea ? numericArea * pricePerSquareMeter : 0;

  return (
    <div className="calculator-container">
      <h2 className="calculator-title">Painting price</h2>

      <label htmlFor="area" className="form-label">
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
        className="form-input"
      />

      <label className="form-label">Vyberte barvu:</label>
      <div className="color-options">
        <label className="color-option">
          <input
            type="radio"
            name="colorType"
            value="bila"
            checked={colorType === "bila"}
            onChange={() => setColorType("bila")}
          />
          Bílá (60 Kč/m²)
        </label>

        <label className="color-option">
          <input
            type="radio"
            name="colorType"
            value="barevna"
            checked={colorType === "barevna"}
            onChange={() => setColorType("barevna")}
          />
          Barevná (75 Kč/m²)
        </label>
      </div>

      <div className="price-result">
        Cena: {isValidArea ? totalPrice.toLocaleString("cs-CZ") + " Kč" : "-"}
      </div>
    </div>
  );
}
