document.addEventListener("DOMContentLoaded", function() {

    var swiperSlideGeneral = new Swiper(".swiper-container-avis", {
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 4000,
        },
        preloadImages: true,
        slidesPerView: 5,
        spaceBetween: 16,
        pagination: {
            el: '.avis-pagination',
        },
        breakpoints: {
            1300: {
                slidesPerView: 5,
                draggable: true,
            },
            1100: {
                slidesPerView: 4,
                draggable: true,
            },
            720: {
                slidesPerView: 3,
                draggable: true,
            },
            400: {
                slidesPerView: 2,
                draggable: true,
            },
            100: {
                slidesPerView: 1.1,
                draggable: true,
            },
        }
    });

});