const form = document.querySelector('.login-form');


form.addEventListener('submit', (e) => {
  e.preventDefault()
  const elements = e.target.elements
  const password = elements.password.value
  const email = elements.email.value 
  let data = {}
  if (!email || !password) {
    alert('Всі поля повинні бути заповнені.')
    return 
  }
  data = {
    password,
    email
  }
  console.log(data)
  form.reset()
})
