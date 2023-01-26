const sliderMainMap = document.querySelector('[data-main-map-slider]');
const mediaPoint = window.matchMedia('(min-width: 1023px)');

const enableSlider = (slider) => {
  const scrollbarEl = slider.closest('[data-slider-container]').querySelector('[data-scrollbar]');
  let mySwiper;

  const breakpointChecker = () => {
    if (mediaPoint.matches) {
      mySwiper && mySwiper.destroy();
    } else {
      console.log('>> init');

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

const initMainMap = () => {
  if (!sliderMainMap) {
    return;
  }

  enableSlider(sliderMainMap);
};

export { initMainMap };
