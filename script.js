‌
/* ===============================
   Revolution City RP - JS
   Clean • Discret • RP Friendly
================================ */

document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     IMAGE D’EN-TÊTE (fallback)
  ================================ */
  const headerImg = document.querySelector("img");

  if (headerImg) {
    headerImg.onerror = () => {
      headerImg.style.display = "none";
    };
  }

  /* ===============================
     SCROLL FLUIDE
  ================================ */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    });
  });

  /* ===============================
     ANIMATION À L’APPARITION
  ================================ */
  const elements = document.querySelectorAll("h1, h2, a");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));

  /* ===============================
     LIENS DISCORD = NOUVEL ONGLET
  ================================ */
  document.querySelectorAll("a").forEach(link => {
    if (link.href.includes("discord")) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
  });

});
