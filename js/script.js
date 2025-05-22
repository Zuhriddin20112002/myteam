"use strict";
// director__info
// director__text__box
// close__text
// reveal__text

// const main = document.querySelector(".main");
const heroSection = document.querySelector(".hero__section");
const main = document.querySelector("main");
const nav = document.querySelector(".nav");
const directorBox = document.querySelectorAll(".director__box");
const directorTextBox = document.querySelectorAll(".director__text__box");
const revealBox = document.querySelectorAll(".reveal__text");
const closeBox = document.querySelectorAll(".close__text");
const form = document.querySelector("form");
const nameInput = document.querySelector(".name__input");
const errorMsg = document.querySelectorAll(".error__message");
const emailInput = document.querySelector(".email__input");
const companyInput = document.querySelector(".company__input");
const titleInput = document.querySelector(".title__input");
const messageInput = document.querySelector(".message__input");
const allInput = document.querySelectorAll(".input__field");
const navBtn = document.querySelector(".mobile__nav");
const header = document.querySelector(".header");
const closeIcon = document.querySelector(".close-icon");

const displayDirectorInfo = function (e) {
  const openIcon = e.target.classList.contains("reveal__text");
  const closeIcon = e.target.classList.contains("close__text");

  if (openIcon) {
    const infoBox = e.target
      .closest(".director__box")
      .querySelector(".director__text__box");
    infoBox.style.opacity = "1";
    infoBox.style.visibility = "visible";
  }
  if (closeIcon) {
    const infoBox = e.target
      .closest(".director__box")
      .querySelector(".director__text__box");
    infoBox.style.opacity = "0";
    infoBox.style.visibility = "hidden";
  }
};
const validateForm = function () {
  // Validate each field
  const isNameValid = validateField(nameInput);
  const isEmailValid = validateField(emailInput);
  const isCompanyValid = validateField(companyInput);
  const isTitleValid = validateField(titleInput);
  const isMessageValid = validateField(messageInput);

  // Return true if all fields are valid
  return (
    isNameValid &&
    isEmailValid &&
    isCompanyValid &&
    isTitleValid &&
    isMessageValid
  );
};

closeIcon.addEventListener("click", function () {
  header.classList.remove("nav-open");
});

const displayNav = function (e) {
  const openIcon = e.target.closest(".mobile__nav");

  if (openIcon) {
    header.classList.toggle("nav-open");
  }
};

const validateField = function (input) {
  const errorMsg = input.nextElementSibling;
  if (input.value.trim() === "") {
    errorMsg.style.opacity = "1";
    errorMsg.style.visibility = "visible";
    input.style.borderBottom = "0.1rem solid #f67e7e";

    input.style.setProperty("--placeholder-color", "#f67e7e");

    return false;
  } else {
    errorMsg.style.opacity = "0";
    errorMsg.style.visibility = "hidden";
    input.style.borderBottom = "0.1rem solid #79c8c7";
    input.style.setProperty("--placeholder-color", "#fff");

    return true;
  }
};
if (window.location.pathname.endsWith("/contact.html")) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (validateForm()) {
      form.submit();
    }
  });
}

directorBox.forEach((box) => {
  box.addEventListener("click", displayDirectorInfo);
});
navBtn.addEventListener("click", displayNav);

// const obsCallback = function (entries, observer) {
//   entries.forEach((entry) => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(heroSection);

// const navHeight = header.getBoundingClientRect().height;

// const stickyNav = function (entries) {
//   const [entry] = entries;
//   if (!entry.isIntersecting) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// };

// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: `-${navHeight}px`,
// });
// headerObserver.observe(nav);

//////////////////////////////////////////
const allSections = document.querySelectorAll("section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});
allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
