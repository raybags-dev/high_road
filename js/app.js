"uset strict";
const skelton = document.querySelector(".skeleton-container");
const body = document.querySelector("body");
// ********* nav ************
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");

// remove skeleton after everything has loaded
document.addEventListener("DOMContentLoaded", async (event) => {
  if (event.bubbles == true)
    setTimeout(() => skelton.classList.add("hide"), 2000);
  // change background images every after 10minutes
  const backgroundLinks = [
    "../images/bg_imgs/bg1.jpeg",
    "../images/bg_imgs/bg2.jpeg",
    "../images/bg_imgs/bg6.jpeg",
    "../images/bg_imgs/bg4.jpeg",
  ];

  let links = [],
    index = 0;

  links[0] = backgroundLinks[0];
  links[1] = backgroundLinks[1];
  links[2] = backgroundLinks[1];
  links[3] = backgroundLinks[2];

  setInterval(() => {
    index = Math.floor(Math.random() * links.length);

    document.body.style.cssText = `background: url(${backgroundLinks[index]})
      center/cover no-repeat fixed;`;
  }, 100000);
});

// ********* set date ************
const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());

// add event listener
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});
// ********* nav fixed ************
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 62) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});

// ********* smooth scroll ************

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    links.classList.remove("show-links");

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    // position
    let position;
    if (navbar.classList.contains("fixed")) {
      position = element.offsetTop - 62;
    } else {
      position = element.offsetTop - 124;
    }
    if (window.innerWidth < 992) {
      if (navbar.classList.contains("fixed")) {
        position = element.offsetTop - 62;
      } else {
        position = element.offsetTop - 332 - 62;
      }
    }
    // window scrollTo
    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
  });
});
