const sliderDocumentsNav = document.querySelector('[data-documents-nav-slider]');
const mediaPoint = window.matchMedia('(min-width: 744px)');

const enableSlider = (slider) => {
  const scrollbarEl = slider.closest('[data-documents-nav-container]').querySelector('[data-scrollbar]');
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

const initDocumentsNavSlider = () => {
  if (!sliderDocumentsNav) {
    return;
  }

  enableSlider(sliderDocumentsNav);
};

export {initDocumentsNavSlider};
