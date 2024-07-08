const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
if(hamburger && nav) {
    hamburger.addEventListener("click", () => nav.classList.toggle("active"));
}

document.querySelectorAll('.nav-list a').forEach(function(item) {
    item.addEventListener('click', function() {
        document.querySelector('.nav').classList.remove('active');
    });
});
