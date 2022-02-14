const burgerMenu = document.getElementById("burgerMenu");
const navList = document.getElementById("navList");
const navLinks = document.querySelectorAll("#navList a");

function toggleNav() {
    burgerMenu.classList.toggle("active");
    navList.classList.toggle("active");
}

burgerMenu.addEventListener("click", toggleNav);

navLinks.forEach((link) => {
    link.addEventListener("click", toggleNav);
});

