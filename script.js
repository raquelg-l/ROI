// js/main.js
// Minimal JS for interactivity - optional
document.querySelectorAll('.bento-item').forEach(item => {
  item.addEventListener('click', () => {
    alert(`You clicked on ${item.textContent.trim()}`);
  });
});
