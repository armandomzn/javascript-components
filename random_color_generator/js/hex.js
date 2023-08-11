import { changeBackground, getLocalStorage, setLocalStorage } from "./utils.js";

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function getHexColor(iterator = 5) {
  const randomNumber = Math.floor(Math.random() * hex.length);
  if (iterator === 0) {
    return hex[randomNumber];
  }
  let hexValue;
  if (iterator === 5) {
    hexValue = `#${hex[randomNumber]}`;
  } else {
    hexValue = `${hex[randomNumber]}`;
  }
  return `${hexValue}${getHexColor(--iterator)}`;
}

const btn = document.querySelector(".btn-random");
const spanColor = document.querySelector(".color-span");

window.addEventListener("load", (e) => {
  const hex = getLocalStorage("hexColor");
  if (hex) {
    changeBackground(hex, spanColor);
  }
});

btn.addEventListener("click", (e) => {
  const hex = getHexColor();
  setLocalStorage("hexColor", hex);
  changeBackground(hex, spanColor);
});
