// Création of an instance Typed.js for animated text effect on the home page with the"typing" class
var typed = new Typed(".typing", {
  strings: [
    "Frontend Developer",
    "Blogger",
    "Freelancer",
    "Youtuber",
    "Photographer",
  ],
  typeSpeed: 100, // Vitesse de frappe (ms par caractère)
  backSpeed: 100, // Vitesse d'effacement (ms par caractère)
  backDelay: 1000, // Pause avant de commencer à effacer (ms)
  loop: true, // Répète l'animation en boucle
});

/*========= For pages animation========*/
ScrollReveal({
  // reset: true,
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".hero, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .case-section, .recent-section, .testimonial-section, .intouch-section",
  { origin: "bottom" }
);
ScrollReveal().reveal(".hero-left h1, .hero-right, #menu-icon", { origin: "left" });
ScrollReveal().reveal(" main p,.cases .badge, .parteners", { origin: "right" });

// add menuHamburger

const menuBtn = document.getElementById("menu-icon");
const navLinks = document.querySelector("nav .nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
