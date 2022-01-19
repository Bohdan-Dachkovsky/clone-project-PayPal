

function fun1() {
    let rng = document.getElementById(`font-size-control`); //rng - это Input
    let span = document.getElementById(`text`); // span - блок test
    span.style.fonSize = rng.value + 'px';
  }
// const controlFont = document.getElementById(`#font-size-control`);
// const text = document.getElementById(`#text`);
// controlFont.oninput = function () {
//     text.style.fonSize = controlFont.value + "1%";
// }