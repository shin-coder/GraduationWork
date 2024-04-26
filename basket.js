const linkButtons = document.querySelectorAll('.select-button');
const basket = document.getElementById('basketImage');

fetch('product-images.json')
  .then(response => response.json())
  .then(data => {
    const basketImages = data.categories.find(category => category.name === 'basket').images;

    function changeImage(fileName) {
      basket.src = `./image/product_sub/basket/${fileName}`;
    }

    linkButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        changeImage(basketImages[index]);
        setActive(button);
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