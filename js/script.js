const headerBtn = document.querySelector('.header__btn');
const headBtnSun = document.querySelector(".header__btn-sun");
const headBtnMoon = document.querySelector(".header__btn-moon");
const headBtnLink = document.querySelector(".header__button");

headerBtn.addEventListener("click", () => {
    document.body.classList.toggle('dark-theme');
    headBtnSun.classList.toggle('sun')
    headBtnMoon.classList.toggle('moon')
    // heroTitle.classList.toggle('dark')
});
headBtnLink.addEventListener("click", () =>{
    
})
// headBtnLink.addEventListener("click", () => {
//     document.body.classList.toggle('.linking')
//     headerBtnLinkedBlock.classList.toggle('block')

// })
// $(function() {
//     let header = $('.header');
     
//     $(window).scroll(function() {
//       if($(this).scrollTop() > 1) {
//        header.addClass('header_fixed');
//       } else {
//        header.removeClass('header_fixed');
//       }
//     });
//    });

