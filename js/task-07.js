const inputElement = document.querySelector(`#font-size-control`)
const spanEl = document.getElementById(`text`);
inputElement.oninput = function () {
    spanEl.style.fonSize = inputElement.value + `px`;
};