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
      shareBtn.classList.add("shareBtn");
      reportBtn.classList.add("reportBtn");
      menuIcon.classList.add("menuIcon");
      logo.src =
        "https://wppool.dev/wp-content/themes/wppool/assets/img/wppool-image/dark_logo.svg";
    } else {
      navbar.classList.remove("sticky");
      shareBtn.classList.remove("shareBtn");
      reportBtn.classList.remove("reportBtn");
      menuIcon.classList.remove("menuIcon");
      logo.src =
        "https://wppool.dev/wp-content/themes/wppool/assets/img/wppool-image/logo.svg";
    }
  }
});

particlesJS.load("particles-js", "particles.json", function () {
  console.log("callback - particles.js config loaded");
});
