const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const navbar = document.querySelectorAll(".header__nav-link");

btnNav.addEventListener("click", function () {
  header.classList.toggle("active");
});

navbar.forEach((link) => {
  link.addEventListener("click", function () {
    header.classList.remove("active");
  });
});
