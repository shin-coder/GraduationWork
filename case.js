const linkButtons = document.querySelectorAll('.select-button');
const Case = document.getElementById('caseImage');

fetch('product-images.json')
  .then(response => response.json())
  .then(data => {
    const caseImages = data.categories.find(category => category.name === 'case').images;

    function changeImage(fileName) {
      Case.src = `./image/product_sub/case/${fileName}`;
    }

    linkButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        changeImage(caseImages[index]);
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