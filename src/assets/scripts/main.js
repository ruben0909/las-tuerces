/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

const nav = document.querySelector(".site-header__nav");
const menuButton = document.querySelector(".site-header__menu-toggle");
const navLinks = document.querySelectorAll(".site-header__link");
const desktopMediaQuery = window.matchMedia("(min-width: 48rem)");

const closeMenu = () => {
  if (!nav || !menuButton) {
    return;
  }

  nav.classList.remove("site-header__nav--open");
  menuButton.setAttribute("aria-expanded", "false");
};

if (nav && menuButton) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("site-header__nav--open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  desktopMediaQuery.addEventListener("change", (event) => {
    if (event.matches) {
      closeMenu();
    }
  });
}
