// menu dropdown
function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (e) {
  if (!e.target.matches(".nav-item")) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }
};
//change theme
var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "./img/sun.png";
  } else {
    icon.src = "./img/moon.png";
  }
};

// backtotop
const backToTop = document.querySelector(".back-to-top");
backToTop.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

window.onscroll = function () {
  window.pageYOffset > 100
    ? backToTop.classList.add("show-to-top")
    : backToTop.classList.remove("show-to-top");
  window.pageYOffset > 0
    ? navbar.classList.add("scroll-header")
    : navbar.classList.remove("scroll-header");
};
