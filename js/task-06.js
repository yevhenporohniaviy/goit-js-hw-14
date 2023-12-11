const input = document.querySelector('#validation-input')


input.addEventListener('blur', (e) => {
  const inputLenght = input.dataset.length
  const valueLength = e.target.value.length
  input.classList = '';
  
  if (valueLength >= inputLenght) {
    input.classList.add('valid')
  } else {
    input.classList.add('invalid')
  }
})