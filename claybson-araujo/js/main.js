jQuery.noConflict();
(function($) {

    $('.owl-banner-topo').owlCarousel({
    	 loop:true,
         margin:10,
         nav:false,
         items:1,
         dots: true
    });

    $('.owl-agencia').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:true,
            },
            1000:{
                items:3,
                nav:true,
            },

            1200:{
                items:4,
                nav:true,
                loop:false
            }
        }
    });

    $('.owl-clientes').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:true,
            },
            1000:{
                items:3,
                nav:true,
            },

            1200:{
                items:4,
                nav:true,
                loop:false
            }
        }
    });

    var $width = $(document).width();
    if($width < 768){
        $('.owl-clientes').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            responsive:{
                0:{
                    items:1,
                    dots: true
                }
            }
        })
    }else{
        $('.owl-clientes').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
        $('.owl-clientes').find('.owl-stage-outer').children().unwrap();
    }

    $('.menu-mobile').on('click', function() {
    	$('.menu-suspenso').fadeToggle('slow');
    });

    $('#enviar').on('click',function(){
        event.preventDefault();
        var nome = document.getElementById('nome').value;
        var email = document.getElementById('email').value;
        console.log('Nome: '+" "+nome);
        console.log('Email: '+" "+email);
    });

    $('.nav a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
                targetOffset = $(id).offset().top;
                
        $('html, body').animate({ 
            scrollTop: targetOffset - 100
        }, 500);
    });

})(jQuery);
