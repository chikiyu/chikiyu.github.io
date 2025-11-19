var loader = document.getElementById("preloader");

// Hide preloader and trigger intro popup
window.addEventListener("load", function () {
	if (loader) loader.style.display = "none";
	var hey = document.querySelector(".hey");
	if (hey) hey.classList.add("popup");
});

var emptyArea = document.getElementById("emptyarea"), mobileTogglemenu = document.getElementById("mobiletogglemenu");
function hamburgerMenu() {
	document.body.classList.toggle("stopscrolling");
	var mm = document.getElementById("mobiletogglemenu"); if (mm) mm.classList.toggle("show-toggle-menu");
	document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
	document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
	document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
}

function hidemenubyli() {
	document.body.classList.remove("stopscrolling");
	var mm = document.getElementById("mobiletogglemenu"); if (mm) mm.classList.remove("show-toggle-menu");
	document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
	document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
	document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

const sections = document.querySelectorAll("section"), navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li"), mobilenavLi = document.querySelectorAll(".mobiletogglemenu .mobile-navbar-tabs-ul li");
window.addEventListener("scroll", () => {
	let current = "";
	sections.forEach((s) => {
		let top = s.offsetTop;
		if (pageYOffset >= top - 200) current = s.getAttribute("id");
	});
	mobilenavLi.forEach((li) => {
		li.classList.remove("activeThismobiletab");
		if (li.classList.contains(current)) li.classList.add("activeThismobiletab");
	});
	navLi.forEach((li) => {
		li.classList.remove("activeThistab");
		if (li.classList.contains(current)) li.classList.add("activeThistab");
	});
});

console.log("%c Designed and Developed by Vinod Jangid ", "background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white;font-weight:900;font-size:1rem; padding:20px;");

let mybutton = document.getElementById("backtotopbutton");
function scrollFunction() {
	if (!mybutton) return;
	if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) mybutton.style.display = "block"; else mybutton.style.display = "none";
}
function scrolltoTopfunction() { document.body.scrollTop = 0; document.documentElement.scrollTop = 0; }
window.onscroll = function () { scrollFunction(); };
document.addEventListener("contextmenu", function (e) { if (e.target && e.target.nodeName === "IMG") e.preventDefault(); }, false);

// Note: settings controls and footer avatar/pupil behavior removed per request