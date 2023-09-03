const btnContainer = document.querySelector(".btn-container");
btnContainer.addEventListener("click", (e) => {
  console.log();
  [...btnContainer.children].forEach((item) => {
    if (item.classList.contains("hide")) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
  document.documentElement.classList.toggle("dark-mode");
});
[...document.querySelectorAll(".date")].forEach((item, index) => {
  const days = 10;
  item.textContent = `${moment(new Date())
    .subtract(days * index, "day")
    .format("DD/MM/YYYY")}`;
});
