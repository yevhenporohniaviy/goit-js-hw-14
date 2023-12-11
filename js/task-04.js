const counterValueSpan = document.querySelector('#value');
const counterDecrementButton = document.querySelector('button[data-action="decrement"]')
const counterIncrementButton = document.querySelector('button[data-action="increment"]')

let counterValue = 0

counterIncrementButton.addEventListener('click', () => {
  counterValue += 1 
  counterValueSpan.innerHTML = counterValue
})

counterDecrementButton.addEventListener('click', () => {
  if (counterValue !== 0) {
    counterValue -= 1
    counterValueSpan.innerHTML = counterValue
  }
})
