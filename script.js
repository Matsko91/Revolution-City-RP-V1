// Sélection des éléments
const buttons = document.querySelectorAll('button');
const links = document.querySelectorAll('a');
const sections = document.querySelectorAll('section');

// Effet sur les boutons : hover et click
buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'scale(1.1)';
    button.style.boxShadow = '0 0 20px #00f0ff, 0 0 40px #ff00ff';
  });
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'scale(1)';
    button.style.boxShadow = 'none';
  });
  button.addEventListener('click', () => {
    button.style.backgroundColor = '#00f0ff';
    setTimeout(() => button.style.backgroundColor = '', 200);
  });
});

// Animation de défilement fluide pour les liens internes
links.forEach(link => {
  link.addEventListener('click', e => {
    if(link.hash) {
      e.preventDefault();
      const target = document.querySelector(link.hash);
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Apparition des sections au scroll
window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
      section.style.transition = 'all 1s ease-out';
    } else {
      section.style.opacity = 0;
      section.style.transform = 'translateY(50px)';
    }
  });
});

// Effet de fond animé (néon/pulsation)
const body = document.body;
let hue = 0;
setInterval(() => {
  hue = (hue + 1) % 360;
  body.style.background = `linear-gradient(135deg, hsl(${hue}, 80%, 50%), hsl(${(hue + 60) % 360}, 80%, 50%))`;
}, 100);
