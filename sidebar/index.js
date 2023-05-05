const sidebarBtn = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});
