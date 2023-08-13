import { reviews } from "./data.js";

// main items
const img = document.querySelector("#review-img");
const author = document.querySelector("#author");
const job = document.querySelector("#job");
const text = document.querySelector("#text");
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const randomButton = document.querySelector(".random-btn");

// the current review, we start with the first element in index 0
let currentItem = 0;

// We update the items in the dom with the next function
function showReview() {
  const { name, image, job: work, text: description } = reviews[currentItem];
  author.textContent = name;
  img.src = image;
  job.textContent = work;
  text.textContent = description;
}

nextButton.addEventListener("click", (e) => {
  // 0 + 1 % 4 = 1
  // 1 + 1 % 4 = 2
  // 2 + 1 % 4 = 3
  // 3 + 1 % 4 = 0
  currentItem = (currentItem + 1) % reviews.length;
  showReview();
});

prevButton.addEventListener("click", (e) => {
  // 0 - 1 + 4 % 4 = 3
  // 1 - 1 + 4 % 4 = 0
  // 2 - 1 + 4 % 4 = 1
  // 3 - 1 + 4 % 4 = 2
  currentItem = (currentItem - 1 + reviews.length) % reviews.length;
  showReview();
});

randomButton.addEventListener("click", (e) => {
  // if currentItem is equals to randomNumber we create a new randomNumber to avoid to have the same item in the next surprise me button click
  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * reviews.length);
  } while (randomNumber === currentItem);
  currentItem = randomNumber;
  showReview();
});
