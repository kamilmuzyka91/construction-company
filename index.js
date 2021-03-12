document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed!");

  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".navigation");

  const handleClick = () => {
    hamburger.classList.toggle("hamburger--active");
    nav.classList.toggle("navigation--active");
  };

  hamburger.addEventListener("click", handleClick);
});