const sliderStackProducts = document.querySelectorAll('[data-stack-products-slider]');
const mediaPoint = window.matchMedia('(min-width: 744px)');

const enableSlider = (slider) => {
  const scrollbarEl = slider.closest('[data-slider-container="slider-stack-products"]').querySelector('[data-scrollbar]');
  let mySwiper;

  const breakpointChecker = () => {
    if (mediaPoint.matches) {
      mySwiper && mySwiper.destroy();
    } else {
      mySwiper = new Swiper(slider, {
        allowTouchMove: true,
        watchOverflow: true,
        watchSlidesProgress: true,
        slidesPerView: 'auto',
        freeMode: true,
        resizeObserver: true,
        scrollbar: {
          el: scrollbarEl,
          draggable: true,
        },
      });
    }
  };

  breakpointChecker();
  mediaPoint.addListener(breakpointChecker);
};

const initStackProductsSlider = () => {
  if (!sliderStackProducts) {
    return;
  }

  sliderStackProducts.forEach(enableSlider);
};

export { initStackProductsSlider };
