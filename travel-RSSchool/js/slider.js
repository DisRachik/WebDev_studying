const images = document.querySelectorAll('.destinations-block__foto');
const sliderLine = document.querySelector('.scrol');
const dots = document.querySelectorAll('.dot');
let count = 0;
let width;

function init() {
  width = document.querySelector('.destinations-block').offsetWidth;
  sliderLine.style.width = width * images.length + 'px';
  images.forEach((item) => {
    item.style.width = width * images.length + 'px';
    item.style.height = 'auto';
  });
}

const activeDot = (n) => {
  for (const dot of dots) {
    dot.classList.remove('dot-active');
  }
  dots[n].classList.add('dot-active');
};

window.addEventListener('resize', init);
init();

document
  .querySelector('.destinations-arrowr')
  .addEventListener('click', function () {
    count++;
    if (count >= images.length - 2) {
      count = 0;
    }
    activeDot(count);
    rollSlider();
  });

document
  .querySelector('.destinations-arrowl')
  .addEventListener('click', function () {
    count--;
    if (count < 0) {
      count = images.length - 3;
    }
    activeDot(count);
    rollSlider();
  });

function rollSlider() {
  sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}

dots.forEach((item, countDot) => {
  item.addEventListener('click', () => {
    count = countDot;
    activeDot(count);
    rollSlider();
  });
});
