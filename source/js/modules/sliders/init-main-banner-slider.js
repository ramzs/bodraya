const sliderMainBannerBlock = document.querySelector('[data-main-banner-slider]');

let mySwiper;
let mySwiperPagination;
let pagination;
let circleWrapper;
let circle;
let animationDelay;
let animationSpeed;
let prevButton;
let nextButton;
let isFirstLoad = true;

const initSlider = (slider) => {
  prevButton = slider.closest('[data-slider-container]').querySelector('[data-btn-prev]');
  nextButton = slider.closest('[data-slider-container]').querySelector('[data-btn-next]');
  pagination = slider.closest('[data-slider-container]').querySelector('[data-pagination]');

  mySwiperPagination = new Swiper(pagination, {
    spaceBetween: 0,
    allowTouchMove: false,
    watchOverflow: true,
    speed: animationDelay,
    watchSlidesProgress: true,
    slidesPerView: 3,
    loop: true,
    slideActiveClass: 'is-active',
    watchSlidesProgress: true,
    centeredSlides: true,
  });

  mySwiper = new Swiper (slider, {
    allowTouchMove: true,
    watchOverflow: true,
    speed: animationDelay,
    watchSlidesProgress: true,
    slidesPerView: 'auto',
    loop: true,
    // effect: 'fade',
    slideActiveClass: 'is-active',
    parallax: true,
    autoplay: {
      delay: animationSpeed,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },
    thumbs: {
      swiper: mySwiperPagination,
      slideThumbActiveClass: 'is-active',
    },
    on: {
      init(swiper) {
        swiper.autoplay.stop();
      },
      slideChange(swiper) {
        if (isFirstLoad && circle) {
          circle.style.animationDelay = `${animationDelay}ms`;
          isFirstLoad = false;
        }

        circleWrapper && circleWrapper.classList.contains('is-active') && circleWrapper.classList.remove('is-active');

        setTimeout(() => {
          mySwiper.autoplay.run();
          circleWrapper && circleWrapper.classList.add('is-active');
        }, animationDelay + 450);
      },
    },
  });
};

const setSpeedForProgress = (slider) => {
  circleWrapper = slider.closest('[data-slider-container]').querySelector('.slider-progress');
  circle = slider.closest('[data-slider-container]').querySelector('[data-name="progress"]');

  circle.style.animationDuration = `${animationSpeed}ms`;
};

const initMainBannerSlider = () => {
  if (!sliderMainBannerBlock) {
    return;
  }

  animationDelay = parseInt(sliderMainBannerBlock.dataset.delay, 10);
  animationSpeed = parseInt(sliderMainBannerBlock.dataset.speed, 10);

  initSlider(sliderMainBannerBlock);
  setSpeedForProgress(sliderMainBannerBlock);
};

export { initMainBannerSlider };
