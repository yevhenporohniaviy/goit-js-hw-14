const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ul = document.querySelector('#ingredients');

const li = ingredients
  .map((technology) => `<li>${technology}</li>`)
  .join("");


ul.innerHTML = li
