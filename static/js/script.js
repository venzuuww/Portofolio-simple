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
    title: "Tic Tac Toe Game",
    description: "Game Tic Tac Toe klasik dengan tampilan modern dan interaktif. Dibuat menggunakan HTML, CSS, dan JavaScript.",
    link: "https://github.com/venzuuww/tic-tac-toe",
    image: "static/images/ttt.png"
  },
  {
    title: "Portfolio Website",
    description: "Website portfolio pribadi dengan desain modern dan responsif. Menggunakan HTML, CSS, dan JavaScript.",
    link: "https://github.com/venzuuww/portfolio",
    image: "static/images/portfolio.png"
  },
  {
    title: "Todo List App",
    description: "Aplikasi todo list dengan fitur CRUD lengkap. Dibuat menggunakan React.js dan Tailwind CSS.",
    link: "https://github.com/venzuuww/todo-list",
    image: "static/images/tdl.png"
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
  }
];

// Tampilkan data project ke halaman
function loadProjects() {
  const container = document.getElementById("projects-container");
  projects.forEach((project, index) => {
    const projectElement = document.createElement('div');
    projectElement.className = 'card scroll-animate scroll-up';
    projectElement.style.animationDelay = `${index * 0.2}s`;
    
    projectElement.innerHTML = `
      <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
      <div class="p-6">
        <h3 class="text-xl font-bold mb-2 text-space-accent">${project.title}</h3>
        <p class="text-space-text/80 mb-4">${project.description}</p>
        <a href="${project.link}" target="_blank" class="btn-primary inline-block">Lihat Proyek</a>
      </div>
    `;
    
    container.appendChild(projectElement);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadProjects();
  createStars();
  handleScrollAnimations();
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
        star.style.animationDelay = `${Math.random() * 2}s`;
        container.appendChild(star);
    }
}

// Handle scroll animations
function handleScrollAnimations() {
    const animatedElements = document.querySelectorAll('.scroll-animate');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Tambahkan class animasi yang sesuai
                const direction = entry.target.classList.contains('scroll-left') ? 'scroll-left' :
                                entry.target.classList.contains('scroll-right') ? 'scroll-right' :
                                entry.target.classList.contains('scroll-down') ? 'scroll-down' : 'scroll-up';
                entry.target.classList.add(direction);
            } else {
                // Reset animasi saat elemen keluar dari viewport
                entry.target.classList.remove('scroll-up', 'scroll-down', 'scroll-left', 'scroll-right');
                entry.target.classList.add('reset');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px'
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
}