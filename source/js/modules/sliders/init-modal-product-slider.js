const sliderModalProductBlock = document.querySelector('[data-modal-product-slider]');

let mySwiper;
let mySwiperPagination;
let pagination;
let prevButton;
let nextButton;

const initSlider = (slider) => {
  prevButton = slider.closest('[data-slider-container]').querySelector('[data-btn-prev]');
  nextButton = slider.closest('[data-slider-container]').querySelector('[data-btn-next]');
  pagination = slider.closest('[data-slider-container]').querySelector('[data-modal-product-pagination]');

  mySwiperPagination = new Swiper(pagination, {
    spaceBetween: 0,
    allowTouchMove: false,
    watchOverflow: true,
    speed: 1000,
    watchSlidesProgress: true,
    slidesPerView: 4,
    loop: true,
    slideActiveClass: 'is-active',
    watchSlidesProgress: true,
  });

  mySwiper = new Swiper (slider, {
    allowTouchMove: true,
    watchOverflow: true,
    speed: 1000,
    watchSlidesProgress: true,
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    slideActiveClass: 'is-active',
    parallax: true,
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },
    thumbs: {
      swiper: mySwiperPagination,
      slideThumbActiveClass: 'is-active',
    },
  });
};

const initModalProductSlider = () => {
  if (!sliderModalProductBlock) {
    return;
  }

  initSlider(sliderModalProductBlock);
};

export { initModalProductSlider };
