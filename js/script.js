"use strict";

function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
;
var menu = document.querySelector('.menu__body');
var menuIcon = document.querySelector('.menu__icon');
menuIcon.addEventListener('click', function () {
  menuIcon.classList.toggle('active');
  menu.classList.toggle('active');

  if (menu.classList.contains('active')) {
    document.querySelector('body').classList.add('lock');
  } else {
    document.querySelector('body').classList.remove('lock');
  }
});
var heroSlider = new Swiper('.slider__body', {
  spaceBetween: 30,
  effect: 'fade',
  centeredSlides: true,
  autoplay: {
    delay: 5000
  }
});
var quoteSlider = new Swiper('.quote__slider', {
  spaceBetween: 30,
  autoHeight: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  }
});
var lightbox = GLightbox({
  touchNavigation: true,
  loop: true,
  autoplayVideos: true
});