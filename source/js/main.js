import Swiper from "swiper";
import {Navigation, Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation'


/* FAQ */
// document.addEventListener('DOMContentLoaded', () => {
//   document.querySelectorAll('.faq__details').forEach((el, i) => {
//     el.open = (i === 2);
//   });
// });


/* hero__nav */
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".hero__header-toggle");
  const nav = document.querySelector(".hero__nav");
  const icon = toggleButton?.querySelector("use");

  const setIcon = (id) => icon?.setAttribute("href", id);

  const closeAllSubmenus = () => {
    document.querySelectorAll(".hero__nav-item--submenu__list").forEach(el => el.classList.remove("hero__nav-item--submenu__list--open"));
    document.querySelectorAll(".hero__nav-item--submenu__toggle").forEach(btn => {
      btn.classList.remove("hero__nav-item--submenu__toggle--open");
      btn.setAttribute("aria-expanded", "false");
    });
  };

  const setMenuState = (open) => {
    nav.classList.toggle("nav--opened", open);
    toggleButton.setAttribute("aria-expanded", open);
    setIcon(open ? "/__spritemap#sprite-cross" : "/__spritemap#sprite-burger");
    if (!open) {
      closeAllSubmenus();
      toggleButton.blur();
    }
  };

  toggleButton.addEventListener("click", (e) => {
    e.stopPropagation();
    setMenuState(!nav.classList.contains("nav--opened"));
  });

  // закрыть меню по клику вне
  document.addEventListener("click", (e) => {
    if (nav.classList.contains("nav--opened") &&
        !nav.contains(e.target) && !toggleButton.contains(e.target)) {
      setMenuState(false);
    }
  });

  // закрыть меню по Esc
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("nav--opened")) {
      setMenuState(false);
    }
  });

  // подменю
  document.querySelectorAll(".nav__item--submenu").forEach((item) => {
    const subList = item.querySelector(".submenu__list");
    const arrowBtn = item.querySelector(".submenu-toggle");

    if (!subList || !arrowBtn) return;

    arrowBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = subList.classList.toggle("submenu__list--open");
      arrowBtn.classList.toggle("submenu-toggle--open", isOpen);
      arrowBtn.setAttribute("aria-expanded", isOpen);
    });
  });
});
