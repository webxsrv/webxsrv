/* =========================================================
   START: REQUEST FORM JS
========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  const requestForm = document.querySelector('.request-form');
  const requestSuccess = document.querySelector('.request-success');
  if (!requestForm || !requestSuccess) {
    return;
  }
  requestForm.addEventListener('submit', (event) => {
    event.preventDefault();
    requestForm.classList.add('is-hidden');
    requestSuccess.classList.add('is-active');
    requestSuccess.setAttribute('aria-hidden', 'false');
    requestForm.reset();
  });
});
/* =========================================================
   END: REQUEST FORM JS
========================================================= */
/* =========================================================
   START: REVIEWS SLIDER JS
========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  const reviews = [
    {
      text: 'Очень стильная композиция . Мама расплакалась от счастья!',
      author: 'Анастасия'
    },
    {
      text: 'Букет получился нежным, свежим и очень аккуратным. Доставили точно вовремя.',
      author: 'Мария'
    },
    {
      text: 'Заказывала композицию на день рождения. Всё выглядело дороже.',
      author: 'Екатерина'
    },
    {
      text: 'Цветы простояли долго, упаковка красивая, сервис спокойный и без суеты.',
      author: 'Ольга'
    }
  ];
  const textElement = document.querySelector('.reviews__text');
  const authorElement = document.querySelector('.reviews__author');
  const reviewsCard = document.querySelector('.reviews__card');
  const prevButton = document.querySelector('.reviews__arrow--left');
  const nextButton = document.querySelector('.reviews__arrow--right');
  if (!textElement || !authorElement || !reviewsCard) {
    return;
  }
  let currentReviewIndex = 0;
  let swipeStartX = 0;
  let swipeStartY = 0;
  let swipePointerId = null;
  let swipeIsActive = false;
  function renderReview() {
    textElement.textContent = reviews[currentReviewIndex].text;
    authorElement.textContent = reviews[currentReviewIndex].author;
  }
  function showPrevReview() {
    currentReviewIndex = currentReviewIndex === 0
      ? reviews.length - 1
      : currentReviewIndex - 1;
    renderReview();
  }
  function showNextReview() {
    currentReviewIndex = currentReviewIndex === reviews.length - 1
      ? 0
      : currentReviewIndex + 1;
    renderReview();
  }
  function handleSwipe(endX, endY) {
    const deltaX = swipeStartX - endX;
    const deltaY = swipeStartY - endY;
    if (Math.abs(deltaX) < 45 || Math.abs(deltaX) <= Math.abs(deltaY)) {
      return;
    }
    if (deltaX > 0) {
      showNextReview();
      return;
    }
    showPrevReview();
  }
  if (prevButton) {
    prevButton.addEventListener('click', showPrevReview);
  }
  if (nextButton) {
    nextButton.addEventListener('click', showNextReview);
  }
  reviewsCard.addEventListener('pointerdown', (event) => {
    swipeStartX = event.clientX;
    swipeStartY = event.clientY;
    swipePointerId = event.pointerId;
    swipeIsActive = true;
    if (typeof reviewsCard.setPointerCapture === 'function') {
      reviewsCard.setPointerCapture(event.pointerId);
    }
  });
  reviewsCard.addEventListener('pointerup', (event) => {
    if (!swipeIsActive || event.pointerId !== swipePointerId) {
      return;
    }
    swipeIsActive = false;
    handleSwipe(event.clientX, event.clientY);
  });
  reviewsCard.addEventListener('pointercancel', () => {
    swipeIsActive = false;
  });
  if (!window.PointerEvent) {
    reviewsCard.addEventListener('touchstart', (event) => {
      swipeStartX = event.touches[0].clientX;
      swipeStartY = event.touches[0].clientY;
    }, { passive: true });
    reviewsCard.addEventListener('touchend', (event) => {
      handleSwipe(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
    }, { passive: true });
  }
  renderReview();
});
/* =========================================================
   END: REVIEWS SLIDER JS
========================================================= */
/* =========================================================
   START: PRODUCTS TOOLTIP JS
========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  const productMoreButtons = document.querySelectorAll('.product-card__more');
  const productsTooltip = document.querySelector('.products-tooltip');
  const productsTooltipText = document.querySelector('.products-tooltip__text');
  const productsTooltipClose = document.querySelector('.products-tooltip__close');
  if (
    !productMoreButtons.length ||
    !productsTooltip ||
    !productsTooltipText ||
    !productsTooltipClose
  ) {
    return;
  }
  productMoreButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const tooltipText = button.dataset.tooltipText;
      productsTooltipText.textContent = tooltipText;
      productsTooltip.classList.add('is-active');
      productsTooltip.setAttribute('aria-hidden', 'false');
    });
  });
  productsTooltipClose.addEventListener('click', () => {
    productsTooltip.classList.remove('is-active');
    productsTooltip.setAttribute('aria-hidden', 'true');
  });
});
/* =========================================================
   END: PRODUCTS TOOLTIP JS
========================================================= */
/* =========================================================
   START: MOBILE MENU JS
========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  const siteHeaderNav = document.querySelector('.site-header__nav');
  const siteHeaderMenuLinks = document.querySelectorAll('.site-header__menu-link');
  if (!siteHeaderNav) {
    return;
  }
  siteHeaderNav.addEventListener('click', (event) => {
    if (window.innerWidth > 767) {
      return;
    }
    event.stopPropagation();
    siteHeaderNav.classList.toggle('is-open');
  });
  siteHeaderMenuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      siteHeaderNav.classList.remove('is-open');
    });
  });
});
/* =========================================================
   END: MOBILE MENU JS
========================================================= */
