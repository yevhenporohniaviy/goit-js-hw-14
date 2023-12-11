function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const controls = document.querySelector('#controls')
const input = document.querySelector('input')
const container = document.querySelector('#boxes')

// function destroyBoxes() {
//   container.innerHTML = ''
// }

function createBoxes(amount) {
  return Array.from({ length: amount }, (_, i) => 
    `<div style="width:${30 + i*10}px; height:${30 + i*10}px; background-color:${getRandomHexColor()}"></div>`
  );
}

controls.addEventListener('click', (e) => {
  if (e.target.dataset.create !== undefined && e.target.dataset.hasOwnProperty('create')) {
    const items = createBoxes(input.value)
    container.insertAdjacentHTML('beforeend', items.join(''))
  }
  if (e.target.dataset.destroy !== undefined && e.target.dataset.hasOwnProperty('destroy')) { 
    // destroyBoxes() 
    container.innerHTML = ''
  }
})
