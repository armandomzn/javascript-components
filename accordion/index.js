import { data } from "./data.js";

const questionsContainer = document.querySelector(".questions");
// we create the questions in the HTML file
createQuestions(data, questionsContainer);
const questions = document.querySelectorAll(".question");

function createQuestions(elements, parentDomReference) {
  // We generate the dynamic questions for the div container
  const questions = elements.map((question) => {
    const { title, info } = question;
    const article = document.createElement("article");
    article.classList.add("question");
    article.innerHTML = `
    <header>
      <h5>${title}</h5>
    <!-- toggle button  -->
    <button class="toggle-btn">
      <span class="up-button">
        <i class="fa-solid fa-chevron-up"></i>
      </span>
      <span class="down-button">
        <i class="fa-solid fa-chevron-down"></i>
      </span>
    </button>
    <!-- end toggle button  -->
  </header>
  <!-- end header  -->
  <div class="question-text">
    <p>
      ${info}
    </p>
  </div>
    `;
    return article;
  });
  // We add the questions to the div container and replace the elements that we can found in html file
  parentDomReference.replaceChildren(...questions);
}

let activeElement = null;
questions.forEach((question, index) => {
  const btn = question.querySelector(".toggle-btn");
  btn.addEventListener("click", (e) => {
    if (activeElement !== null && index !== activeElement) {
      questions[activeElement].classList.remove("show-question");
    }
    activeElement = index;
    question.classList.toggle("show-question");
  });
});
