import { paragraphs, sentences, words } from "./data.js";

let option = "paragraphs";
const loremForm = document.querySelector(".lorem-form");
const loremOptions = document.querySelector(".lorem-options");
const amount = document.getElementById("amount");
const loremText = document.querySelector(".lorem-text");

loremOptions.addEventListener("change", (e) => {
  option = e.target.value;
});

loremForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const numberValue = parseInt(amount.value);
  if (!option || isNaN(numberValue) || numberValue > 30 || numberValue <= 0) {
    return;
  }
  switch (option) {
    case "paragraphs":
      getLorem(paragraphs, numberValue);
      break;
    case "sentences":
      getLorem(sentences, numberValue);
      break;
    case "words":
      getLorem(words, numberValue);
      break;
    default:
      throw Error(`No case for ${option} option`);
  }
});

function getLorem(array, numberValue) {
  let counter = 0,
    uniqueValues = new Set(),
    items = [];

  do {
    const randomNumber = Math.floor(Math.random() * array.length);
    if (uniqueValues.has(randomNumber)) {
      continue;
    }
    uniqueValues.add(randomNumber);
    items = [...items, array[randomNumber]];
    counter++;
  } while (counter < numberValue);
  const loremItem = items
    .map((item) => {
      return `<p>${item}</p>`;
    })
    .join("");
  loremText.style.display = "block";
  loremText.innerHTML = loremItem;
}
