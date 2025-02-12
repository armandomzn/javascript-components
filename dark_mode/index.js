const lightBtn = document.querySelector(".light");
const darkBtn = document.querySelector(".dark");
const getDarkTheme = () => {
  return localStorage.getItem("darkTheme") || "";
};
function setDarkTheme(theme) {
  localStorage.setItem("darkTheme", theme);
}
window.addEventListener("DOMContentLoaded", () => {
  if (getDarkTheme() === "dark") {
    document.documentElement.classList.add("dark-mode");
    lightBtn.classList.remove("hide");
    darkBtn.classList.add("hide");
  } else {
    document.documentElement.classList.remove("dark-mode");
    lightBtn.classList.add("hide");
    darkBtn.classList.remove("hide");
  }
});
const btnContainer = document.querySelector(".btn-container");
btnContainer.addEventListener("click", (e) => {
  [...btnContainer.children].forEach((item) => {
    if (item.classList.contains("hide")) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
  document.documentElement.classList.toggle("dark-mode");
  if (!document.documentElement.classList.contains("dark-mode")) {
    setDarkTheme("light");
  } else {
    setDarkTheme("dark");
  }
});
[...document.querySelectorAll(".date")].forEach((item, index) => {
  const days = 10;
  item.textContent = `${moment(new Date())
    .subtract(days * index, "day")
    .format("DD/MM/YYYY")}`;
});
