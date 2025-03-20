var swiper = new Swiper(".logo-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
        0: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        991: {
          slidesPerView: 5,
        },
    },
  });
