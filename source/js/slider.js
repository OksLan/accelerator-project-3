export function initSlider() {
    document.addEventListener("DOMContentLoaded", () => {
      const slider = document.querySelector(".slides-wrapper");
      const slides = Array.from(slider.querySelectorAll(".slide"));
      const paginationBullets = Array.from(
        document.querySelectorAll(".slider__pagination-bullet")
      );
      let slideIndex = 0;
  
      const updatePagination = () => {
        paginationBullets.forEach((bullet, index) => {
          bullet.classList.toggle(
            "slider__pagination-bullet--selected",
            index === slideIndex
          );
        });
      };
  
      const slide = () => {
        const imageWidth = slider.clientWidth;
        const slideOffset = -slideIndex * imageWidth;
        slider.style.transform = `translateX(${slideOffset}px)`;
        updatePagination();
      };
  
      paginationBullets.forEach((bullet, index) => {
        bullet.addEventListener("click", () => {
          slideIndex = index;
          slide();
        });
      });
  
      window.addEventListener("load", slide);
      updatePagination();
    });
  }
  