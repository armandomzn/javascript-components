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

export function generateAlert(message, status, duration = 5000) {
  let box = document.createElement("div");
  box.classList.add("alert", `alert-${status}`);
  box.innerHTML = `
  <div class="alert-message">${message}</div>
  <div class="alert-progress"></div>
  `;
  box.querySelector(".alert-progress").style.animationDuration = `${
    duration / 1000
  }s`;
  let alertExist = document.body.querySelector(".alert");
  if (alertExist) {
    alertExist.remove();
  }
  document.body.appendChild(box);
}

export async function writeClipBoard(text) {
  try {
    // We copy the value to the clipboard
    await navigator.clipboard.writeText(text);
    generateAlert(`Color ${text} copied to clipboard`, "success");
  } catch (error) {
    console.error(error.message);
    generateAlert(
      `There was an error copying the color to the clipboard`,
      "danger"
    );
  }
}
