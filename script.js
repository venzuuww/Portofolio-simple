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
    link: "https://venzuuww.github.io/game-puzzle-tebak-angka/",
    image: "static/images/game-puzzle.png"
  },
  {
    title: "Kalkulator",
    description: "Aplikasi kalkulator web sederhana.",
    link: "https://venzuuww.github.io/kalkulator-sederhana/",
    image: "static/images/kalkulator.png"
  },
  {
    title: "Landing Page",
    description: "Landing page responsif untuk produk/layanan.",
    link: "https://venzuuww.github.io/landing-page/",
    image: "static/images/landing-page.png"
  },
  {
    title: "Password Generator",
    description: "Pembuat password otomatis dengan opsi panjang dan karakter.",
    link: "https://venzuuww.github.io/password-generator/",
    image: "static/images/password-generator.png"
  },
  {
    title: "To Do List",
    description: "Daftar tugas harian yang bisa disimpan di localStorage.",
    link: "https://venzuuww.github.io/to-do-list/",
    image: "static/images/todo-list.png"
  }
];

// Tampilkan data project ke halaman
function loadProjects() {
  const container = document.getElementById("projects-container");
  projects.forEach((project) => {
    const card = document.createElement("a");
    card.href = project.link;
    card.target = "_blank";
    card.className = "block bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-blue-500 transition-all duration-300 group mb-4";
    card.innerHTML = `
      <div class="relative overflow-hidden rounded-lg mb-4">
        <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
      </div>
      <h3 class="text-xl font-bold text-white mb-2">${project.title}</h3>
      <p class="text-gray-400 mb-4">${project.description}</p>
    `;
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadProjects();
  createStars();
});

// Efek bintang-bintang di background
function createStars() {
    const container = document.getElementById('stars-container');
    if (!container) return;
    const starCount = 100;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.opacity = Math.random();
        container.appendChild(star);
    }
}