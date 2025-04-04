const swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    spaceBetween: 16,
    navigation: {
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        640: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1280: {
            slidesPerView: 5,
        },
    },
    grabCursor: true,
    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45
})