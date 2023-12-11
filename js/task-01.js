const list = document.querySelector('#categories')
const listChildrens = document.querySelectorAll('.item')

console.log(`Number of categories: ${list.childElementCount}`)

for (let i = 0; i < listChildrens.length; i++) {
  let title = listChildrens[i].querySelector('h2').textContent
  let count = listChildrens[i].querySelector('ul').childElementCount
  
  console.log(`Category: ${title}`)
  console.log(`Elements: ${count}`)
}