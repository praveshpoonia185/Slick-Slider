$(document).ready(function () {
  const full_width_card_slider = $(".cards")
  if (full_width_card_slider.length) {
    full_width_card_slider.not('.slick-initialized').slick({
      infinite: true,
      loop: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      centerMode: true,
      centerPadding: "0rem 0rem 10%",

      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            autoplay: false,
            autoplaySpeed: 1500,
            variableWidth: false,
            centerMode: false,
            centerPadding: "40px",
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1.1,
            slidesToScroll: 1,
            arrows: false,
            infinite: true,
            initialSlide: false,
            dots: false,
            autoplay: false,
            autoplaySpeed: 1500,
            variableWidth: false,
            centerMode: false,
          },
        },
      ],
    });
  }
});