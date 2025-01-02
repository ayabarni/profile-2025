// menu open

var openButton = document.getElementById("menuButton");
var Navbar = document.querySelector(".index-Nav");

openButton.addEventListener("click", toggleIndexMenu);
function toggleIndexMenu() {
    Navbar.classList.toggle("toonMenu");
    openButton.classList.toggle("navOpen");
}
