const target = document.querySelector('.target');
const preview = document.querySelector('.preview');

target.addEventListener('mouseenter', () => {
  preview.style.opacity = 1;
});

target.addEventListener('mouseleave', () => {
  preview.style.opacity = 0;
});