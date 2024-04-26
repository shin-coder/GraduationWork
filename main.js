//ローディング画面

const fadeIn = (element, duration) => {
  return new Promise((resolve) => {
    element.style.opacity = '1';
    setTimeout(() => {
      resolve();
    }, duration * 2000);
  });
};

const fadeOut = (element, duration) => {
  return new Promise((resolve) => {
    element.style.opacity = '0';
    setTimeout(() => {
      resolve();
    }, duration * 1000);
  });
};

const slideOut = (element, duration) => {
  return new Promise((resolve) => {
    element.classList.add('slide-out');
    setTimeout(() => {
      resolve();
    }, duration * 1000);
  });
};

window.addEventListener('DOMContentLoaded', async () => {
  const text1 = document.querySelector('.loading__text1');
  const text2 = document.querySelector('.loading__text2');
  const background = document.querySelector('.loading__wrapper');
  const firstView = document.querySelector('.main-view');

  await fadeIn(text1, 1);
  await fadeOut(text1, 2);
  await fadeIn(text2, 1);
  await fadeOut(text2, 2);
  await slideOut(background, 0.5);

  firstView.style.opacity = '1';
});


//ハンバーガーメニュー

const hamburger = document.getElementById('js-hamburger-button');
const nav = document.getElementById('js-nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('active');
});

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
  // autoplay: { 
  //   delay: 2000,
  //   disableOnInteraction: false,
  // },
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
// const link = document.getElementsByTagName("a")[6];
const links = document.querySelectorAll('a.contact-form')
const area = document.querySelector('.js-area');

area.addEventListener('mousemove', function (e) {
  cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
  cursor.style.opacity = '0.8';
});

links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    cursor.classList.add('js-hover');
  }, false);

  link.addEventListener('mouseleave', () => {
    cursor.classList.remove('js-hover');
  }, false);
});

area.addEventListener('mouseout', (e) => {
  setTimeout(
    (e) => {
      cursor.style.opacity = '0';
    }, 100);
});

//Productページのクリックイベント

/*
const linkButtons = document.querySelectorAll('.select-button');
const ProductImages = document.getElementById('productImage');

const imageFiles = [
  'product_wickerBag_1.jpg',
  'product_wickerBag_2.jpg',
  'product_wickerBag_3.jpg',
  'product_wickerBag_4.jpg',
];

function changeImage(fileName) {
  ProductImages.src = `./image/product_sub/wicker/${fileName}`;
}

linkButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    changeImage(imageFiles[index]);
    setActive(button);
  })
});

function setActive(active) {
  linkButtons.forEach((button) => {
    button.classList.remove('show');
    active.classList.add('show');
  })
}
*/

/*
const linkButtons = document.querySelectorAll('.select-button');
const productImage = document.getElementById('wickerImage');

// JSONデータを読み込む
fetch('product-images.json')
  .then(response => response.json())
  .then(data => {
    data.categories.forEach(category => {
      const categoryName = category.name;
      const images = category.images

      function changeImage(fileName) {
        productImage.src = `./image/product_sub/${categoryName}/${fileName}`;
      };

      linkButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
          changeImage(images[index]);
          setActive(button);
        });
      });
    });

    function setActive(active) {
      linkButtons.forEach(button => {
        button.classList.remove('show');
      });
      active.classList.add('show');
    }
  })
  .catch(error => console.error('JSONデータの読み込みに失敗しました:', error));

  */