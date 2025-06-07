import "./booking.css";

import { useState } from "react";

export default function BookingPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Chyba při odesílání: " + (data.message || "Neznámá chyba"));
      }
    } catch (error) {
      alert("Chyba serveru: " + error.message);
    }
  };

  return (
    <div className="booking-container">
      <h2 className="booking-title">Rezervace malování</h2>

      {submitted ? (
        <p className="booking-success">
          Děkujeme! Vaše rezervace byla odeslána.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label className="form-label">Jméno</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">E-mail</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Datum</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Zpráva / poznámka</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              className="form-input"
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Odeslat rezervaci
          </button>
        </form>
      )}
    </div>
  );
}
