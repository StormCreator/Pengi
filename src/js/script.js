$(document).ready(function(){
    $('.issue__inner').slick({
        // draggable: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/prev_arrow.png"</button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/next_arrow.png"</button>',
    });

    $('.modal__close').on('click', function(){
        $('.overlay, #call-me, #thanks').fadeOut('slow');
    });

    $('[data-modal=call_me]').on('click', function(){
        $('.overlay, #call-me').fadeIn('slow');
    });

    $('form').submit(function(e){
        // var fso, f1;
        // fso = new ActiveXObject("Scripting.FileSystemObject");
        // //f1 = fso.CreateTextFile();
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function(){
            $(this).find("input").val("");
            $('#call-me').fadeOut();  
            $('.overlay, #thanks').fadeIn('slow');
            $('form').trigger('reset');
        });

        return false;
    });

   

    $('input[name=phone]').mask("+7 (999) 999-99-99");

    $(window).scroll(function(){
        if($(this).scrollTop() > 1600){
            $('.pageup').fadeIn();
        }else
            $('.pageup').fadeOut();
    });

    $("a[href=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    function toggleSlide(item)
    {
        $(item).each(function(i){
            $(this).on('click', function(e){
                e.preventDefault();
                $('.prices__item-content').eq(i).toggleClass('prices__item-content-active');
                $('.prices__item-list').eq(i).toggleClass('prices__item-list-active');
            })
        })
    }

    toggleSlide('.prices-more');
    toggleSlide('.prices-back');
  });
          