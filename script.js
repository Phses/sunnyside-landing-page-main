'use strict'

const btnOpenOrCloseMenu = document.querySelector('.hamburguer-menu');
const menu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.overlay');
const eggImage = document.querySelector('.egg-yellow');
const bowlImage = document.querySelector('.bowl');
const milkImage = document.querySelector('.milk-bottles'); 
const orangeImage = document.querySelector('.orange'); 
const coneImage = document.querySelector('.cone'); 
const sugarImage = document.querySelector('.sugar-cubes');

let windowSizeWidth = window.innerWidth;

function initialWidthSize() {
  getWindowWidth()
  if (windowSizeWidth <= 768) {
    changeImagesMobile();
  }
}

initialWidthSize();

function changeImagesMobile () {
  eggImage.src="/images/mobile/image-transform.jpg" ;
  bowlImage.src="/images/mobile/image-stand-out.jpg" ;
  milkImage.src="/images/mobile/image-gallery-milkbottles.jpg" ;
  orangeImage.src="/images/mobile/image-gallery-orange.jpg" ;
  coneImage.src="/images/mobile/image-gallery-cone.jpg" ;
  sugarImage.src="/images/mobile/image-gallery-sugar-cubes.jpg" ;
}

function changeImagesDesktop () {
  eggImage.src="/images/desktop/image-transform.jpg" ;
  bowlImage.src="/images/desktop/image-stand-out.jpg" ;
  milkImage.src="/images/desktop/image-gallery-milkbottles.jpg" ;
  orangeImage.src="/images/desktop/image-gallery-orange.jpg" ;
  coneImage.src="/images/desktop/image-gallery-cone.jpg" ;
  sugarImage.src="/images/desktop/image-gallery-sugarcubes.jpg" ;
}

function getWindowWidth() {
  windowSizeWidth = window.innerWidth;
}

const showMenu = function () {
  menu.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

const closeMenu = function () {
  menu.classList.add('hidden');
  overlay.classList.add('hidden');
}

btnOpenOrCloseMenu.addEventListener('click', function() {
  if (menu.classList.contains('hidden')){
    showMenu();
  }else {
    closeMenu();
  }
});

document.addEventListener('keydown', function(e) {
  if (e = 'escape' && !menu.classList.contains('hidden')) {
    closeMenu();
  } 
})

overlay.addEventListener('click', function(){
  if(!menu.classList.contains('hidden')) {
    closeMenu();
  }
})

window.addEventListener('resize', function(){
  getWindowWidth();
  if (windowSizeWidth <= 768) {
    changeImagesMobile();
  } else {
    changeImagesDesktop();
  }
})