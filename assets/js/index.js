const header = document.querySelector(".header");
const menuBar = document.querySelector(".menu-bar");
const closeBtn = document.querySelector(".close-btn");
const menu = document.querySelector(".header__right");

const closeMenu = (e) => {
    if (
        (menuBar.contains(e.target) || menu.contains(e.target)) &&
        !closeBtn.contains(e.target) &&
        window.innerWidth < 992
    ) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
};

header.addEventListener("click", closeMenu);
menuBar.addEventListener("click", closeMenu);
closeBtn.addEventListener("click", closeMenu);

const header_logo = document.querySelector(".header__logo img");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
        header_logo.src = "/assets/img/logo_trns.png";
    } else {
        header_logo.src = "/assets/img/logo_fit.png";
        header.classList.remove("scrolled");
    }
});

const productsSwiper1 = new Swiper(".products-swiper-1", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: { el: ".swiper-pagination", clickable: !0 },
    navigation: { nextEl: ".products_next", prevEl: ".products_prev" },
    breakpoints: {
        0: { slidesPerView: 1 },
        450: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
    },
});
productsSwiper1.init();

const productsSwiper2 = new Swiper(".products-swiper-2", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: { el: ".swiper-pagination", clickable: !0 },
    navigation: { nextEl: ".products_next", prevEl: ".products_prev" },
    breakpoints: {
        0: { slidesPerView: 1 },
        450: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
    },
});
productsSwiper2.init();

const productsSwiper3 = new Swiper(".products-swiper-3", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: { el: ".swiper-pagination", clickable: !0 },
    navigation: { nextEl: ".products_next", prevEl: ".products_prev" },
    breakpoints: {
        0: { slidesPerView: 1 },
        450: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
    },
});
productsSwiper3.init();

//! QUESTION BLOCK
function accordion() {
    var accordionGroups = document.querySelectorAll(".accrodion-grp");

    if (accordionGroups.length) {
        accordionGroups.forEach(function (group) {
            var accordionName = group.getAttribute("data-grp-name");
            group.classList.add(accordionName);

            var accordions = group.querySelectorAll(".accrodion");
            accordions.forEach(function (accordion) {
                var content = accordion.querySelector(".accrodion-content");

                if (!accordion.classList.contains("active")) {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }

                var title = accordion.querySelector(".accrodion-title");
                title.addEventListener("click", function () {
                    if (accordion.classList.contains("active")) {
                        accordion.classList.remove("active");
                        content.style.display = "none";
                    } else {
                        accordion.classList.add("active");
                        content.style.display = "block";
                    }
                });
            });
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    accordion();
});

// !&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// Swiper slayder
const partnorsSwiper = new Swiper("#partnors-slide", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: { delay: 2500, disableOnInteraction: false },
    breakpoints: {
        0: { slidesPerView: 1.5, navigation: false },
        450: { slidesPerView: 2.5, navigation: true },
        768: { slidesPerView: 3.5 },
        1024: { slidesPerView: 4.5 },
    },
});

// fixedIconWrapper
const openFixed = document.querySelector(".fixed__open-close-icon-wrapper");

const iconWrapper = document.querySelector(".fixed-icon-wrapper");

openFixed.addEventListener("click", () => {
    iconWrapper.classList.toggle("active");
});

// INITIALIZATION  SWIPER HEADER
const swiper = new Swiper(".swiper-header", {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
    speed: 500,

    /*autoplay: {
        delay: 3000, 
    },*/

    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },

    scrollbar: {
        el: ".swiper-scrollbar",
    },
});

// Modal start
const modal = document.querySelector(".modal");
const modalInner = document.querySelector(".modal .modal__inner");
const openModal = document.querySelectorAll(".open_modal");
const closeModalBtn = document.querySelector(".close_modal");

openModal.forEach((open_item) => {
    open_item.addEventListener("click", () => {
        modal.classList.remove("modal-deActive");
        modal.classList.add("modal-active");
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    });
});

modalInner.addEventListener("click", (e) => {
    e.stopPropagation();
});

const handleModalClose = () => {
    modal.classList.add("modal-deActive");
    modal.classList.remove("modal-active");

    setTimeout(() => {
        modal.style.display = "none";
        document.body.style.overflow = "visible";
    }, 150);
};

modal.addEventListener("click", handleModalClose);
closeModalBtn.addEventListener("click", handleModalClose);
// Modal end

Fancybox.bind("[data-fancybox]", {
    // Your custom options
});
