const inputEl = document.querySelector('#name-input');
const textEl = document.querySelector('#name-output');

inputEl.addEventListener('input', (e) => {
  if (!e.target.value) {
    textEl.textContent = 'Anonymous'
    return
  }

  textEl.textContent = e.target.value
})