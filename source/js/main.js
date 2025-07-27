// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';


/* FAQ */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.faq__details').forEach((el, i) => {
    el.open = (i === 2);
  });
});
