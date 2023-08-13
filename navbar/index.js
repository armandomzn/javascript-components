import { pageLinks, socialLinks } from "./data.js";

const navLinks = document.querySelector(".nav-links");
const socialMediaLinks = document.querySelector(".social-links");
const navButton = document.querySelector(".nav-toggle");
const container = document.querySelector(".container");

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

// Variable to store the navLinksHeight to use in toggle button and resize listener to keep the animation when the size is less than 800px and  when  the toggle navbar is active
let navLinksHeight;
// We set the height dynamically
navButton.addEventListener("click", (e) => {
  if (!container.classList.contains("show-links")) {
    container.classList.add("show-links");
    // container.style.height = `${navLinks.getBoundingClientRect().height}px`;
    navLinksHeight = `${navLinks.getBoundingClientRect().height}px`;
    container.style.height = navLinksHeight;
  } else {
    container.classList.remove("show-links");
    container.style.height = `0px`;
  }
});

window.addEventListener("resize", (e) => {
  if (window.innerWidth >= 800) {
    container.style.height = "auto";
  } else if (
    window.innerWidth < 800 &&
    !container.classList.contains("show-links")
  ) {
    container.style.height = "0px";
  } else if (
    window.innerWidth < 800 &&
    container.classList.contains("show-links") && navLinksHeight
  ) {
    container.style.height = navLinksHeight
  }
});
