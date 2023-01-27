const sliderCatalogsNav = document.querySelector('[data-catalog-nav-slider]');
const mediaPoint = window.matchMedia('(min-width: 744px)');

const enableSlider = (slider) => {
  const scrollbarEl = slider.closest('[data-catalog-nav-container]').querySelector('[data-scrollbar]');
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

const initCatalogNavSlider = () => {
  if (!sliderCatalogsNav) {
    return;
  }

  enableSlider(sliderCatalogsNav);
};

export {initCatalogNavSlider};
