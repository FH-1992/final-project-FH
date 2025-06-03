const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

app.post("/booking", (req, res) => {
  const { name, email, date, message } = req.body;
  console.log("Přišla rezervace:", req.body);

  res.json({ status: "success", message: "Rezervace přijata" });
});

app.listen(PORT, () => {
  console.log(`Server běží na http://localhost:${PORT}`);
});
