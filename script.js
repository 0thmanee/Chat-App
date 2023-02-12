const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const navList = document.querySelector(".nav_list");
const logo = document.querySelector(".logo");
const navIcon = document.querySelector(".nav_icon");

// nav icon's click event
navIcon.addEventListener("click", function () {
  navIcon.classList.toggle("nav_icon--active");
  navList.classList.toggle("nav_list--active");
});

// change opacity of the anchors
const handleHover = function (e) {
  if (e.target.classList.contains("nav_link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav_link");
    siblings.forEach((l) => {
      if (l !== link) {
        l.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));
