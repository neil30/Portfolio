// Nav Bar Icon
const btns = document.querySelector(".btns");
const mobile_nav = document.querySelector(".mobile-menu");

btns.addEventListener("click", function () {
	this.classList.toggle("is-active");
	mobile_nav.classList.toggle("is-active");
});

// Nav Sticky
window.addEventListener("scroll", function () {
	let header = document.querySelector("header");
	let windowPosition = window.scrollY > 0;
	header.classList.toggle("scrolling-active", windowPosition);
});


// Theme Changer
const body = document.querySelector("#mainBody");
const theme = document.querySelectorAll("#theme-btn");
const icon = document.querySelectorAll("#btn-icon");

theme[0].addEventListener("click", function () {
	if (body.classList.contains("dark-theme")) {
		body.classList.remove("dark-theme");
    icon[0].classList.remove("uil-sun");
    icon[0].classList.add("uil-moon");
	}
  else {
    body.classList.add("dark-theme");
    icon[0].classList.add("uil-sun");
    icon[0].classList.remove("uil-moon");
  }
});

theme[1].addEventListener("click", function () {
	if (body.classList.contains("dark-theme")) {
		body.classList.remove("dark-theme");
		icon[1].classList.remove("uil-sun");
		icon[1].classList.add("uil-moon");
	} else {
		body.classList.add("dark-theme");
		icon[1].classList.add("uil-sun");
		icon[1].classList.remove("uil-moon");
	}
});