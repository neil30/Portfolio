// Get the <span> element that closes the modal
const span = document.querySelectorAll(".close");
const modal = document.querySelectorAll("#myModal");
const img = document.querySelectorAll("#myImg");
const modalImg = document.querySelectorAll("#imgZoom");

// Get Modal
img[0].onclick = function () {
	modal[0].style.display = "block";
	modalImg[0].src = this.src;
};

span[0].onclick = function () {
	modal[0].style.display = "none";
};

// Next Modal
img[1].onclick = function () {
	modal[1].style.display = "block";
	modalImg[1].src = this.src;
};

span[1].onclick = function () {
	modal[1].style.display = "none";
};

// Next Modal
img[2].onclick = function () {
	modal[2].style.display = "block";
	modalImg[2].src = this.src;
};

span[2].onclick = function () {
	modal[2].style.display = "none";
};

// Next Modal
img[3].onclick = function () {
	modal[3].style.display = "block";
	modalImg[3].src = this.src;
};

span[3].onclick = function () {
	modal[3].style.display = "none";
};

// Next Modal
img[4].onclick = function () {
	modal[4].style.display = "block";
	modalImg[4].src = this.src;
};

span[4].onclick = function () {
	modal[4].style.display = "none";
};