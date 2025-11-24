export function initNewsSwiper() {
  const swiperEl = document.querySelector(".news__swiper");
  if (!swiperEl) return;

  const newsSwiper = new Swiper(swiperEl, {
    speed: 500,
    watchSlidesProgress: true,
    slidesPerView: "auto",
    spaceBetween: 32,
    loop: false,

    pagination: {
      el: ".news__pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".news__button--next",
      prevEl: ".news__button--prev",
    },

    breakpoints: {
      1440: {
        slidesPerView: "auto",
        spaceBetween: 32,
        allowTouchMove: true,
        grid: {
          rows: 1,
        },
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        allowTouchMove: false, // свайп выключаем
        grid: {
          rows: 2,
          fill: "row",
        },
      },

      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        allowTouchMove: false,
        grid: {
          rows: 2,
          fill: "row",
        },
      },
    },
  });
}
