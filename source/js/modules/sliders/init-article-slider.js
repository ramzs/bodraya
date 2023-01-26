const popularArticleSliders = document.querySelector('[data-article-slider]');

let prevButton;
let nextButton;
let animationDelay;
let animationSpeed;

const enableSwiper = (slider) => {
  prevButton = slider.closest('[data-slider-container="article-slider-container"]').querySelector('[data-btn-prev]');
  nextButton = slider.closest('[data-slider-container="article-slider-container"]').querySelector('[data-btn-next]');

  let mySwiper = new Swiper (slider, {
    loop: false,
    speed: 600,
    allowTouchMove: true,
    watchOverflow: true,
    spaceBetween: 0,
    slideActiveClass: 'is-active',
    watchSlidesProgress: true,
    slidesPerGroup: 1,
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
        slidesPerView: 4,
      }
    },
  });
};

const initArticleSliders = () => {
  if (popularArticleSliders) {
    animationDelay = parseInt(popularArticleSliders.dataset.delay, 10);
    animationSpeed = parseInt(popularArticleSliders.dataset.speed, 10);

    enableSwiper(popularArticleSliders);
  }
};

export {initArticleSliders};
