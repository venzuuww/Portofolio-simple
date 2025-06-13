// script.js

// Animasi kursor custom (kalau dipake)
const cursor = document.createElement("div");
cursor.id = "cursor";
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

// Fetch project dari backend dan tampilkan ke halaman
async function loadProjects() {
  try {
    const res = await fetch("http://localhost:3001/api/projects");
    const projects = await res.json();

    const container = document.getElementById("projects-container");

    projects.forEach((project) => {
      const card = document.createElement("div");
      card.className = "card card-glow";
      card.innerHTML = `
        <h3 class="text-lg font-semibold text-white mb-2">${project.title}</h3>
        <p class="text-gray-300 mb-2">${project.description}</p>
        <a href="${project.link}" class="text-blue-400 hover:underline" target="_blank">Lihat Proyek</a>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error("Gagal mengambil data proyek:", error);
  }
}

// Jalankan fungsi saat halaman dimuat
document.addEventListener("DOMContentLoaded", loadProjects);
