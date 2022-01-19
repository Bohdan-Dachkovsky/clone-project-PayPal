const htmlEl = document.documentElement;
const bodyEl = document.body;
const headEl = document.head;

let counterValue = 0;
let span = document.querySelector('span'); 
let increment = document.getElementById('increment');
let decrement = document.getElementById('decrement'); 

increment.addEventListener('click', function () {

    span.textContent = counterValue++;
  });
decrement.addEventListener('click', function () {

    span.textContent = counterValue--;
  });