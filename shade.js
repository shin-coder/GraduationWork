const linkButtons = document.querySelectorAll('.select-button');
const shade = document.getElementById('shadeImage');

fetch('product-images.json')
  .then(response => response.json())
  .then(data => {
    const shadeImages = data.categories.find(category => category.name === 'shade').images;

    function changeImage(fileName) {
      shade.src = `./image/product_sub/shade/${fileName}`;
    }

    linkButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        changeImage(shadeImages[index]);
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