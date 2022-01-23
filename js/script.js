$(function () {
    $('.lazy').lazy();
});

//todo Header Starts 
const burger = document.querySelector(`.header__burger`);
burger.addEventListener("click", () => {
    let burgers = document.querySelectorAll('.header__burger, .header__menu, .main');
    document.querySelector(`body`).classList.toggle(`lock`);
    burgers.forEach(item => item.classList.toggle('active'));
});
document.querySelectorAll('.header__item_dropdown').forEach(item => item.addEventListener(`click`, () => {
    item.classList.toggle(`more`);
}));

let lastScrollTop = 0;
const headerMenuHeight = document.querySelector(`.header__upper-box`).offsetHeight;
window.addEventListener("scroll", function () {
    let ScrollPosition = window.scrollY || document.documentElement.scrollTop;

    let ScrollDirection = ScrollPosition < lastScrollTop ? `up` : `down`;
    if (window.scrollY >= 80) {
        document.querySelectorAll(`.header, .header__menu`).forEach(item => item.classList.add(`white`));
        document.querySelector(`.header`).style.top = `-80px`;
    } else {
        document.querySelectorAll(`.header, .header__menu`).forEach(item => item.classList.remove(`white`));
    }
    if (window.scrollY >= 80 && ScrollDirection === `up`) {
        document.querySelector(`.header`).style.top = `0`;
    }

    lastScrollTop = ScrollPosition <= 0 ? 0 : ScrollPosition; // For Mobile or negative scrolling 
});


//todo Header Ends


//todo Hover-Slider starts
const sidehovers = document.querySelectorAll(`.hover-link`);
const testbox = document.querySelector(`.hover-box`);

sidehovers.forEach(function (item) {
    item.onmouseover = () => {
        sidehovers.forEach(item => item.classList.add(`off`));
        item.classList.remove(`off`);
    }
});

testbox.onmouseout = () => {
    sidehovers.forEach(item => item.classList.remove(`off`));
}

if (window.innerWidth < 1024) {
    document.querySelector(`.switch-container`).classList.replace(`hover-box`, `slider-box`);
    document.querySelectorAll(`.switch-item`).forEach(item => item.classList.replace(`hover-link`, `slider-link`));
}
if (window.innerWidth > 1024) {
    document.querySelector(`.switch-container`).classList.replace(`slider-box`, `hover-box`);
    document.querySelectorAll(`.switch-item`).forEach(item => item.classList.replace(`slider-link`, `hover-link`));
}

let actualDocWidth;
window.onresize = () => {
    actualDocWidth = window.innerWidth;
    if (actualDocWidth < 1024) {
        document.querySelector(`.switch-container`).classList.replace(`hover-box`, `slider-box`);
        document.querySelectorAll(`.switch-item`).forEach(item => item.classList.replace(`hover-link`, `slider-link`));
    }
    if (actualDocWidth > 1024) {
        document.querySelector(`.switch-container`).classList.replace(`slider-box`, `hover-box`);
        document.querySelectorAll(`.switch-item`).forEach(item => item.classList.replace(`slider-link`, `hover-link`));
    }
}
//todo Hover-Slider ends


//todo Go-Top Button starts
var btn = $('.go-top-button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});

//todo Go-Top Button ends

//todo See More menu starts 
jQuery(function ($) {
    $('body').on('click', '.airlines__more', function () {
        $(this).addClass(`airlines__less`).removeClass(`airlines__more`);
        $(this).html('Приховати контакти <span class="icon-arrl"></span>').siblings('.airline').addClass('more');
    });
    $('body').on('click', '.airlines__less', function () {
        $(this).removeClass(`airlines__less`).addClass(`airlines__more`);
        $(this).html('Показати контакти <span class="icon-arrr"></span>').siblings('.airline').removeClass('more');
    });

});

//todo See More menu ends



//todo Sliders starts 
$('.slider-box').slick({
    arrows: false,
    dots: true,
    draggable: true,
    respondTo: 'window',
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    infinite: true,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    swipe: true,
    touchThreshold: 5,
    touchMove: true,
    waitForAnimate: true,
    touchMove: true,
    focusOnSelect: true,
});




$('.header-slider').slick({
    arrows: true,
    dots: true,
    draggable: false,
    respondTo: 'window',
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    infinite: true,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: false,
    swipe: true,
    touchThreshold: 5,
    touchMove: true,
    waitForAnimate: true,
    fade: true,
    touchMove: true,
    focusOnSelect: true,
    appendDots: $(".header-slider__dots"),
    appendArrows: $(".header-slider__arrows")
});

//todo Sliders ends


//todo Screen Width 
let ScreenResolutionChecker = document.createElement(`span`);
ScreenResolutionChecker.style.cssText = `
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 100500;
    background: lightcoral;
    padding: 5px;
    border-radius: 5px;
    font-family: Arial;
`;

ScreenResolutionChecker.innerHTML = `width = ${window.innerWidth}px, height = ${window.innerHeight}px`;
document.querySelector(`body`).append(ScreenResolutionChecker)
window.addEventListener(`resize`, () => {
    ScreenResolutionChecker.innerHTML = `width = ${window.innerWidth}px, height = ${window.innerHeight}px`;
})
//todo Screen Width


