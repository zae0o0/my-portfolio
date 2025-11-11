// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Floating doodles generator
const doodlesContainer = document.getElementById('doodles-container');
const colors = ['#ff80b5', '#fcd34d', '#a78bfa', '#f9a8d4', '#fde68a'];
for (let i = 0; i < 30; i++) {
  const doodle = document.createElement('div');
  doodle.classList.add('doodle');
  doodle.style.width = `${10 + Math.random() * 15}px`;
  doodle.style.height = doodle.style.width;
  doodle.style.background = colors[Math.floor(Math.random() * colors.length)];
  doodle.style.borderRadius = '50%';
  doodle.style.top = `${Math.random() * 100}%`;
  doodle.style.left = `${Math.random() * 100}%`;
  doodle.style.animationDuration = `${5 + Math.random() * 6}s`;
  doodlesContainer.appendChild(doodle);
}

// Card fade-in animation
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(50px)';
  card.style.transition = 'all 0.8s ease';
  observer.observe(card);
});
