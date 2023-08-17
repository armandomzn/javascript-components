const links = document.querySelector(".links");
const navLinksContainer = document.querySelector(".links-container");

//* setting up date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

//* toggle navbar
const toggleBtn = document.querySelector(".toggle-btn");
toggleBtn.addEventListener("click", (e) => {
  const navLinksContainerHeigh =
    navLinksContainer.getBoundingClientRect().height;
  const navLinksHeight = links.getBoundingClientRect().height;
  if (navLinksContainerHeigh === 0) {
    navLinksContainer.style.height = `${navLinksHeight}px`;
  } else {
    navLinksContainer.style.height = 0;
  }
});
const navbar = document.querySelector("nav");
//* fixed navbar
window.addEventListener("scroll", (e) => {
  const scrollHeight = window.scrollY;
  const navbarHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navbarHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
});

//* smooth control
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const navbarHeight = navbar.getBoundingClientRect().height;
    const navLinksContainerHeight =
      navLinksContainer.getBoundingClientRect().height;
    const id = link.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    // we obtain the distance of the current element with respect to the height of the page.
    const elementHeight = element.offsetTop;
    // We subtract the elementHeight minus navbarHeight because by default it added to the offSetTop
    let position = elementHeight - navbarHeight;
    let fixedNav = navbar.classList.contains("fixed-nav");
    // if we navigate from the navbar and we don't have the fixed-nav class in navbar in the top of the page, we need to subtract the actual position and the navbar height if we don't do this when we navigate to certain section we won't view the title of the section page
    if (!fixedNav) {
      position = position - navbarHeight;
    }

    // the current navbar height is 73.5px if the navbarHeight is plus than 73.5px that means that we have open the hamburger menu in small device and we need to add the navLinksContainer height to the current position to correctly position the section
    if (navbarHeight > 73.5) {
      position += navLinksContainerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    navLinksContainer.style.height = 0;
  });
});
