const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;

app.use(cors()); // biar frontend bisa fetch
app.use(express.json());

// Data proyek
const projects = [
  {
    title: "Game Puzzle: Tebak Angka",
    description: "Sebuah game sederhana untuk menebak angka secara acak.",
    link: "https://github.com/kamu/tebak-angka"
  },
  {
    title: "Kalkulator",
    description: "Aplikasi kalkulator web sederhana.",
    link: "https://github.com/kamu/kalkulator"
  },
  {
    title: "Landing Page",
    description: "Landing page responsif untuk produk/layanan.",
    link: "https://github.com/kamu/landing-page"
  },
  {
    title: "Password Generator",
    description: "Pembuat password otomatis dengan opsi panjang dan karakter.",
    link: "https://github.com/kamu/password-generator"
  },
  {
    title: "To Do List",
    description: "Daftar tugas harian yang bisa disimpan di localStorage.",
    link: "https://github.com/kamu/to-do-list"
  }
];

// Endpoint
app.get("/api/projects", (req, res) => {
  res.json(projects);
});

app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});
