$(document).ready(function(){
    $('.issue__inner').slick({
        // draggable: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/prev_arrow.png"</button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/next_arrow.png"</button>'
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
          