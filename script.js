document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("year").textContent = new Date().getFullYear();
});

function myFunction() {
    const nav = document.getElementById("myTopnav");
    nav.classList.toggle("responsive");
}
