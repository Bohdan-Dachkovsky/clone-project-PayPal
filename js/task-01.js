const numberOfElements = document.querySelectorAll(`#categories > .item`);
console.log(numberOfElements.length);

let getHeader = document.querySelectorAll(`#categories > li > h2`);
console.log(getHeader[0].textContent);console.log(getHeader[1].textContent);console.log(getHeader[2].textContent);
const setClass = document.querySelector(`#categories > li > ul`);
setClass.setAttribute(`class`, `new-page`);
// ul.style.class = `new-page`
const sumFirstElements = document.querySelectorAll(`#categories > li > .new-page > li`);
console.log(sumFirstElements.length);
const numberSecondElements = document.querySelectorAll(`#categories > li > ul`);
// const number = numberSecondElements[1];
console.log(numberSecondElements.length);
const bodyEl = document.body;
const numberThirdElements = document.querySelectorAll(`#categories > li > ul`)[2].childElementCount;


console.log(numberThirdElements);


