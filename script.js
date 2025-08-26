// Animation douce sur l’apparition des cartes
document.addEventListener('DOMContentLoaded', () => {
const cards = document.querySelectorAll('.card');
cards.forEach((c, i) => c.style.animationDelay = (i * 80) + 'ms');
});