const bestsellersSliders = document.querySelector('[data-slider-main-bestsellers]');

let prevButton;
let nextButton;
let animationDelay;
let animationSpeed;

const enableSwiper = (slider) => {
  prevButton = slider.closest('[data-slider-container]').querySelector('[data-btn-prev]');
  nextButton = slider.closest('[data-slider-container]').querySelector('[data-btn-next]');

  let mySwiper = new Swiper (slider, {
    loop: true,
    speed: 600,
    allowTouchMove: true,
    watchOverflow: true,
    spaceBetween: 0,
    slideActiveClass: 'is-active',
    watchSlidesProgress: true,
    slidesPerView: 1,
    autoplay: {
      delay: animationSpeed,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },
  });
};

const initBestsellersSliders = () => {
  if (bestsellersSliders) {
    animationDelay = parseInt(bestsellersSliders.dataset.delay, 10);
    animationSpeed = parseInt(bestsellersSliders.dataset.speed, 10);

    enableSwiper(bestsellersSliders);
  }
};

export {initBestsellersSliders};
