import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const DESKTOP_BREAKPOINT = 1440;

let featuresSwiper = null;
let howSwiper = null;
let reviewsSwiper = null;

function initFeaturesSwiper() {
  const swiperElement = document.querySelector('.features-swiper');

  if (!swiperElement || featuresSwiper) {
    return;
  }

  featuresSwiper = new Swiper(swiperElement, {
    modules: [Autoplay],

    slidesPerView: 1,
    spaceBetween: 16,
    speed: 700,
    loop: true,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

  });
}

function initHowSwiper() {
  const swiperElement = document.querySelector('.how-swiper');

  if (!swiperElement || howSwiper) {
    return;
  }

  howSwiper = new Swiper(swiperElement, {
    modules: [Autoplay],

    slidesPerView: 1.5,
    spaceBetween: 16,
    speed: 700,
    loop: true,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  });
}

function initReviewsSwiper() {
  const swiperElement = document.querySelector('.reviews-swiper');

  if (!swiperElement || reviewsSwiper) {
    return;
  }

  reviewsSwiper = new Swiper(swiperElement, {
    modules: [Autoplay],

    slidesPerView: 1,
    spaceBetween: 16,
    speed: 700,
    loop: true,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  });
}

function destroyMobileSwipers() {
  if (featuresSwiper) {
    featuresSwiper.destroy(true, true);
    featuresSwiper = null;
  }

  if (howSwiper) {
    howSwiper.destroy(true, true);
    howSwiper = null;
  }

  if (reviewsSwiper) {
    reviewsSwiper.destroy(true, true);
    reviewsSwiper = null;
  }
}

function handleSwipers() {
  if (window.innerWidth < DESKTOP_BREAKPOINT) {
    initFeaturesSwiper();
    initHowSwiper();
    initReviewsSwiper();
    return;
  }

  destroyMobileSwipers();
}

handleSwipers();

window.addEventListener('resize', handleSwipers);