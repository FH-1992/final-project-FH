import { useState } from "react";

export default function BookingPage() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/reservations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, date, time, service }),
    });
    const data = await response.json();
    alert("Rezervace vytvořena!");
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Jméno"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <input
        placeholder="Služba"
        value={service}
        onChange={(e) => setService(e.target.value)}
      />
      <button type="submit">Rezervovat</button>
    </form>
  );
}
