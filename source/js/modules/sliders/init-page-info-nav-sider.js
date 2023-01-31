const sliderDocumentsNav = document.querySelector('[data-page-info-nav-slider]');
const mediaPoint = window.matchMedia('(min-width: 1024px)');

const enableSlider = (slider) => {
  const scrollbarEl = slider.closest('[data-page-info-nav-container]').querySelector('[data-scrollbar]');
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

const initPageInfoNavSlider = () => {
  if (!sliderDocumentsNav) {
    return;
  }

  enableSlider(sliderDocumentsNav);
};

export {initPageInfoNavSlider};
