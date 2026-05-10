const card = document.getElementById("card");
const music = document.getElementById("bgMusic");

// Open Card Animation
card.addEventListener("click", () => {

  card.classList.toggle("open");

  // Play Music on First Click
  if (music.paused) {
    music.play();
  }
});

/* PREMIUM FLOATING PARTICLES */

const particles = document.querySelector(".particles");

function createParticle(){

  const particle = document.createElement("div");

  particle.classList.add("particle");

  const size = Math.random() * 5 + 2;

  particle.style.width = size + "px";
  particle.style.height = size + "px";

  particle.style.left =
    Math.random() * window.innerWidth + "px";

  particle.style.animationDuration =
    (Math.random() * 6 + 4) + "s";

  particle.style.opacity = Math.random();

  particle.style.background =
    Math.random() > 0.5
      ? "#ffffff"
      : "#f5d28b";

  particles.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 10000);
}

setInterval(createParticle, 120);

/* EXTRA GLOW EFFECT */

setInterval(() => {
  document.body.style.filter =
    "brightness(" + (1 + Math.random() * 0.03) + ")";
}, 3000);