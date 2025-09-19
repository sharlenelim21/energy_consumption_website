document.addEventListener("DOMContentLoaded", () => {
    // Update footer year
    document.getElementById("year").textContent = new Date().getFullYear();

    // Attach click events for navigation
    document.querySelectorAll("[data-nav]").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetPage = link.getAttribute("data-nav");
            window.location.href = targetPage;
        });
    });
});

// Responsive nav toggle
function myFunction() {
    const nav = document.getElementById("myTopnav");
    nav.classList.toggle("responsive");
}
