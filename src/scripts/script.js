const burgerMenu = document.getElementById("burgerMenu");
const navList = document.getElementById("navList");
const navLinks = document.querySelectorAll("#navList a");

burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    navList.classList.toggle("active");
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if (navList.classList.contains("active") && burgerMenu.classList.contains("active")) {
            navList.classList.remove("active");
            burgerMenu.classList.remove("active");
        }
    });
});

