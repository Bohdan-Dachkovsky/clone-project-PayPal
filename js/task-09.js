function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector(`body`);
const lastColorButton = document.querySelector(`.change-color`)
const textBackground = document.querySelector(`.color`);
lastColorButton.addEventListener (`click`, () => {
  body.style.backgroundColor = getRandomHexColor();
  textBackground.textContent = body.style.backgroundColor;
});