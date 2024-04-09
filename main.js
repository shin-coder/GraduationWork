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
  speed: 800, 
  autoplay: { 
    delay: 2000,
    disableOnInteraction: false,
  },
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
        // markers: true,
      },
    }
  );
});

//マウスストーカー

const cursor = document.getElementById('js-cursor'); 
const link = document.getElementsByTagName("a")[6];
const area = document.querySelector('.js-area');

area.addEventListener('mousemove', function (e) {
  cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
  cursor.style.opacity = '0.8';
});

link.addEventListener('mouseenter', () => {
  cursor.classList.add('js-hover');
}, false);
link.addEventListener('mouseleave', () => {
  cursor.classList.remove('js-hover');
}, false);

area.addEventListener('mouseout', (e) => {
  setTimeout(
    (e) => {
      cursor.style.opacity = '0';
    }, 100);
});


