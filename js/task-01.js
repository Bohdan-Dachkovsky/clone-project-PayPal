const numberOfElements = document.querySelectorAll(`#categories > .item`);
console.log(`Number of categories:`);
console.log(numberOfElements.length);

let getHeader = document.querySelectorAll(`#categories > li > h2`);
console.log(`Category:`,getHeader[0].textContent);
const setClass = document.querySelector(`#categories > li > ul`);
setClass.setAttribute(`class`, `new-page`);
// ul.style.class = `new-page`
const sumFirstElements = document.querySelectorAll(`#categories > li > .new-page > li`);
console.log(`Elements:`, sumFirstElements.length);
console.log(`Category:`,getHeader[1].textContent);
const numberSecondElements = document.querySelectorAll(`#categories > li > ul`);
// const number = numberSecondElements[1];
console.log(`Elements:`, numberSecondElements.length);console.log(`Category:`,getHeader[2].textContent);


const bodyEl = document.body;
const numberThirdElements = document.querySelectorAll(`#categories > li > ul`)[2].childElementCount;


console.log(`Elements:`, numberThirdElements);


