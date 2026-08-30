// =========================================================
// MAHMUDUL AREFIN RAFI - PORTFOLIO INTERACTIONS
// =========================================================

console.log("Mahmudul Arefin Rafi's Portfolio Loaded Successfully!");

// ---------------------------------------------------------
// Smooth navigation
// ---------------------------------------------------------

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

// ---------------------------------------------------------
// Scroll reveal
// ---------------------------------------------------------

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show-section");
            }
        });
    },
    { threshold: 0.12 }
);

sections.forEach(section => observer.observe(section));

// ---------------------------------------------------------
// Premium bubble cursor
// Desktop only. Automatically disabled on touch devices.
// ---------------------------------------------------------

if (window.matchMedia("(pointer: fine)").matches) {

    const bubble = document.createElement("div");
    bubble.className = "cursor-bubble";

    const dot = document.createElement("div");
    dot.className = "cursor-dot";

    document.body.appendChild(bubble);
    document.body.appendChild(dot);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let bubbleX = mouseX;
    let bubbleY = mouseY;

    const moveCursor = () => {
        bubbleX += (mouseX - bubbleX) * 0.16;
        bubbleY += (mouseY - bubbleY) * 0.16;

        bubble.style.left = `${bubbleX}px`;
        bubble.style.top = `${bubbleY}px`;

        dot.style.left = `${mouseX}px`;
        dot.style.top = `${mouseY}px`;

        requestAnimationFrame(moveCursor);
    };

    moveCursor();

    window.addEventListener("mousemove", event => {
        mouseX = event.clientX;
        mouseY = event.clientY;

        bubble.style.opacity = "1";
        dot.style.opacity = "1";

        document.documentElement.style.setProperty("--mouse-x", `${mouseX}px`);
        document.documentElement.style.setProperty("--mouse-y", `${mouseY}px`);
    });

    document.querySelectorAll("a, button, .skill-card, .project-card").forEach(element => {
        element.addEventListener("mouseenter", () => {
            bubble.classList.add("hovering");
        });

        element.addEventListener("mouseleave", () => {
            bubble.classList.remove("hovering");
        });
    });

    window.addEventListener("click", event => {
        const ripple = document.createElement("div");
        ripple.className = "cursor-ripple";
        ripple.style.left = `${event.clientX}px`;
        ripple.style.top = `${event.clientY}px`;
        document.body.appendChild(ripple);

        setTimeout(() => ripple.remove(), 700);
    });

    document.addEventListener("mouseleave", () => {
        bubble.style.opacity = "0";
        dot.style.opacity = "0";
    });

    document.addEventListener("mouseenter", () => {
        bubble.style.opacity = "1";
        dot.style.opacity = "1";
    });
}
