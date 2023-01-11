const burgerMenu = document.getElementById("burgerMenu");
const navList = document.getElementById("navList");
const navLinks = document.querySelectorAll("#navList a");
const bodyEl = document.body;

burgerMenu.addEventListener("click", () => {
    bodyEl.classList.toggle("overflow-y-hidden");
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

