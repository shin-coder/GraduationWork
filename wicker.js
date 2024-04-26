const linkButtons = document.querySelectorAll('.select-button');
const wicker = document.getElementById('wickerImage');

fetch('product-images.json')
  .then(response => response.json())
  .then(data => {
    const wickerImages = data.categories.find(category => category.name === 'wicker').images;

    function changeImage(fileName) {
      wicker.src = `./image/product_sub/wicker/${fileName}`;
    }

    linkButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        changeImage(wickerImages[index]);
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