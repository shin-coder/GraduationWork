// Swiper実装

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
  slidesPerView: 2,
  spaceBetween: 16,
  centeredSlides: true,
  grabCursor: true,
  loop: true,pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//アコーディオンメニュー

const accordionItem = document.getElementsByClassName('accordion__item');
const accordionBtn = document.getElementsByClassName('accordion__head');

for(let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener('click', () => {
    accordionItem[i].classList.toggle('active');
  });
}

//パララックス

const parallaxItems = gsap.utils.toArray('.js-parallax')
parallaxItems.forEach((item) => {
  gsap.fromTo(
    item.querySelector('img'),
    {
      yPercent: 0,
    }, 
    {
      yPercent: -10,
      ease: 'none',
      scrollTrigger: {
        trigger: item,
        start: 'top center',
        end: 'center top',
        scrub: 1,
        markers: true,
      },
    }
  );
});