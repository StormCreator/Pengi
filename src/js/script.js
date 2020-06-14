$(document).ready(function(){
    $('.issue__inner').slick({
        responsive: [
            {
              breakpoint: 991,
              settings: {
                arrows: false
              }
            },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                dots: true
              }
            }
        ]
    });
    $('.promo__slider').slick({
        draggable: true,
        arrows: false,
    });

    $('.header__flags').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        centerMode: false,
        autoplay: true,
        autoplaySpeed: 3000,    
        speed: 1000
      });
  });
          