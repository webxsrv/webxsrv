const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const hamIcon = navToggle ? navToggle.querySelector(".ham") : null;

if (navToggle && siteNav) {
  navToggle.addEventListener("click", (event) => {
    event.stopPropagation();

    const isOpen = siteNav.classList.toggle("is-open");

    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);

    if (hamIcon) {
      hamIcon.classList.toggle("active", isOpen);
    }
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");

      if (hamIcon) {
        hamIcon.classList.remove("active");
      }
    }
  });

  document.addEventListener("click", (event) => {
    if (!siteNav.contains(event.target) && !navToggle.contains(event.target)) {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");

      if (hamIcon) {
        hamIcon.classList.remove("active");
      }
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");

      if (hamIcon) {
        hamIcon.classList.remove("active");
      }
    }
  });
}
