import Swiper from "swiper";
import {Navigation, Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { programCards, showPrograms } from './programs.js';
import { reviewCards, showReviews } from './reviews.js';
import { initPopup } from './popup.js';
import { initForm } from './form.js';
// import { initNewsSwiper } from "./news.js";


/* HERO slider */
import { initSlider} from "./slider.js";

  initSlider();

/* hero__nav */
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".hero__nav");
  const toggleBtn = document.querySelector(".hero__header-toggle");
  const icon = toggleBtn?.querySelector("use");
  const overlay = document.querySelector(".overlay");
  const body = document.body;

  const setIcon = (id) => icon?.setAttribute("href", id);

  const setMenuState = (open) => {
    nav.classList.toggle("nav--opened", open);
    toggleBtn.setAttribute("aria-expanded", open);
    setIcon(open ? "/__spritemap#sprite-cross" : "/__spritemap#sprite-burger");
    overlay.classList.toggle("overlay--active", open);
    body.classList.toggle("menu-open", open);

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

  // закрытие при клике вне меню
  document.addEventListener("click", (e) => {
    if (
      nav.classList.contains("nav--opened") &&
      !nav.contains(e.target) &&
      !toggleBtn.contains(e.target)
    ) {
      setMenuState(false);
    }
  });

  // закрытие по Esc
  document.addEventListener("keydown", (e) => e.key === "Escape" && setMenuState(false));

  // закрытие по overlay
  overlay.addEventListener("click", () => setMenuState(false));

  // подменю
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

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      setMenuState(false);
    });
  });
});

/* PROGRAMS */
const programsList = document.querySelector(".programs__list");
const programTemplate = document.querySelector("#program-card");

showPrograms(programCards);

// свайпер
const swiperPrograms = new Swiper('.programs__swiper', {
  modules: [Navigation, Pagination],
  direction: 'horizontal',
  speed: 500,

  breakpoints: {
    1440: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },

  // прогрессбар
  pagination: {
    el: '.programs__pagination',
    type: 'progressbar',
  },

  // стрелки
    navigation: {
    nextEl: '.programs__button--next',
    prevEl: '.programs__button--prev',
    enabled: true,
    clickable: true,
  },
});

// перемещение элементов в PROGRAMS
document.addEventListener("DOMContentLoaded", () => {
  const header     = document.querySelector(".programs__header");
  const footer     = document.querySelector(".programs__footer");
  const link       = document.querySelector(".programs__link");
  const buttons    = document.querySelector(".programs__buttons");
  const pagination = footer.querySelector(".swiper__pagination");

  const move = () => {
    const mobile = window.innerWidth < 768;

    if (mobile) {
      if (pagination) pagination.style.display = "none";
      if (!header.contains(buttons)) header.append(buttons);
      if (!footer.contains(link)) footer.append(link);
    } else {
      if (pagination) pagination.style.display = "";
      if (!header.contains(link)) header.append(link);
      if (!footer.contains(buttons)) footer.append(buttons);
    }
  };

  move();
  window.addEventListener("resize", move);
});

/* FAQ */
// document.addEventListener('DOMContentLoaded', () => {
//   document.querySelectorAll('.faq__details').forEach((el, i) => {
//     el.open = (i === 2);
//   });
// });

/* REVIEWS */
const reviewsList = document.querySelector(".reviews__list");
const reviewTemplate = document.querySelector("#review-card");

showReviews(reviewCards);

// свайпер
const swiperReviews = new Swiper('.reviews__swiper', {
  modules: [Navigation, Pagination],
  direction: 'horizontal',
  speed: 500,

  breakpoints: {
    1440: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    768: {
      slidesPerView: 1.3,
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
  },

  // прогрессбар
  pagination: {
    el: '.reviews__pagination',
    type: 'progressbar',
  },

  // стрелки
    navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
    enabled: true,
    clickable: true,
  },
});

// перемещение элементов в REVIEWS
document.addEventListener("DOMContentLoaded", () => {
  const h = document.querySelector(".reviews__header");
  const f = document.querySelector(".reviews__footer");
  const b = document.querySelector(".reviews__buttons");
  if (!h || !f || !b) return;

  const move = () => (window.innerWidth < 768 ? h : f).append(b);
  move();
  addEventListener("resize", move);
});

/* FOOTER */
document.querySelector('.footer__logo').addEventListener('click', (e) => {
  e.preventDefault(); // отменяет переход по "#"
});

/* NEWS */
const newsSwiper = new Swiper('.news__swiper', {
  modules: [Navigation, Pagination],
  direction: 'horizontal',
  speed: 500,

  breakpoints: {
    1440: {
      slidesPerView: 3,
      spaceBetween: 32,
      direction: 'horizontal',
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      direction: 'horizontal',
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      direction: 'vertical',
    },
  },

  // // прогрессбар
  // pagination: {
  //   el: '.news__pagination',
  //   type: 'progressbar',
  // },

  // стрелки
    navigation: {
    nextEl: '.news__button--next',
    prevEl: '.new s__button--prev',
    enabled: true,
    clickable: true,
  },
});

initPopup();
initForm();
