$(document).ready(function(){
    $('.issue__inner').slick({
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/prev_arrow.png"</button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/next_arrow.png"</button>',
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
            },
            {
              breakpoint: 567,
              settings: {
                arrows: false,
                dots: false
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
        speed: 1000,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 567,
            settings: {
              slidesToShow: 1
            }
          },
      ]
    });

    $("a[href=#up]").click(function(){
      const _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });

  //for pageup scrolling
    $(window).scroll(function(){
        if($(this).scrollTop() > 1600){
            $('.pageup').fadeIn();
        }else
            $('.pageup').fadeOut();
    });

  //for modal closing
    $('.modal__close').on('click', function(){
        $('.overlay, #call-me').fadeOut('slow');
    });

  //for modal opening
    $('[data-modal=call-me]').on('click', function(){
        $('.overlay, #call-me').fadeIn('slow');
    });

    window.addEventListener('DOMContentLoaded', () => {
      const menu = document.querySelector('.menu'),
      menuItem = document.querySelectorAll('.menu_item'),
      hamburger = document.querySelector('.hamburger');
  
      hamburger.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('menu_active');
      });
  
      menuItem.forEach(item => {
          item.addEventListener('click', () => {
              hamburger.classList.toggle('hamburger_active');
              menu.classList.toggle('menu_active');
          })
      })
    })
      
      

    $('.hamburger').on('click', function(){
        $('.header__navigation').fadeIn('slow');
    });
  $('.hamburger').on('click', function(){
      $('.header__navigation').fadeIn('slow');
  });

  $('a[href^="#"]').bind('click.smoothscroll',function (e) {
		e.preventDefault();

		var target = this.hash,
		$target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 900, 'swing', function () {
			window.location.hash = target;
		});
	});
});
