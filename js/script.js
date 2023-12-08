const headerBtn = document.querySelector('.header__btn');
const headBtnSun = document.querySelector(".header__btn-sun");
const headBtnMoon = document.querySelector(".header__btn-moon");
const headBtnLink = document.querySelector(".header__button")

headerBtn.addEventListener("click", () => {
    document.body.classList.toggle('dark-theme');
    headBtnSun.classList.toggle('sun')
    headBtnMoon.classList.toggle('moon')
    // heroTitle.classList.toggle('dark')
});