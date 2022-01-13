const htmlEl = document.documentElement;
const bodyEl = document.body;
const headEl = document.head;

let x = 0;
let span = document.querySelector('span'); // find the <span> element in the DOM
let increment = document.getElementById('increment'); // find the element with the ID 'increment'
let decrement = document.getElementById('decrement'); 

increment.addEventListener('click', function () {
    // this function is executed whenever the user clicks the increment button
    span.textContent = x++;
  });
decrement.addEventListener('click', function () {
    // this function is executed whenever the user clicks the decrement button
    span.textContent = x--;
  });