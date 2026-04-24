document.addEventListener("DOMContentLoaded", () => {
    const lines = document.querySelectorAll(".reveal-line");
    const header = document.querySelector(".luxury-header");
    const video = document.querySelector(".hero-video");

    requestAnimationFrame(() => {
        lines.forEach((line, i) => {
            setTimeout(() => line.classList.add("visible"), 500 + i * 350);
        });
    });

    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        if (header) {
            if (scrollY > 50) {
                header.classList.add("header-scrolled");
            } else {
                header.classList.remove("header-scrolled");
            }
        }
        if (video) {
            video.style.transform = `translateY(${scrollY * 0.4}px)`;
        }
    });

    if (video) {
        video.addEventListener("error", () => {
            video.style.display = "none";
        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        observer.observe(el);
    });
});