var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName('mySlides');
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  x[slideIndex - 1].style.display = 'block';
}
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName('mySlides');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = 'block';
  setTimeout(carousel, 5000);
}

// var slide_left = document.getElementById('.slide-left'),
//   slide_right = document.getElementById('.slide-right'),
//   total_img = document.getElementsByTagName('img'),
//   idx = 0; // Индекс текущего слайда.

// slide_right.addEventListener('click', moveLeft);
// function moveLeft() {
//   slide_left.style.display = 'block';
//   total_img[idx].style.display = 'none'; // Скрываем текущий слайд
//   total_img[++idx].style.display = 'block'; // Инкрементируем индекс и показываем следующий слайд
//   if (idx === total_img.length - 1) {
//     // Убираем "правую" стрелку, если справа слайдов больше нет
//     slide_right.style.display = 'none';
//   }
// }

// //Аналогично, только для левой стрелки
// slide_left.addEventListener('click', moveRight);
// function moveRight() {
//   slide_right.style.display = 'block';
//   total_img[idx].style.display = 'none';
//   total_img[--idx].style.display = 'block';
//   if (idx === 0) {
//     slide_left.style.display = 'none';
//   }
// }

// document.addEventListener('DOMContentLoaded', function () {
//   // инициализация слайдера
//   var slider = new SimpleAdaptiveSlider('.hero__slider');

//   // назначим обработчик при нажатии на кнопку .btn-prev
//   document.querySelector('.slider__button--prev').onclick = function () {
//     // перейдём к предыдущему слайду
//     slider.prev();
//   };
//   // назначим обработчик при нажатии на кнопку .btn-next
//   document.querySelector('.slider__button--next').onclick = function () {
//     // перейдём к следующему слайду
//     slider.next();
//   };
// });
