function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}
function addBackSection(num) {
  allSection[num].classList.add("back-section");
}
function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
  });
});
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});
function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}

const nav = document.querySelector(".nav");
(navList = nav.querySelectorAll("li")), (totalNavList = navList.length), (allSection = document.querySelectorAll(".section")), (totalSection = allSection.length);
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

// =========Typed Js========== //
var typed = new Typed(".typing", {
  strings: ["Iam students at aisyah university pringsewu", " come from Lampung Krui, West Coast of Indonesia", "Iam a student of Informatics Engineering"],
  typeSpeed: 70,
  loop: true,
});
// =============Typed Js selesai============== //

const modal = document.querySelector("#imageModal");
const modalImage = document.querySelector("#modalImage");
const captionText = document.querySelector("#caption");

const portfolioItems = document.querySelectorAll(".portfolio-item img");
portfolioItems.forEach(function (item) {
  item.addEventListener("click", function () {
    modal.style.display = "block";
    modalImage.src = this.src;
    captionText.innerHTML = this.alt;
    captionText.innerHTML = "Patra dinata";
  });
});

const span = document.getElementsByClassName("close")[0];
span.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

const contactForm = document.querySelector("#contact-form");
const whellAnimationLoading = document.querySelector(".wheel-and-hamster");
// menghilangkan animasi loading
whellAnimationLoading.style.display = "none";
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  whellAnimationLoading.style.display = "block";

  const url = e.target.action;
  const formData = new FormData(contactForm);

  fetch(url, {
    method: "POST",
    body: formData,
    mode: "no-cors",
  })
    .then(() => {
      //url
      // loader.style.display = "none";
      window.location.href = "/thankyou.html";
    })
    .catch((e) => console.log("Error!", e.message));
});
