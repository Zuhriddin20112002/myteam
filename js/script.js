window.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const namMenu = document.querySelector(".talik");
  hamburger.addEventListener("click", () => {
    namMenu.classList.toggle("active");
  });
});

const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.addEventListener("DOMContentLoaded"),
  () => {
    let darkBn = document.querySelector(".dark-btn");
    darkBn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });
  };
