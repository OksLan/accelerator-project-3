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

/* развернуть/свернуть hero__nav */
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".hero__header-toggle");
  const nav = document.querySelector(".hero__nav");
  const icon = toggleButton?.querySelector("use");

  // бургер
  toggleButton.addEventListener("click", () => {
    toggleButton.classList.toggle("hero__header-toggle--open");
    toggleButton.classList.toggle("hero__header-toggle--close");
    nav.classList.toggle("nav--opened");

    const isOpen = nav.classList.contains("nav--opened");
    if (icon) {
      icon.setAttribute(
        "href",
        isOpen ? "/__spritemap#sprite-cross" : "/__spritemap#sprite-burger"
      );
    }
  });

  // подменю
  document.querySelectorAll(".nav__item--submenu").forEach(item => {
    const subList = item.querySelector(".submenu");
    if (subList) {
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        subList.classList.toggle("submenu--open");
      });
    }
  });
});

