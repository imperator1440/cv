let position = 0;
let slidesToShow = 3;
const slidesToScrol = 1;
const slider = document.querySelector('.slider');
const container = document.querySelector('.slider__container');
const track = document.querySelector('.slider__track');
const items = document.querySelectorAll('.slider__item');
const btnLeft = document.querySelector('.button-left');
const btnRight = document.querySelector('.button-right');
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = 205;

items.forEach(item => {
  item.style.minWidth = `${itemWidth}px`;
});

btnRight.addEventListener('click', () => {

  slidesToShow = checkSlides();
  const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

  position -= itemsLeft >= slidesToScrol ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
});

btnLeft.addEventListener('click', () => {
  
  
  const itemsLeft = Math.abs(position) / itemWidth;

  position += itemsLeft >= slidesToScrol ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
});

const checkSlides = () => {
  switch (slider.offsetWidth) {
    case 615: return 3;
    case 410: return 0;
    case 205: return -8;
    default: return 3;
  }
};

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
  btnLeft.disabled = position === 0;
  btnRight.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtns();