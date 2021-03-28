let buttonMobile = document.getElementById("mobile_button");
let links = document.querySelectorAll("a");
let nav = document.querySelector("nav");

window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (
    document.body.scrollTop > 80 ||
    document.documentElement.scrollTop > 80
  ) {
    nav.classList.add("nav_resize");
  } else {
    nav.classList.remove("nav_resize");
  }
};


const menuMobile = () => {
    console.log(links)
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", menuMobile);
  }
  if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
    document.body.style.overflow = "";
  } else {
    nav.classList.add("responsive");
    document.body.style.overflow = "hidden";
  }
};

buttonMobile.addEventListener("click", menuMobile);
