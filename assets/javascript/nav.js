// Nav Text
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .nav__links li a");
const project = document.querySelector("#projects");

let current = "main";

window.addEventListener("load", () => {
	navLi.forEach((a) => {
		a.classList.remove("current-section");
		if (a.classList.contains(current)) {
			a.classList.add("current-section");
		}
	});
});

window.addEventListener("scroll", () => {
	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.clientHeight;
		if (pageYOffset >= sectionTop - sectionHeight / 3) {
			current = section.getAttribute("id");
		}
	});

	navLi.forEach((a) => {
		a.classList.remove("current-section");
		if (a.classList.contains(current)) {
			a.classList.add("current-section");
		}
	});
});

// Scroll to Top
const toTop = document.querySelector("#up-btn");

window.addEventListener("scroll", () => {
	if (window.pageYOffset > 100) {
		toTop.classList.add("active");
	} else {
		toTop.classList.remove("active");
	}
});
