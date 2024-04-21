import {
  changeBackground,
  getLocalStorage,
  setLocalStorage,
  writeClipBoard,
} from "./utils.js";

// This recursive function will create the RGB color
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

// When page load we check if some value exist in localStorage
window.addEventListener("load", (e) => {
  const rgb = getLocalStorage("rgbColor");
  if (rgb) {
    // If some value exist in LS we change the background body and the color span, passing the rgb color and the span reference to be updated in the DOM
    changeBackground(rgb, spanColor);
    return;
  }
  // Else, we set the default value from the current container
  changeBackground(spanColor.textContent, spanColor);
});

// When button is clicked we generate a new RGB color and we format the input from recursive function. Ex -> 109,129,24 -> rgb(109,129,24)
btn.addEventListener("click", async (e) => {
  const rgbValue = formatRGB(getRGBColor());
  setLocalStorage("rgbColor", rgbValue);
  changeBackground(rgbValue, spanColor);
  // We copy the color in the clipboard
  await writeClipBoard(rgbValue);
});
