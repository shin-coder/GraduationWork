const linkButtons = document.querySelectorAll('.select-button');
const cover = document.getElementById('coverImage');

fetch('product-images.json')
  .then(response => response.json())
  .then(data => {
    const coverImages = data.categories.find(category => category.name === 'cover').images;

    function changeImage(fileName) {
      cover.src = `./image/product_sub/cover/${fileName}`;
    }

    linkButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        changeImage(coverImages[index]);
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