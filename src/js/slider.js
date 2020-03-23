// Данный блок посвящен слайдеру, сделанного на основе swiper.js

var mySwiper = new Swiper ('.slider-container', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  setWrapperSize: true,
  autoHeight: true,
  speed: 350,
  slideClass: 'slider__item',
  wrapperClass:'slider',

  pagination: {
    el: '.slider__pagination',
    clickable: true,
    bulletClass:'pagination__bullet',
    bulletActiveClass: 'pagination__bullet--active',
  },

  navigation: {
    nextEl: '.slider__btn--right',
    prevEl: '.slider__btn--left',
  },

  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    1023: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    9000: {
      slidesPerView: 3,
      spaceBetween: 30,
    },


  },

  a11y: {
    prevSlideMessage: 'Предыдущий сайт',
    nextSlideMessage: 'Следующий сайт',
    paginationBulletMessage: 'Сайт {{index}}',
  },
  
});