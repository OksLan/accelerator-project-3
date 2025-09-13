import Swiper from "swiper";
import {Navigation, Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';

import { programCards, showPrograms } from './programs.js';
  showPrograms(programCards);

/* HERO slider */
import { initSlider} from "./slider.js";

  initSlider();

/* FAQ */
// document.addEventListener('DOMContentLoaded', () => {
//   document.querySelectorAll('.faq__details').forEach((el, i) => {
//     el.open = (i === 2);
//   });
// });


/* hero__nav */
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".hero__nav");
  const toggleBtn = document.querySelector(".hero__header-toggle");
  const icon = toggleBtn?.querySelector("use");

  const setIcon = (id) => icon?.setAttribute("href", id);

  const setMenuState = (open) => {
    nav.classList.toggle("nav--opened", open);
    toggleBtn.setAttribute("aria-expanded", open);
    setIcon(open ? "/__spritemap#sprite-cross" : "/__spritemap#sprite-burger");
    if (!open) {
      nav.querySelectorAll(".hero__nav-sublist").forEach(el => el.classList.remove("hero__nav-sublist--open"));
      nav.querySelectorAll(".hero__nav-toggle").forEach(btn => {
        btn.classList.remove("hero__nav-toggle--open");
        btn.setAttribute("aria-expanded", "false");
      });
    }
  };

  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    setMenuState(!nav.classList.contains("nav--opened"));
  });

  document.addEventListener("click", (e) => {
    if (nav.classList.contains("nav--opened") && !nav.contains(e.target) && !toggleBtn.contains(e.target)) {
      setMenuState(false);
    }
  });

  document.addEventListener("keydown", (e) => e.key === "Escape" && setMenuState(false));

  nav.querySelectorAll(".hero__nav-item--submenu").forEach(item => {
    const sublist = item.querySelector(".hero__nav-sublist");
    const btn = item.querySelector(".hero__nav-toggle");
    if (!sublist || !btn) return;

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = sublist.classList.toggle("hero__nav-sublist--open");
      btn.classList.toggle("hero__nav-toggle--open", isOpen);
      btn.setAttribute("aria-expanded", isOpen);
    });
  });
});
