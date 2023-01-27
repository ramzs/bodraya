const sliderSubLinks = document.querySelector('[data-sub-links-slider]');

let mySwiper;
let prevButton;
let nextButton;

const enableSlider = (slider) => {
  prevButton = slider.closest('[data-slider-container]').querySelector('[data-btn-prev]');
  nextButton = slider.closest('[data-slider-container]').querySelector('[data-btn-next]');

  mySwiper = new Swiper(slider, {
    allowTouchMove: true,
    watchOverflow: true,
    watchSlidesProgress: true,
    slidesPerView: 'auto',
    freeMode: true,
    resizeObserver: true,
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },
  });
};

const initSubLinksSlider = () => {
  if (!sliderSubLinks) {
    return;
  }

  enableSlider(sliderSubLinks);
};

export { initSubLinksSlider };
