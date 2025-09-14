// Auto-update footer year
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("year").textContent = new Date().getFullYear();
});

// Toggle responsive menu
function myFunction() {
    const nav = document.getElementById("myTopnav");
    nav.classList.toggle("responsive");
}
