// ================================
// Portfolio JavaScript
// ================================

console.log("Mahmudul Arefin Rafi's Portfolio Loaded Successfully!");

// Smooth navigation

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {
        const targetId = this.getAttribute("href");
        if (targetId === "#") return;

        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            event.preventDefault();
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Scroll animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show-section");
            }
        });
    },
    { threshold: 0.15 }
);

sections.forEach(section => observer.observe(section));
