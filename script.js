// =========================================================
// MAHMUDUL AREFIN RAFI - PORTFOLIO INTERACTIONS
// =========================================================

console.log("Mahmudul Arefin Rafi's Portfolio Loaded Successfully!");

// ---------------------------------------------------------
// English / Bangla language switch
// ---------------------------------------------------------

const languageToggle = document.getElementById("languageToggle");
const translatableElements = document.querySelectorAll("[data-en][data-bn]");

function setLanguage(language) {
    const isBangla = language === "bn";
    document.documentElement.lang = isBangla ? "bn" : "en";
    document.body.classList.toggle("bn-mode", isBangla);

    translatableElements.forEach(element => {
        element.textContent = isBangla ? element.dataset.bn : element.dataset.en;
    });

    if (languageToggle) {
        languageToggle.querySelectorAll("span").forEach(span => span.classList.remove("active"));
        const active = languageToggle.querySelector(isBangla ? "span:last-of-type" : "span:first-of-type");
        if (active) active.classList.add("active");
        languageToggle.setAttribute("aria-label", isBangla ? "Switch to English" : "বাংলায় পরিবর্তন করুন");
    }

    localStorage.setItem("portfolioLanguage", language);
}

const savedLanguage = localStorage.getItem("portfolioLanguage") || "en";
setLanguage(savedLanguage);

if (languageToggle) {
    languageToggle.addEventListener("click", () => {
        const nextLanguage = document.body.classList.contains("bn-mode") ? "en" : "bn";
        setLanguage(nextLanguage);
    });
}

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
// Bubble cursor
// ---------------------------------------------------------

if (window.matchMedia("(pointer: fine)").matches) {
    const bubble = document.querySelector(".cursor-bubble") || document.createElement("div");
    const dot = document.querySelector(".cursor-dot") || document.createElement("div");
    bubble.className = "cursor-bubble";
    dot.className = "cursor-dot";
    if (!bubble.parentElement) document.body.appendChild(bubble);
    if (!dot.parentElement) document.body.appendChild(dot);

    let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
    let bubbleX = mouseX, bubbleY = mouseY;

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
        element.addEventListener("mouseenter", () => bubble.classList.add("hovering"));
        element.addEventListener("mouseleave", () => bubble.classList.remove("hovering"));
    });

    window.addEventListener("click", event => {
        const ripple = document.createElement("div");
        ripple.className = "cursor-ripple";
        ripple.style.left = `${event.clientX}px`;
        ripple.style.top = `${event.clientY}px`;
        document.body.appendChild(ripple);
        setTimeout(() => ripple.remove(), 700);
    });

    document.addEventListener("mouseleave", () => { bubble.style.opacity = "0"; dot.style.opacity = "0"; });
    document.addEventListener("mouseenter", () => { bubble.style.opacity = "1"; dot.style.opacity = "1"; });
}
