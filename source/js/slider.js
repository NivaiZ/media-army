const mainSlider = new Swiper(".main-slider", {
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const brandsSlider = new Swiper(".brands-provided__list", {
    direction: "horizontal",
    slidesPerView: 6,
    spaceBetween: -40,
    grabCursor: true,
});


const promotionSlider = new Swiper(".promotion-provided .promotion-provided__list", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    mousewheel: true,
    keyboard: true,
});

const reviewsSlider = new Swiper(".reviews-provided .reviews-provided__block", {
  cssMode: true,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  pagination: {
      el: ".swiper-pagination",
      type: "fraction",
  },
  mousewheel: true,
  keyboard: true,
});

document.addEventListener("DOMContentLoaded", () => {
  console.log(mainSlider);
  console.log(brandsSlider);
  console.log(promotionSlider);
  console.log(reviewsSlider);
});
