import tippy from 'tippy.js';

const TERRITORY = [
  {
    id: 'RU-KRS',
    name: 'Курская область',
  },
  {
    id: 'RU-SMO',
    name: 'Смоленская область',
  },
  {
    id: 'RU-MOS',
    name: 'Московская область',
  },
  {
    id: 'RU-TUL',
    name: 'Тульская область',
  },
  {
    id: 'RU-LIP',
    name: 'Липецкая область',
  },
  {
    id: 'RU-TAM',
    name: 'Тамбовская область',
  },
  {
    id: 'RU-MO',
    name: 'Республика Мордовия',
  },
  {
    id: 'RU-RYA',
    name: 'Рязанская область',
  },
  {
    id: 'RU-ORL',
    name: 'Орловская область',
  },
  {
    id: 'RU-KOS',
    name: 'Костромская область',
  },
  {
    id: 'RU-IVA',
    name: 'Ивановская область',
  },
  {
    id: 'RU-VLA',
    name: 'Владимировская область',
  },
  {
    id: 'RU-BRY',
    name: 'Брянская область',
  },
  {
    id: 'RU-BEL',
    name: 'Белгородская область',
  },
  {
    id: 'RU-STA',
    name: 'Ставропольский край',
  },
  {
    id: 'RU-SAR',
    name: 'Саратовская область',
  },
  {
    id: 'RU-VGG',
    name: 'Волгоградская область',
  },
  {
    id: 'RU-ROS',
    name: 'Ростовская область',
  },
  {
    id: 'RU-KDA',
    name: 'Краснодарский край',
  },
  {
    id: 'RU-CR',
    name: 'Республика Крым',
  },
  {
    id: 'RU-KL',
    name: 'Республика  Калмыкия',
  },
  {
    id: 'RU-KLU',
    name: 'Калужская область',
  },
  {
    id: 'RU-VOR',
    name: 'Ставропольский край',
  },
  {
    id: 'RU-KC',
    name: 'Карачаевая-Черкесская республика',
  },
  {
    id: 'RU-SE',
    name: 'Республика Северная Осетия',
  },
  {
    id: 'RU-DA',
    name: 'Республика Дагестан',
  },
  {
    id: 'RU-KGD',
    name: 'Калининградская область',
  },
  {
    id: 'RU-TVE',
    name: 'Тверская область',
  },
  {
    id: 'RU-LEN',
    name: 'Ленинградская область',
  },
  {
    id: 'RU-SVE',
    name: 'Свердловская область',
  },
  {
    id: 'RU-KO',
    name: 'Республика Коми',
  },
  {
    id: 'RU-TOM',
    name: 'Томская область',
  },
  {
    id: 'RU-YAN',
    name: 'Ямало-Ненецкий АО',
  },
  {
    id: 'RU-KYA',
    name: 'Красноярский край',
  },
  {
    id: 'RU-KHA',
    name: 'Хабаровский край',
  },
];

const TOOLTIP = document.querySelector('.main-map__tooltip');

const setColor = (item) => {
  const ter = document.querySelector(`#${item.id}`);

  if (ter) {
    tippy(`#${item.id}`, {
      placement: 'auto',
      content: item.name,
      trigger: 'mouseenter focus',
      animation: 'scale',
      arrow: true,
  })
    ter.classList.add('is-active');
    ter.setAttribute('name', item.name);
  }

}

const initSectionMapPins = () => {
  TOOLTIP && TERRITORY.forEach(setColor);
}

export { initSectionMapPins };
