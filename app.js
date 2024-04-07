const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
if(hamburger && nav) {
    hamburger.addEventListener("click", () => nav.classList.toggle("active"));
}


