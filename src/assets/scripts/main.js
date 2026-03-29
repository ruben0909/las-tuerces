

import L from 'leaflet';


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

const mapContainer = document.querySelector('#las-tuerces-map');

if (mapContainer) {
  const coordinates = [42.761246, -4.245559];
  const map = L.map('las-tuerces-map', {
    scrollWheelZoom: false,
  }).setView(coordinates, 13);

  const mapMarker = L.divIcon({
    className: 'leaflet-map-marker',
    html: '<svg width="28" height="40" viewBox="0 0 28 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M14 0C6.268 0 0 6.268 0 14c0 10.5 14 26 14 26s14-15.5 14-26C28 6.268 21.732 0 14 0z" fill="#a66d3b"/><circle cx="14" cy="14" r="5.8" fill="#fff"/></svg>',
    iconSize: [28, 40],
    iconAnchor: [14, 40],
    popupAnchor: [0, -34],
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 19,
  }).addTo(map);

  L.marker(coordinates, { icon: mapMarker })
    .addTo(map)
    .bindPopup('Las Tuerces, Villaescusa de las Torres (Palencia)')
    .openPopup();
}
