import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router";

import PaintPriceCalculator from "./calculator";
import Room from "./room";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Room />} />
        <Route path="/calculator" element={<PaintPriceCalculator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
