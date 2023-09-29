document.addEventListener("DOMContentLoaded", function() {

    var swiperSlideGeneral = new Swiper(".swiper-container-avis", {
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 4000,
        },
        preloadImages: true,
        slidesPerView: 3,
        spaceBetween: 16,
        draggable: true,
        pagination: {
            el: '.avis-pagination',
        },
        breakpoints: {
            2000: {
                slidesPerView: 5,
                centeredSlides: true,
            },
            1500: {
                slidesPerView: 4,
                centeredSlides: true,
            },
            1024: {
                slidesPerView: 3,
                centeredSlides: true,
            },
            768: {
                slidesPerView: 2,
                centeredSlides: true,
            },
            500: {
                slidesPerView: 1.4,
                centeredSlides: true,
            },
            0: {
                slidesPerView: 1.4,
                centeredSlides: true,
            },
        }
    });

});