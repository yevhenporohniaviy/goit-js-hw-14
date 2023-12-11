const input = document.querySelector('#name-input');
const text = document.querySelector('#name-output');

input.addEventListener('input', (e) => {
  if (!e.target.value) {
    text.textContent = 'Anonymous'
    return
  }

  text.textContent = e.target.value
})