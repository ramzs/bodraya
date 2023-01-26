const popularBrandsSliders = document.querySelector('[data-slider-popular-brands]');

let prevButton;
let nextButton;
let animationDelay;
let animationSpeed;

const enableSwiper = (slider) => {
  prevButton = slider.closest('[data-slider-container="slider-popular-brands"]').querySelector('[data-btn-prev]');
  nextButton = slider.closest('[data-slider-container="slider-popular-brands"]').querySelector('[data-btn-next]');

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
    breakpoints: {
      743: {
        slidesPerView: 2,
      },
      1023: {
        slidesPerView: 3,
      },
    },
  });
};

const initPopularBrandsSliders = () => {
  if (popularBrandsSliders) {
    animationDelay = parseInt(popularBrandsSliders.dataset.delay, 10);
    animationSpeed = parseInt(popularBrandsSliders.dataset.speed, 10);

    enableSwiper(popularBrandsSliders);
  }
};

export {initPopularBrandsSliders};
