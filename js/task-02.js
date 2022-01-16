const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listOfIngridients = document.querySelectorAll(`ul`);
console.log(listOfIngridients);

const creatEl = ingredients => {
  return ingredients.map(elements => {
     const someText = document.createElement(`p`);
     someText.classList.add(`item`);
     someText.textContent = elements[0];
     let newItem = `<li>${someText}</li>`
     return newItem;
  });
};
const product = creatEl(ingredients);
// listOfIngridients.insertAdjacentHTML(`beforeend`,...product);
console.log(product);