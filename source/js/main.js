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
    setIcon('/__spritemap#sprite-hover-light');
  });

  button.addEventListener('mouseleave', () => {
    setIcon('/__spritemap#sprite-default-light');
  });

  button.addEventListener('mousedown', () => {
    console.log('active');
    setIcon('/__spritemap#sprite-active-light');
  });

  button.addEventListener('mouseup', () => {
    setIcon('/__spritemap#sprite-hover-light');
  });

  button.addEventListener('focus', () => {
    console.log('focus');
    setIcon('/__spritemap#sprite-focus-light');
  });

  button.addEventListener('blur', () => {
    setIcon('/__spritemap#sprite-default-light');
  });

    if (button.disabled) {
    setIcon('/__spritemap#sprite-disabled');
  }
});

/* PROGRAMS - Смена икноки на кнопке */
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.programs__button');
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
    setIcon('/__spritemap#sprite-hover-light');
  });

  button.addEventListener('mouseleave', () => {
    setIcon('/__spritemap#sprite-default-light');
  });

  button.addEventListener('mousedown', () => {
    console.log('active');
    setIcon('/__spritemap#sprite-active-light');
  });

  button.addEventListener('mouseup', () => {
    setIcon('/__spritemap#sprite-hover-light');
  });

  button.addEventListener('focus', () => {
    console.log('focus');
    setIcon('/__spritemap#sprite-focus-light');
  });

  button.addEventListener('blur', () => {
    setIcon('/__spritemap#sprite-default-light');
  });

    if (button.disabled) {
    setIcon('/__spritemap#sprite-disabled');
  }
});

/* FORM - Смена иконки на кнопке */
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.form__button');
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
    setIcon('/__spritemap#sprite-hover-blue');
  });

  button.addEventListener('mouseleave', () => {
    setIcon('/__spritemap#sprite-default-blue');
  });

  button.addEventListener('mousedown', () => {
    console.log('active');
    setIcon('/__spritemap#sprite-active-blue');
  });

  button.addEventListener('mouseup', () => {
    setIcon('/__spritemap#sprite-hover-blue');
  });

  button.addEventListener('focus', () => {
    console.log('focus');
    setIcon('/__spritemap#sprite-focus-blue');
  });

  button.addEventListener('blur', () => {
    setIcon('/__spritemap#sprite-default-blue');
  });

    if (button.disabled) {
    setIcon('/__spritemap#sprite-disabled');
  }
});
