const initMenu = () => {
  const menuBtn = document.querySelector('[data-menu-btn]');
  const menuBtnClose = document.querySelector('[data-menu-btn-close]');
  const mainNav = document.querySelector('.main-nav');
  const wrapper = document.querySelector('.wrapper');

  if (!menuBtn && !mainNav) {
    return;
  }

  const openMenu = () => {
    wrapper.classList.add('is-menu-animated');
    wrapper.classList.add('is-menu-visible');

    window.scrollLock.disableScrolling();
  }

  const closeMenu = () => {
    wrapper.classList.add('is-menu-animated');
    wrapper.classList.remove('is-menu-visible');

    window.scrollLock.enableScrolling();
  };

  const onTransitionEnd = () => {
    wrapper.classList.remove('is-menu-animated');
  }

  mainNav.addEventListener("transitionend", onTransitionEnd, false);

  menuBtn.addEventListener('click', (evt) => {
    evt.preventDefault();

    wrapper.classList.contains('is-menu-visible') ? closeMenu() : openMenu();
  });

  menuBtnClose.addEventListener('click', (evt) => {
    evt.preventDefault();

    wrapper.classList.contains('is-menu-visible') && closeMenu()
  });

  document.addEventListener('click', (evt) => {
    if (evt.target.closest('[data-page-overlay]')) {
      if (wrapper.classList.contains('is-menu-visible')) {
        closeMenu();
      }
    }
  });
};

export {initMenu};
