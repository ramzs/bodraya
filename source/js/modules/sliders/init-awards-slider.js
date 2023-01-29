import noUiSlider from 'nouislider';

let dataRange;
let dataAwards;
let mySwiper;
const sliderRound = document.getElementById('awards-slider');
const slider = document.querySelector('[data-awards-slider]');
const dataAwardsEl = document.querySelector('[data-awards');

const initRound = () => {
  const min = Number(dataRange.min);
  const max = Number(dataRange.max);
  const items = dataAwards.filter(item => item.date >= min && item.date <= max)

  noUiSlider.create(sliderRound, {
    start: [dataRange?.active || dataRange.min, dataRange.max],
    connect: true,
    step: 1,
    range: {
        'min': [dataRange.min],
        'max': [dataRange.max]
    },
    pips: {
        mode: 'steps',
        density: 3,
    },
  })

  setTimeout(() => {
    if (mySwiper) {
      mySwiper.removeAllSlides()
      mySwiper.appendSlide(getSlides(items))
    }
  }, 500);

  sliderRound.noUiSlider.on('update', (values) => {
    const min = Number(values[0]);
    const max = Number(values[1]);
    const items = dataAwards.filter(item => item.date >= min && item.date <= max)


    if (mySwiper) {
      mySwiper.removeAllSlides()
      mySwiper.appendSlide(getSlides(items))
    }
  });
}

const getSlides = (items) => {
  return items.map(item => `<div class="swiper-slide section-awards__slide">
                              <div class="section-awards__image-wrapper">
                                <img src="${item.image}" />
                              </div>
                              <p class="section-awards__image-name">${item.name}</p>
                            </div>`);
}

const enableSwiper = (slider) => {
  mySwiper = new Swiper (slider, {
    loop: false,
    speed: 600,
    allowTouchMove: true,
    watchOverflow: true,
    spaceBetween: 0,
    slideActiveClass: 'is-active',
    watchSlidesProgress: true,
    slidesPerView: 2,
    breakpoints: {
      1023: {
        slidesPerView: 4,
      }
    },
    on: {
      afterInit: () => {
        initRound();
      },
    },
  });
};

const initAwardsSlider = () => {
  if (dataAwardsEl.hasAttribute('data-awards') && slider && sliderRound) {
    const url = dataAwardsEl.getAttribute('data-awards');

    fetch(url)
      .then((response) => response.json())
      .then(({ range, awardsItems }) => {
        dataRange = range;
        dataAwards = awardsItems;

        enableSwiper(slider);
      });
  }
}

export {initAwardsSlider};
