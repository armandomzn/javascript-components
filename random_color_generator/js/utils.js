export function changeBackground(color, backgroundReference) {
  document.body.style.background = color;
  backgroundReference.textContent = color;
}

export function getLocalStorage(colorName) {
  return localStorage.getItem(colorName);
}

export function setLocalStorage(itemName, colorName) {
  localStorage.setItem(itemName, colorName);
}
