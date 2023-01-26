const sliderServiceNav = document.querySelector('[data-service-nav-slider]');
const mediaPoint = window.matchMedia('(min-width: 1024px)');

const enableSlider = (slider) => {
  const scrollbarEl = slider.closest('[data-service-nav-container]').querySelector('[data-scrollbar]');
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

const initServiceNavSlider = () => {
  if (!sliderServiceNav) {
    return;
  }

  enableSlider(sliderServiceNav);
};

export { initServiceNavSlider };
