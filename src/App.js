import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router";

import Booking from "./booking";
import PaintPriceCalculator from "./calculator";
import Room from "./room";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Room />} />
        <Route path="/calculator" element={<PaintPriceCalculator />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
