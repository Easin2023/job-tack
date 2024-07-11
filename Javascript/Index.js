// navbar
document.addEventListener("DOMContentLoaded", function () {
  window.onscroll = function () {
    myFunction();
  };

  var navbar = document.getElementById("navbar");
  var logo = document.querySelector(".logo");
  var shareBtn = document.getElementById("shareBtn");
  var reportBtn = document.getElementById("reportBtn");
  var menuIcon = document.getElementById("menuIcon");

  function myFunction() {
    if (window.scrollY > 0) {
      navbar.classList.add("sticky");
      navbar.classList.remove("notStyle");
      shareBtn.classList.add("shareBtn");
      reportBtn.classList.add("reportBtn");
      menuIcon.classList.add("menuIcon");
      menuIcon.classList.remove("normalMenuIcon");
      logo.src =
        "https://wppool.dev/wp-content/themes/wppool/assets/img/wppool-image/dark_logo.svg";
    } else {
      navbar.classList.remove("sticky");
      navbar.classList.add("notStyle");
      shareBtn.classList.remove("shareBtn");
      reportBtn.classList.remove("reportBtn");
      menuIcon.classList.remove("menuIcon");
      menuIcon.classList.add("normalMenuIcon");
      logo.src =
        "https://wppool.dev/wp-content/themes/wppool/assets/img/wppool-image/logo.svg";
    }
  }
});

// scrolling
document.addEventListener("DOMContentLoaded", () => {
  const scrollButton = document.getElementById("scrollButton");
  const arrowIcon = document.getElementById("arrowIcon");

  const handleScroll = () => {
    if (
      window.scrollY + window.innerHeight >=
      document.body.scrollHeight - 10
    ) {
      arrowIcon.classList.remove("fa-arrow-down-long");
      arrowIcon.classList.add("fa-arrow-up-long");
    } else if (window.scrollY <= 10) {
      arrowIcon.classList.remove("fa-arrow-up-long");
      arrowIcon.classList.add("fa-arrow-down-long");
    }
  };

  window.addEventListener("scroll", handleScroll);

  scrollButton.addEventListener("click", () => {
    if (arrowIcon.classList.contains("fa-arrow-down-long")) {
      window.scroll({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    } else {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    }
  });
  handleScroll();
});

// slider

let slideIndex = 0;

function moveSlide(n) {
  const slides = document.querySelectorAll("#slides > div");
  slideIndex += n;

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  const slideWidth = slides[0].clientWidth;
  const offset = -slideIndex * slideWidth;
  document.getElementById("slides").style.transform = `translateX(${offset}px)`;
}
//

document.addEventListener("DOMContentLoaded", () => {
  const accordionButtons = document.querySelectorAll(".accordion-button");

  accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;
      const span = button.querySelector("span");

      if (content && content.classList.contains("accordion-content")) {
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
          span.textContent = "+";
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
          span.textContent = "-";
        }
      }
    });
  });

  const innerAccordionButtons = document.querySelectorAll(
    ".accordion-button-inner"
  );
  innerAccordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const span = button.querySelector("span");
      if (button.classList.contains("active")) {
        button.classList.remove("active");
        span.textContent = "+";
      } else {
        button.classList.add("active");
        span.textContent = "-";
      }
    });
  });
});

particlesJS.load("particles-js", "particles.json", function () {
  console.log("callback - particles.js config loaded");
});
