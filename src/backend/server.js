require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

function getTransporter(email) {
  if (email.endsWith("@gmail.com")) {
    return nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });
  } else if (email.endsWith("@seznam.cz")) {
    return nodemailer.createTransport({
      host: "smtp.seznam.cz",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SEZNAM_USER,
        pass: process.env.SEZNAM_PASS,
      },
    });
  } else {
    throw new Error(
      "Nepodporovaná e-mailová doména. Podporujeme pouze gmail.com a seznam.cz"
    );
  }
}

app.post("/booking", async (req, res) => {
  const { name, email, date, message } = req.body;

  if (!email || !name || !date) {
    return res.status(400).json({
      status: "error",
      message: "Vyplň prosím jméno, e-mail a datum.",
    });
  }

  let transporter;
  try {
    transporter = getTransporter(email);
  } catch (error) {
    return res.status(400).json({ status: "error", message: error.message });
  }

  const mailOptions = {
    from: `"Rezervace od ${name}" <${email}>`,
    to: "tvoje-firemni-email-adresa@domena.cz", // sem přijde rezervační e-mail
    subject: `Nová rezervace od ${name}`,
    text: `Jméno: ${name}\nE-mail: ${email}\nDatum: ${date}\nZpráva: ${
      message || "žádná"
    }`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Rezervace odeslána:", req.body);
    res.json({
      status: "success",
      message: "Rezervace přijata a e-mail odeslán.",
    });
  } catch (err) {
    console.error("Chyba při odesílání e-mailu:", err);
    res
      .status(500)
      .json({ status: "error", message: "Chyba při odesílání e-mailu." });
  }
});

app.listen(PORT, () => {
  console.log(`Server běží na http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("API běží správně, připraveno přijímat rezervace na POST /booking");
});
