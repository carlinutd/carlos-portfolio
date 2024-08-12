document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".nav");
    const navLinks = document.querySelectorAll(".nav-list a");

    hamburger.addEventListener("click", function() {
        nav.classList.toggle("active");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            nav.classList.remove("active");
        });
    });
});
