document.addEventListener("DOMContentLoaded", () => {

  const toggleBtn = document.getElementById("themeToggle");
  const icon = toggleBtn.querySelector("i");
  const body = document.body;
  const nav = document.getElementById("navMenu");
  const hero = document.querySelector("#home");

  /* ===== DEFAULT DARK THEME ===== */
  body.classList.add("dark");
  icon.classList.replace("fa-moon", "fa-sun");

  /* ===== THEME TOGGLE ===== */
  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-sun");
  });

  /* ===== MOBILE MENU ===== */
  window.toggleMenu = function () {
    nav.classList.toggle("show");
  };

  /* ===== DOWNLOAD CV ===== */
  window.downloadCV = function () {
    window.location.href = "files/Resume.pdf";
  };

  /* ===== HERO ANIMATION RESTART ===== */
  function restartHeroAnimations() {
    const typing = document.querySelector(".typing");
    const role = document.querySelector(".role");

    if (typing) {
      typing.style.animation = "none";
      typing.offsetHeight; // force reflow
      typing.style.animation =
        "typing 3s steps(20, end) forwards, blink 0.5s step-end infinite";
    }

    if (role) {
      role.style.animation = "none";
      role.offsetHeight; // force reflow
      role.style.animation = "fadeUp 1s ease-out forwards";
    }
  }

  /* ===== OBSERVE HERO ===== */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          restartHeroAnimations();
        }
      });
    },
    { threshold: 0.6 }
  );

  observer.observe(hero);
});
