const numberOfElements = document.querySelectorAll(`#categories > .item`);
console.log(numberOfElements.length);

let getHeader = document.querySelectorAll(`#categories > li > h2`);
console.log(getHeader[0].textContent);console.log(getHeader[1].textContent);console.log(getHeader[2].textContent);
const setClass = document.querySelector(`#categories > li > ul`);
setClass.setAttribute(`class`, `new-page`);
// ul.style.class = `new-page`
const sumFirstElements = document.querySelectorAll(`#categories > li > .new-page > li`);
console.log(sumFirstElements.length);
const numberSecondElements = document.querySelectorAll(`#categories > li > .listOfProduct > li`);
console.log(numberSecondElements.length);
const lengthThirdElements = document.querySelectorAll(`#categories > li > .listOflanguage > li`);
console.log(lengthThirdElements.length);
// const setSecondAtt = document.querySelector(`#categories > li > ul`);
// setSecondAtt.setAttribute(`class`, `new-title`);
// const sumSecondElements = document.querySelectorAll(`#categories > li > .new-title > li`);
// console.log(sumSecondElements.length);
// const sumSecondElements = document.querySelectorAll(`#categories .item`).parentNode;
// console.log(sumOfElements.length);
// const sumThirdElements = document.querySelectorAll(`#categories .item`).parentNode;
// console.log(sumOfElements.);

// const listEl = document.querySelector('.list');
// const listItemsEl = listEl.children;
// console.log(listItemsEl.length);