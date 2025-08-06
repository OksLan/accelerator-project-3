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


/* ABOUT - Смена икноки на кнопке */
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.about__button');
  const svgUse = button?.querySelector('use');
  const XLINK_NS = 'http://www.w3.org/1999/xlink';

  if (!button || !svgUse) {
    return;
  }

  const setIcon = (href) => {
    svgUse.setAttributeNS(XLINK_NS, 'xlink:href', href);
    svgUse.setAttribute('href', href);
  };

  button.addEventListener('mouseenter', () => {
    console.log('hover');
    setIcon('/__spritemap#sprite-hv-light');
  });

  button.addEventListener('mouseleave', () => {
    setIcon('/__spritemap#sprite-df-light');
  });

  button.addEventListener('mousedown', () => {
    console.log('active');
    setIcon('/__spritemap#sprite-act-light');
  });

  button.addEventListener('mouseup', () => {
    setIcon('/__spritemap#sprite-hv-light');
  });

  button.addEventListener('focus', () => {
    console.log('focus');
    setIcon('/__spritemap#sprite-fc-light');
  });

  button.addEventListener('blur', () => {
    setIcon('/__spritemap#sprite-df-light');
  });
});


/* FORM - Смена иконки на кнопке */
document.addEventListener('DOMContentLoaded', () => {
  const formButton = document.querySelector('.form__button');
  const svgUse = formButton?.querySelector('use');
  const XLINK_NS = 'http://www.w3.org/1999/xlink';

  if (!formButton || !svgUse) {
    return;
  }

  const setIcon = (href) => {
    svgUse.setAttributeNS(XLINK_NS, 'xlink:href', href);
    svgUse.setAttribute('href', href);
  };

  formButton.addEventListener('mouseenter', () => {
    console.log('hover');
    setIcon('/__spritemap#sprite-hv-blue');
  });

  formButton.addEventListener('mouseleave', () => {
    setIcon('/__spritemap#sprite-df-blue');
  });

  formButton.addEventListener('mousedown', () => {
    console.log('active');
    setIcon('/__spritemap#sprite-act-blue');
  });

  formButton.addEventListener('mouseup', () => {
    setIcon('/__spritemap#sprite-hv-blue');
  });

  formButton.addEventListener('focus', () => {
    console.log('focus');
    setIcon('/__spritemap#sprite-fc-blue');
  });

  formButton.addEventListener('blur', () => {
    setIcon('/__spritemap#sprite-df-blue');
  });

  if (formButton.disabled) {
    setIcon('/__spritemap#sprite-dis');
  }
});
