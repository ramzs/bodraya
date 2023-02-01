import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {CustomSelect} from './modules/select/custom-select';
import lazySizes from 'lazysizes';
import initFieldNum from './modules/field-num/field-num';
import {initPopularBrandsSliders} from './modules/sliders/init-popular-brands-slider';
import {initMainBannerSlider} from './modules/sliders/init-main-banner-slider';
import {initMenu} from './modules/header/init-menu';
import {initAccordions} from './modules/accordion/init-accordion';
import {initTabs} from './modules/tabs/init-tabs';
import {AdaptiveRunner} from './modules/adaptive-runner';
import {gallery} from './modules/gallery/gallery.js';
import {initStackProductsSlider} from './modules/sliders/init-stack-products-slider';
import {initSubLinksSlider} from './modules/sliders/init-sub-links-slider';
import {initServiceNavSlider} from './modules/sliders/init-service-nav-slider';
import {initVideo} from './modules/video/init-video';
import {initDocumentsNavSlider} from './modules/sliders/init-documents-nav-slider';
import {initArticleSliders} from './modules/sliders/init-article-slider';
import {initSectionMapPins} from './modules/section-map-pins';
import {initMainMap} from './modules/sliders/init-main-map-slider';
import {initBestsellersSliders} from './modules/sliders/init-bestsellers-slider';
import {initPageInfoNavSlider} from './modules/sliders/init-page-info-nav-sider';
import {initCatalogNavSlider} from './modules/sliders/init-catalog-nav-slider';
import {initAwardsSlider} from './modules/sliders/init-awards-slider';
import {initModalProductSlider} from './modules/sliders/init-modal-product-slider';
import {paralax} from "./modules/paralax.js";
// ---------------------------------

// lazyload
lazySizes.cfg.lazyClass = 'js-lazy';
lazySizes.cfg.preloadAfterLoad = true;
window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------
  initPopularBrandsSliders();


  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    initFieldNum();
    const select = new CustomSelect();
    select.init();
    const form = new Form();
    window.form = form;
    form.init();
    initMenu();
    initAccordions();
    initTabs();
    initMainBannerSlider();
    initStackProductsSlider();
    initSubLinksSlider();
    initServiceNavSlider();
    gallery();
    initVideo();
    initDocumentsNavSlider();
    initArticleSliders();
    initPageInfoNavSlider();
    initMainMap();
    initBestsellersSliders();
    initSectionMapPins();
    initCatalogNavSlider();
    initAwardsSlider();
    initModalProductSlider();
    paralax();

    const adaptiveRunner = new AdaptiveRunner();
    adaptiveRunner.init();

    // Main page map regions list
    const regionsHandleClick = (e) => {
      const mapRegionsBtn = document.querySelector('[data-regions-btn]');
      if (mapRegionsBtn) {
        const mapRegions = document.querySelector('[data-regions]');

        if (mapRegionsBtn || e.target !== mapRegionsBtn && !e.target.closest('[data-regions-btn]')) {
          mapRegions.classList.remove('is-open');
        } else {
          mapRegions.classList.toggle('is-open');
        }
      }
    };

    window.addEventListener('click', regionsHandleClick);

  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
