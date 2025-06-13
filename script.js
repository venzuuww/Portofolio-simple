// Animasi kursor custom
const cursor = document.createElement("div");
cursor.id = "cursor";
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.top = '${e.clientY}px';
  cursor.style.left = '${e.clientX}px';
});

// Data proyek langsung (tanpa backend)
const projects = [
  {
    title: "Game Puzzle: Tebak Angka",
    description: "Sebuah game sederhana untuk menebak angka secara acak.",
    link: "#"
  },
  {
    title: "Kalkulator",
    description: "Aplikasi kalkulator web sederhana.",
    link: "#"
  },
  {
    title: "Landing Page",
    description: "Landing page responsif untuk produk/layanan.",
    link: "#"
  },
  {
    title: "Password Generator",
    description: "Pembuat password otomatis dengan opsi panjang dan karakter.",
    link: "#"
  },
  {
    title: "To Do List",
    description: "Daftar tugas harian yang bisa disimpan di localStorage.",
    link: "#"
  }
];

// Tampilkan data project ke halaman
function loadProjects() {
  const container = document.getElementById("projects-container");

  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-purple-500/30 transition duration-300";
    card.innerHTML = `
      <h3 class="text-lg font-semibold text-white mb-2">${project.title}</h3>
      <p class="text-gray-300 mb-2">${project.description}</p>
      <a href="${project.link}" class="text-purple-400 hover:underline" target="_blank">Lihat Proyek</a>
    `;
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", loadProjects);