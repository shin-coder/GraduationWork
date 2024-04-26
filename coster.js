const linkButtons = document.querySelectorAll('.select-button');
const coster = document.getElementById('costerImage');

fetch('product-images.json')
  .then(response => response.json())
  .then(data => {
    const costerImages = data.categories.find(category => category.name === 'coster').images;

    function changeImage(fileName) {
      coster.src = `./image/product_sub/coster/${fileName}`;
    }

    linkButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        changeImage(costerImages[index]);
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