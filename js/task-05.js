const htmlEl = document.documentElement;
const bodyEl = document.body;
const headEl = document.head;
console.log(htmlEl);
console.log(bodyEl);
console.log(headEl);
const elInput = document.querySelector(`#name-input`);
console.log(elInput);
const someText = document.querySelectorAll(`span[id="name-output"]`);
const titleH1 = document.querySelectorAll(`body > h1`);
if (document.getElementById('#name-input').value !== '') {
    someText.innerText === someText.innerText
} else {
    titleH1.innerText = someText.innerText;
}        
if (document.getElementById('#name-input').value === '') {
    someText.innerText === someText.innerText;
};