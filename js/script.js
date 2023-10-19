'use strict'
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



const menuHAmburger=document.querySelector('.menu-hamburger')
const hamburgBtn=document.querySelector('.menu2')
hamburgBtn.addEventListener('click',()=>{
    menuHAmburger.classList.toggle('active-menu')

})