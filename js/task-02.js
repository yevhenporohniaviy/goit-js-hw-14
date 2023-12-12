const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');

const ingredientsListItems = ingredients
  .map((technology) => `<li>${technology}</li>`)
  .join("");


ingredientsList.innerHTML = ingredientsListItems
