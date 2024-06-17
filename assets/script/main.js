const swiper = new Swiper(".swiper", {
    initialSlide: 1,
    centeredSlides: true,
    slidesPerView: 1.2,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
            slidesPerGroup: 3,
        }
    }
});