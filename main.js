const slider1 = new Swiper(".slider1", {
  loop: true, 
  parallax: true,
  allowTouchMove: false, 
  speed: 1500, 
  autoplay: { 
    delay: 2000,
    disableOnInteraction: false,
  },
});

const slider2 = new Swiper('.slider2', {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' +
        '<span class="slider-fraction-separator">/</span>' +
        '<span class="' + totalClass + '"></span>';
    },
    formatFractionCurrent: function (number) {
      if (number === 1){
        return 4;
      } else {
        return number - 1;
      }
    },
    formatFractionTotal: function (number) {
      return 4;
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 'auto',
  spaceBetween: 24,
  centeredSlides: true,
  initialSlide: 1, 
  grabCursor: true,
  loop: true,
});