// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

/* FAQ */
// document.addEventListener('DOMContentLoaded', () => {
//   document.querySelectorAll('.faq__details').forEach((el, i) => {
//     el.open = (i === 2);
//   });
// });

/* развернуть/свернуть main__nav */
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".hero__header-toggle");
  const navList = document.querySelector(".main__nav");
  const icon = toggleButton.querySelector("use");

  toggleButton.addEventListener("click", () => {
    toggleButton.classList.toggle("hero__header-toggle--open");
    toggleButton.classList.toggle("hero__header-toggle--close");
    navList.classList.toggle("main__nav--opened");

    const isOpen = navList.classList.contains("main__nav--opened");
    icon.setAttribute(
      "href",
      isOpen ? "/__spritemap#sprite-cross" : "/__spritemap#sprite-burger"
    );
  });
});

  // Подменю
  document.querySelectorAll(".main__nav-item").forEach(item => {
    const subList = item.querySelector(".program__list");
    if (subList) {
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        subList.classList.toggle("open");
      });
    }
  });
