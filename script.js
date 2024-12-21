const lines = ['line1', 'line2', 'line3', 'line4'];
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name') || 'FRIEND';

lines.forEach((line, index) => {
  setTimeout(() => {
    document.getElementById(line).classList.add('visible');
  }, index * 1000);
});

setTimeout(() => {
  const nameElement = document.getElementById('name');
  nameElement.textContent = name.toUpperCase();
  nameElement.classList.add('visible');
}, lines.length * 1000);
