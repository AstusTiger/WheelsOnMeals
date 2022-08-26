// Pavlo Radchenko
const slider = document.querySelector('.slider');

const slides = slider.querySelectorAll('.slide');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

/* Set Current Slide */
let currSlide = 0;

/* define max length */
const maxSlide = slides.length;

/* Function to go to slide based on index number provided as argument  */

const goToSlide = function (slide = 1) {
  slides.forEach((s, i) => {
    s.style.transform = `translatex(${100 * (0 - slide)}%)`;
  });
};

const nextSlide = function () {
  if (currSlide === maxSlide - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }

  goToSlide(currSlide);
};

const prevSlide = function () {
  if (currSlide === 0) {
    currSlide = maxSlide - 1;
  } else {
    currSlide--;
  }
  goToSlide(currSlide);
};

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

goToSlide(2);

const init = function () {
  goToSlide(0);
};

init();
