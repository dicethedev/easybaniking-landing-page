
// console.log('Hello World');
const btnHamburger = document.querySelector('#btnHamburgerMenu');
const body = document.querySelector('body');
//create a new const
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElement = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function(){
console.log('click hamburger-menu')


// if (btnHamburger.classList.contains('open'))
if (header.classList.contains('open')) {
     // Close hamburger menu
    body.classList.remove('noScroll');
    header.classList.remove('open');
    fadeElement.forEach(function(element){
      element.classList.remove('fade-in');
     element.classList.add('fade-out');
    });
    //  overlay.classList.remove('fade-in');
    //  overlay.classList.add('fade-out');
     // check _animations.scss that where fade-in and fade-out are declared
}
  else { //open hamburger menu
  body.classList.add('noScroll');
  header.classList.add('open');
  fadeElement.forEach(function(element){
     element.classList.remove('fade-out');
     element.classList.add('fade-in');
  })
  //  overlay.classList.remove('fade-out');
  //   overlay.classList.add('fade-in');
}
// btnHamburger.classList.add('open');
});
;


// if (header.classList.contains('open')) {
//     btnHamburger.classList.remove('open'); 
// }
// else {
// btnHamburger.classList.add('open');
// }

