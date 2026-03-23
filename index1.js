// ================= NAVBAR + SCROLL BUTTON (SINGLE SCROLL LOGIC) =================
const navbar = document.getElementById("mainNavbar");
const body = document.body;
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  let scrollValue = window.scrollY;

  // Navbar effect
  if (scrollValue > 50) {
    if (navbar) navbar.classList.add("nav-scrolled");
    body.classList.add("body-padding");
  } else {
    if (navbar) navbar.classList.remove("nav-scrolled");
    body.classList.remove("body-padding");
  }

  // Scroll button show/hide
  if (scrollValue > 100) {
    if (scrollBtn) scrollBtn.classList.add("show");
  } else {
    if (scrollBtn) scrollBtn.classList.remove("show");
  }

  // Scroll button fill black
  if (scrollValue > 300) {
    if (scrollBtn) scrollBtn.classList.add("fill");
  } else {
    if (scrollBtn) scrollBtn.classList.remove("fill");
  }
});

// Scroll to top
if (scrollBtn) {
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}


// ================= HERO IMAGE CHANGE =================
const images = [
  "https://unifato.com/hosue/assets/img/all-images/hero/hero-img1.png",
  "https://unifato.com/hosue/assets/img/all-images/hero/hero-img5.png",
  "https://unifato.com/hosue/assets/img/all-images/hero/hero-img6.png",
];

let currentIndex = 0;

const heroImage = document.getElementById("heroImage");
const upBtn = document.querySelector(".up-btn");
const downBtn = document.querySelector(".down-btn");

function showImage(index) {
  if (!heroImage) return;

  heroImage.style.opacity = 0;

  setTimeout(() => {
    heroImage.src = images[index];
    heroImage.style.opacity = 1;
  }, 300);
}

// Auto change
if (heroImage) {
  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }, 4000);
}

// Manual buttons
if (upBtn) {
  upBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });
}

if (downBtn) {
  downBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });
}


// ================= COUNTER =================
const counter = document.getElementById("counter");

if (counter) {
  let count = 1;

  let interval = setInterval(() => {
    count++;
    counter.innerText = count;

    if (count >= 25) {
      clearInterval(interval);
    }
  }, 80);
}


// ================= HERO ANIMATION =================
const panes = document.querySelector(".panes");

if (panes) {
  function animateHero() {
    setTimeout(() => {
      panes.classList.add("expand");

      setTimeout(() => {
        panes.classList.remove("expand");
      }, 4000);

    }, 1000);
  }

  animateHero();
  setInterval(animateHero, 6000);
}


// ================= NAVBAR TOGGLER =================
const toggler = document.querySelector(".navbar-toggler");

if (toggler) {
  const icon = toggler.querySelector("i");

  toggler.addEventListener("click", function () {
    setTimeout(() => {
      if (toggler.getAttribute("aria-expanded") === "true") {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
      } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      }
    }, 100);
  });
}

const btn = document.querySelector(".scroll-btn");
const circle = document.querySelector("circle");

const total = 283;

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  let height = document.documentElement.scrollHeight - window.innerHeight;

  let progress = total - (scroll / height) * total;
  circle.style.strokeDashoffset = progress;

  // show/hide
  btn.classList.toggle("show", scroll > 100);
});

// click scroll top
btn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });