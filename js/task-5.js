
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.body;
const spanClr = document.querySelector(".color");
const BtnEl = document.querySelector(".change-color");

BtnEl.addEventListener("click", changeColor);

function changeColor() {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  spanClr.textContent = newColor;
 }