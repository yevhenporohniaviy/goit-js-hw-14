function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body')

const widget = document.querySelector('.widget');
const text = document.querySelector('.color');
const button = widget.lastElementChild;

 
button.addEventListener('click', () => {
  body.style.backgroundColor = getRandomHexColor()
  text.textContent = getRandomHexColor()
})