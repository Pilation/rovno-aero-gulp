//! Not necessary with Lazy 
// isWebp = () => {
//     // Проверка поддержки webp
//     function testWebP(callback) {
//         let webP = new Image();
//         webP.onload = webP.onerror = function () {
//             callback(webP.height == 2);
//         };
//         webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
//     }
//     // Добавление класса _webp или _no-webp для HTML
//     testWebP(function (support) {
//         let className = support === true ? 'webp' : 'no-webp';
//         document.documentElement.classList.add(className);
//     });
// }

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
// let ScreenResolutionChecker = document.createElement(`span`);
// ScreenResolutionChecker.style.cssText = `
//     position: fixed;
//     top: 10px;
//     right: 10px;
//     z-index: 100500;
//     background: lightcoral;
//     padding: 5px;
//     border-radius: 5px;
//     font-family: Arial;
// `;

// ScreenResolutionChecker.innerHTML = `width = ${window.innerWidth}px, height = ${window.innerHeight}px`;
// document.querySelector(`body`).append(ScreenResolutionChecker)
// window.addEventListener(`resize`, () => {
//     ScreenResolutionChecker.innerHTML = `width = ${window.innerWidth}px, height = ${window.innerHeight}px`;
// })
//todo Screen Width

//Todo Form validation 
if (document.querySelector(`#form-newsletter`) || document.querySelector(`#form-contacts`)) {
    const validate = () => {
        const email = document.querySelector(`#email`).value;
        const result = document.querySelector(`#result`);
        const sendButton = document.querySelector(`.form-button`);
        const modalText = document.querySelector(`#modal-text`);
        const modalAttributes = {
            "data-bs-target": "#ThankYouModal",
            "data-bs-toggle": "modal",
            "validated": "true"
        }
        const validateEmail = (email) => {
            return email.match(
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
        };

        const setModalAttributes = (el, attrs) => {
            for (let key in attrs) {
                el.setAttribute(key, attrs[key]);
            }
            // el.setAttribute("type", "submit")
        }
        const removeModalAttributes = (el, attrs) => {
            for (let key in attrs) {
                el.removeAttribute(key)
            }
            // el.setAttribute("type", "button")
        }
        if (validateEmail(email)) {
            result.classList.add(`visible`);
            sendButton.classList.add(`red-button`);
            result.innerHTML = `Адреса "` + email + '" корректна, дякуємо';
            setModalAttributes(sendButton, modalAttributes);
            if (document.querySelector(`#form-newsletter`)) {
                modalText.innerHTML = `Дякуємо за пiдписку на розсилку. Чекайте листiв на <strong>${email}</strong>`
            } else {
                modalText.innerHTML = `Дякуємо за звернення. Ми зв'яжемося з вами якомога швидше за адресою <strong>${email}</strong>`
            }

            document.querySelector(`button[validated]`).addEventListener(`click`, () => {
                setTimeout(() => {
                    result.classList.remove(`visible`);
                    removeModalAttributes(sendButton, modalAttributes);
                    result.innerHTML = ``;
                    sendButton.removeAttribute(`validated`)
                    document.querySelector(`#email`).value = ``;
                }, 1500)
            }
            )
        } else {
            sendButton.classList.remove(`red-button`);
            result.classList.add(`visible`);
            result.innerHTML = `Адреса "` + email + '" не корректна';
        }
    }
    document.querySelector(`#email`).addEventListener(`input`, validate);
};

