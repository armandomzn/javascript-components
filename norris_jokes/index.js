const url = "https://api.chucknorris.io/jokes/random";

const btn = document.querySelector(".btn");
const joke = document.querySelector(".joke");
const loadingContainer = document.querySelector(".loading-parent");

btn.addEventListener("click", () => {
  loadingContainer.innerHTML = `<div class="loading"></div>`;
  joke.textContent = ``;
  getRandomJoke();
});

async function getRandomJoke() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    joke.textContent = data.value;
  } catch (error) {
    console.log(error);
  } finally {
    loadingContainer.innerHTML = ``;
  }
}
