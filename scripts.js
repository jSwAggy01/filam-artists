let current = 0;
const total = 12;

function navigate(dir) {
  document.getElementById('card-' + current).classList.remove('active');
  document.getElementById('meta-' + current).classList.remove('active');
  current = (current + dir + total) % total;
  document.getElementById('card-' + current).classList.add('active');
  document.getElementById('meta-' + current).classList.add('active');
}
