//* fixed Heder
const heder__iner = document.querySelector('#heder__iner')
const introH = document.querySelector('#intro')



window.addEventListener('scroll', checkScroll)

document.addEventListener('DOMContentloaded', checkScroll)

function checkScroll(event) {

    let scrollPos = window.scrollY

    if (scrollPos >= introH.scrollHeight ) {
        heder__iner.classList.add('fixed')
    } else {
        heder__iner.classList.remove('fixed')
    }

}

/*скролл к секции*/ 


let scrollSection = document.querySelectorAll('[data-scroll]');

if (scrollSection.length>0) {
    scrollSection.forEach (clicks=>{
        clicks.addEventListener("click", clickNavigaton )
    })
}


function clickNavigaton (e) {
    let clicks = e.target; 
    if( clicks.dataset.scroll && document.querySelector(clicks.dataset.scroll)) {
        let scrollBlock = document.querySelector(clicks.dataset.scroll)
        let scrollBlocValue = scrollBlock.getBoundingClientRect().top + scrollY;

        window.scrollTo ({
            top: scrollBlocValue,
            behavior: "smooth"
        });
        e.preventDefault()
    }
};

/*работу с бургер меню*/

let menu = document.querySelector(".header__menu");
let header = document.querySelector(".header");
let nav__none = document.querySelectorAll(".basic");
let nav__link__burger = document.querySelector('.nav__link__burger');
let menu__item = document.querySelector(".menu__item");
let heder__inner = document.querySelector(".heder__inner");
let change__lung = document.querySelector(".change__lung");

menu.addEventListener("click", menuBurger)
change__lung.addEventListener("click",ChangeLung)

function menuBurger (e) {
    document.body.classList.toggle('lock');
    menu__item.classList.toggle('active')
    header.classList.toggle('active');
    nav__link__burger.classList.toggle('active');
    heder__inner.classList.toggle('active');
    

    nav__none.forEach (nav => {
        nav.classList.toggle('active')
    })
}

