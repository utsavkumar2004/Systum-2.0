// GSAP Animations
document.addEventListener("DOMContentLoaded", function() {
    gsap.from(".hero-content h1", { 
        duration: 1, 
        opacity: 0, 
        y: -50 
    });

    gsap.from(".hero-content p", { 
        duration: 1, 
        opacity: 0, 
        y: 50, 
        delay: 0.5 
    });

    gsap.from(".buttons a", { 
        duration: 1, 
        opacity: 0, 
        scale: 0.5, 
        stagger: 0.3, 
        delay: 1 
    });
});

// pg-2
document.addEventListener("DOMContentLoaded", function() {
    gsap.from(".about-text h2", { 
        duration: 1, 
        opacity: 0, 
        y: -50 
    });

    gsap.from(".about-text h1", { 
        duration: 1.2, 
        opacity: 0, 
        x: -50, 
        delay: 0.2 
    });

    gsap.from(".about-text p", { 
        duration: 1.4, 
        opacity: 0, 
        x: -50, 
        delay: 0.4 
    });

    gsap.from(".about-text .btn", { 
        duration: 1.6, 
        opacity: 0, 
        scale: 0.5, 
        delay: 0.6 
    });

    gsap.from(".about-image .image-slice", { 
        duration: 1.6, 
        opacity: 0, 
        x: 50, 
        stagger: 0.3, 
        delay: 0.8 
    });
});

// pg-3
// Countdown Timer Functionality
document.addEventListener("DOMContentLoaded", function() {
    // Set the event date (for example: November 10, 2024)
    const eventDate = new Date("September 29, 2024 00:00:00").getTime();

    const timerUpdate = setInterval(function() {
        const now = new Date().getTime();
        const timeLeft = eventDate - now;

        // Time calculations for days, hours, minutes, and seconds
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000)) / 1000);

        // Display the result in the corresponding elements
        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;

        // If the countdown is finished, stop the timer
        if (timeLeft < 0) {
            clearInterval(timerUpdate);
            document.querySelector(".timer").innerHTML = "<h2>Event has started!</h2>";
        }
    }, 1000);  // Update the timer every second
});

// swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 3000,
    centeredSlides: true,
    grabCursor: true,
});

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// last
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

