export function initSlider() {
  document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slides-wrapper");
    const slides = Array.from(slider.querySelectorAll(".slide"));
    const paginationBullets = Array.from(
      document.querySelectorAll(".slider__pagination-bullet")
    );

    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);

    slider.appendChild(firstClone);
    slider.insertBefore(lastClone, slides[0]);

    const allSlides = slider.querySelectorAll(".slide");

    let slideIndex = 1;
    let isDragging = false;
    let startX = 0;
    let currentX = 0;

    const goToSlide = (index, withTransition = true) => {
      const imageWidth = slider.clientWidth;
      slider.style.transition = withTransition ? "transform 0.5s ease-in-out" : "none";
      slider.style.transform = `translateX(${-index * imageWidth}px)`;
      updatePagination();
    };

    const updatePagination = () => {
      paginationBullets.forEach((bullet, index) => {
        bullet.classList.toggle(
          "slider__pagination-bullet--selected",
          index === slideIndex - 1 // -1, потому что у нас есть клон в начале
        );
      });
    };

    slider.addEventListener("transitionend", () => {
      if (allSlides[slideIndex].isEqualNode(firstClone)) {
        slideIndex = 1;
        goToSlide(slideIndex, false);
      }
      if (allSlides[slideIndex].isEqualNode(lastClone)) {
        slideIndex = allSlides.length - 2;
        goToSlide(slideIndex, false);
      }
    });

    paginationBullets.forEach((bullet, index) => {
      bullet.addEventListener("click", () => {
        slideIndex = index + 1;
        goToSlide(slideIndex);
      });
    });

    // перетягивание для tablet и mobile
    const handleDragStart = (e) => {
      if (window.innerWidth >= 1024) return; // отключен на desktop
      isDragging = true;
      startX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
      slider.style.transition = "none";
    };

    const handleDragMove = (e) => {
      if (!isDragging) return;
      currentX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
      const deltaX = currentX - startX;
      const imageWidth = slider.clientWidth;
      const offset = -slideIndex * imageWidth + deltaX;
      slider.style.transform = `translateX(${offset}px)`;
    };

    const handleDragEnd = () => {
      if (!isDragging) return;
      isDragging = false;
      const deltaX = currentX - startX;
      const threshold = slider.clientWidth / 4;

      if (deltaX > threshold) {
        slideIndex -= 1;
      } else if (deltaX < -threshold) {
        slideIndex += 1;
      }
      goToSlide(slideIndex);
    };

    slider.addEventListener("mousedown", handleDragStart);
    slider.addEventListener("mousemove", handleDragMove);
    slider.addEventListener("mouseup", handleDragEnd);
    slider.addEventListener("mouseleave", handleDragEnd);

    slider.addEventListener("touchstart", handleDragStart, { passive: true });
    slider.addEventListener("touchmove", handleDragMove, { passive: true });
    slider.addEventListener("touchend", handleDragEnd);

    goToSlide(slideIndex, false);
  });
}
