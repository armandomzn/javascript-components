import { pageLinks, socialLinks } from "./data.js";
const navLinks = document.querySelector(".nav-links");
const socialMediaLinks = document.querySelector(".social-links");
const toggleBtn = document.querySelector(".toggle-btn");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

window.addEventListener("load", (e) => {
  createLinks(pageLinks, navLinks);
  createLinks(socialLinks, socialMediaLinks);
});

function createLinks(elements, parentDomReference) {
  // We generate the dynamic links for the ul container
  const links = elements.map((link) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${link.url}">${link.text ?? link.icon}</a>`;
    return li;
  });
  // We add the links to the ul container and replace the elements that we can found in html file
  parentDomReference.replaceChildren(...links);
}

// Sidebar
toggleBtn.addEventListener("click", (e) => {
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", (e) => {
  sidebar.classList.remove("show-sidebar");
});

// Modal
const modal = document.querySelector(".modal-overlay");
const openModal = document.querySelector(".modal-btn");
const closeModalBtn = document.querySelector(".close-modal-btn");

openModal.addEventListener("click", (e) => {
  modal.classList.add("show-modal");
});

closeModalBtn.addEventListener("click", (e) => {
  modal.classList.remove("show-modal");
});
