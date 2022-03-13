const swiper = new Swiper('.swiper', {
    // Default parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        690: {
            slidesPerView: 2,
            spaceBetween: 60
        },
        // when window width is >= 480px
    }
})