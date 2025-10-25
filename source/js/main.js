import Swiper from "swiper";
import {Navigation, Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { programCards, showPrograms } from './programs.js';
import { reviewCards, showReviews } from './reviews.js';


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

/* PROGRAMS */
const programsList = document.querySelector(".programs__list");
const programTemplate = document.querySelector("#program-card");

showPrograms(programCards);

/* свайпер */
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

/* перемещение элементов в PROGRAMS */
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

/* REVIEWS */
const reviewsList = document.querySelector(".reviews__list");
const reviewTemplate = document.querySelector("#review-card");

showReviews(reviewCards);

/* свайпер */
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

/* POPUP */
document.addEventListener("DOMContentLoaded", () => {
  const popup = document.querySelector(".popup");
  const openBtn = document.querySelector(".about__button");
  const closeBtn = document.querySelector(".popup-toggle");

  if (!popup || !openBtn || !closeBtn) return;

  const openPopup = () => {
    popup.classList.add("popup--active");
    document.body.classList.add("no-scroll");
  };

  const closePopup = () => {
    popup.classList.remove("popup--active");
    document.body.classList.remove("no-scroll");
  };

  openBtn.addEventListener("click", (e) => {
    e.preventDefault();
    openPopup();
  });

  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    closePopup();
  });

  popup.addEventListener("click", (e) => {
    if (!e.target.closest(".popup__container")) {
      closePopup();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closePopup();
  });
});


document.querySelectorAll('.custom-select').forEach(select => {
  const button = select.querySelector('.custom-select__button');
  const text = select.querySelector('.custom-select__text');
  const list = select.querySelector('.custom-select__list');
  const items = select.querySelectorAll('.custom-select__item');

  // открыть/закрыть список
  button.addEventListener('click', () => {
    select.classList.toggle('custom-select--open');
  });

  // выбрать пункт
  items.forEach(item => {
    item.addEventListener('click', () => {
      text.textContent = item.textContent;
      select.classList.remove('custom-select--open');
    });
  });

  // закрыть при клике вне селекта
  document.addEventListener('click', e => {
    if (!select.contains(e.target)) {
      select.classList.remove('custom-select--open');
    }
  });
});

