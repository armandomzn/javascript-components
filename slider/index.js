import { slides } from "./data.js";
const slidersContainer = document.querySelector(".sliders");

createArticles();

const slidesElements = document.querySelectorAll(".slider");
slidesElements.forEach((slide, index) => {
  if (index === 0) {
    slide.style.opacity = 1;
    slide.style.overflow = "visible";
    slide.style.position = "relative";
    slide.style.visibility = "visible";
  } else {
    slide.style.opacity = 0;
    slide.style.overflow = "hidden";
    slide.style.position = "absolute";
    slide.style.visibility = "hidden";
  }
  slide.style.transform = `translateX(${index * 100}%)`;
});
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
let counter = 0;
function nextSlide() {
  counter = (counter + 1) % slides.length;
  carousel();
}
function prevSlide() {
  counter = (counter - 1 + slides.length) % slides.length;
  carousel();
}
function carousel() {
  slidesElements.forEach((slide, index) => {
    if (index === counter) {
      slide.style.opacity = 1;
      slide.style.overflow = "visible";
      slide.style.position = "relative";
      slide.style.visibility = "visible";
    } else {
      slide.style.opacity = 0;
      slide.style.overflow = "hidden";
      slide.style.position = "absolute";
      slide.style.visibility = "hidden";
    }
    slide.style.transform = `translateX(${(index - counter) * 100}%)`;
  });
}

function createArticles() {
  const elements = slides
    .map((slider) => {
      return `<article class="slider">
        <div class="img-container">
              <img
                src="${slider.image}"
                alt="slider-photo"
                class="slider-photo"
              />
              <span class="quote">
                <i class="fa-solid fa-quote-right"></i>
              </span>
            </div>
            <h3 class="author">${slider.name}</h3>
            <h4 class="job">${slider.job}</h4>
            <p>
                ${slider.text}
            </p>
            </article>
        `;
    })
    .join("");
  slidersContainer.insertAdjacentHTML("afterbegin", elements);
}

setInterval(nextSlide, 2000);
