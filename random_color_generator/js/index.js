import { changeBackground, getLocalStorage, setLocalStorage } from "./utils.js";

function getRGBColor(iterator = 2) {
  const randomNumber = Math.floor(Math.random() * 257);
  let rgb;
  if (iterator === 0) {
    return `${randomNumber}`;
  }
  rgb = `${randomNumber}`;
  return `${rgb},${getRGBColor(--iterator)}`;
}

function formatRGB(value) {
  return `rgb(${value})`;
}

const btn = document.querySelector(".btn-random");
const spanColor = document.querySelector(".color-span");

window.addEventListener("load", (e) => {
  const rgb = getLocalStorage("rgbColor");
  if (rgb) {
    changeBackground(rgb, spanColor);
  }
});
btn.addEventListener("click", (e) => {
  const rgbValue = formatRGB(getRGBColor());
  console.log(rgbValue);
  setLocalStorage("rgbColor", rgbValue);
  changeBackground(rgbValue, spanColor);
});
