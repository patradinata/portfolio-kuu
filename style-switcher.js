//============ class open untuk thema warna //===========
const themaColor = document.querySelector(".style-switcher-toggler");
themaColor.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});
// ketika ada event scrool hilangkan class open nya!

// ketika Theme warna di klik aktifkan warnanya //
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
      localStorage.setItem("theme-color", color);
    } else {
      style.setAttribute("disabled", true);
    }
  });
}

console.log(alternateStyles);

// ============== Dark mode and light mode ==============
const dayNight = document.querySelector(".day-night");

function tooggleDarkMode() {
  dayNight.querySelector("i").classList.toggle("fa-cloud-moon");
  dayNight.querySelector("i").classList.toggle("fa-cloud-sun");
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
}

dayNight.addEventListener("click", tooggleDarkMode);
window.addEventListener("load", () => {
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") {
    document.body.classList.add("dark");
    dayNight.querySelector("i").classList.add("fa-cloud-sun");
  } else {
    document.body.classList.remove("dark");
    dayNight.querySelector("i").classList.add("fa-cloud-moon");
  }

  // ambil tema yang dipilih dari local storage
  const activeStyle = localStorage.getItem("theme-color");
  if (activeStyle) {
    setActiveStyle(activeStyle);
  }
});
