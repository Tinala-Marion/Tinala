document.addEventListener("DOMContentLoaded", function() {

    var swiperSlideGeneral = new Swiper(".swiper-container-avis", {
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 4000,
        },
        preloadImages: true,
        slidesPerView: 4,
        spaceBetween: 16,
        pagination: {
            el: '.avis-pagination',
        },
        breakpoints: {
            2000: {
                slidesPerView: 5,
                draggable: true,
            },
            1500: {
                slidesPerView: 4,
                draggable: true,
            },
            1024: {
                slidesPerView: 3,
                draggable: true,
            },
            768: {
                slidesPerView: 2,
                draggable: true,
            },
            500: {
                slidesPerView: 1.4,
                draggable: true,
            },
        }
    });

});