jQuery(document).ready(function($) {
    $(".tab-titlesx li").hover(function() {
        $(".tab-contentx").removeClass('tab-showx');
        $(".tab-titlesx li").removeClass('active');
        $(this).addClass("active");
        var selected_tab = $(this).find("a").attr("href");
        $(selected_tab).addClass("tab-showx");
        return false;
    });
});



// $(window).scroll(function() {    
//     var scroll = $(window).scrollTop();
    

//     if (scroll >= 500) {
//         $("nav.navbar.navbar-expand-lg.navbar-light.bg-light").addClass("fixed");
//         $("span.unfixed-cart").hide();

//     } else {
//         $("nav.navbar.navbar-expand-lg.navbar-light.bg-light").removeClass("fixed");
//         $("span.unfixed-cart").show();
//     }
// });


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    touchDrag: false,
    mouseDrag: false,
    navText: [
        "<i class='fa fa-caret-left'></i>",
        "<i class='fa fa-caret-right'></i>"
    ],
    autoplay: false,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 5
        }
    }
});




$(document).ready(function() {

    $("#featuredCategories").owlCarousel({
        margin: 10,
        nav: false,
        dots: true,
        touchDrag: false,
        mouseDrag: false,
        navText: [
            "<i class='fa fa-caret-left'></i>",
            "<i class='fa fa-caret-right'></i>"
        ],
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });


    $("#latest-products").owlCarousel({
        margin: 10,
        nav: false,
        dots: true,
        touchDrag: false,
        mouseDrag: false,
        navText: [
            "<i class='fa fa-caret-left'></i>",
            "<i class='fa fa-caret-right'></i>"
        ],
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
});






$('.inner-silder').slick({
    dots: true,
    infinite: false,
    arrows: true,
    speed: 300,
    slidesToShow: 3,
    nav: false,
    slidesToScroll: 1
});


(function($) {
    // size = flag size + spacing
    var default_size = {
        w: 20,
        h: 15
    };

    function calcPos(letter, size) {
        return -(letter.toLowerCase().charCodeAt(0) - 97) * size;
    }

    $.fn.setFlagPosition = function(iso, size) {
        size || (size = default_size);

        var x = calcPos(iso[1], size.w),
            y = calcPos(iso[0], size.h);

        return $(this).css('background-position', [x, 'px ', y, 'px'].join(''));
    };
})(jQuery);

// USAGE:

(function($) {

    $(function() {
        var $target = $('.country');

        // on load:
        $target.find('i').setFlagPosition('us');

        $('select').change(function() {
            $target.find('i').setFlagPosition(this.value);
            $target.find('b').text($(this).find(':selected').text());
        });
    });

})(jQuery);




$('.slider-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    adaptiveHeight: true,
    autoplay: true,
    infinite: false,
    useTransform: true,
    speed: 400,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
});

$('.slider-nav')
    .on('init', function(event, slick) {
        $('.slider-nav .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
        slidesToShow: 6,
        slidesToScroll: 1,

        dots: true,
        focusOnSelect: false,
        infinite: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 911,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }]
    });

$('.slider-single').on('afterChange', function(event, slick, currentSlide) {
    $('.slider-nav').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-nav .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
});

$('.slider-nav').on('click', '.slick-slide', function(event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');

    $('.slider-single').slick('slickGoTo', goToSingleSlide);
});




$(document).ready(function() {
    $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
    $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
});







/*
	Add to cart fly effect with jQuery. 
*/

$('.add-to-cart').on('click', function() {
    var cart = $('.shopping-cart');
    var imgtodrag = $(this).parent('.product-img').find("img").eq(0);
    if (imgtodrag) {
        var imgclone = imgtodrag.clone()
            .offset({
                top: imgtodrag.offset().top,
                left: imgtodrag.offset().left
            })
            .css({
                'opacity': '0.8',
                'position': 'absolute',
                'height': '150px',
                'width': '150px',
                'z-index': '100'
            })
            .appendTo($('body'))
            .animate({
                'top': cart.offset().top + 10,
                'left': cart.offset().left - 10,
                'width': 75,
                'height': 75
            }, 5000, 'easeInOutExpo');

        setTimeout(function() {
            cart.effect("shake", {
                times: 2
            }, 200);
        }, 5500);

        imgclone.animate({
            'width': 0,
            'height': 0
        }, function() {
            $(this).detach()
        });
    }
});

// $(document).ready(function() {
//     $(".add-to-cart").click(function() {
//         $(".add-to-cart").toggleClass("CheckeD");
//     });
// });




$(document).ready(function(){
    $(".cart-btn").click(function(){
      $(".cart-list").toggle();
    });
  });

















function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var w1 = 40;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var w2 = 40;
    var r2 = x2 + w2;

    if (r1 < x2 || x1 > r2)
        return false;
    return true;
}
// Fetch Url value 
var getQueryString = function(parameter) {
    var href = window.location.href;
    var reg = new RegExp('[?&]' + parameter + '=([^&#]*)', 'i');
    var string = reg.exec(href);
    return string ? string[1] : null;
};
// End url 
// // slider call
$('#slider').slider({
    range: true,
    min: 10,
    max: 1000,
    step: 1,
    values: [getQueryString('minval') ? getQueryString('minval') : 0, getQueryString('maxval') ? getQueryString('maxval') : 1000],

    slide: function(event, ui) {

        $('.ui-slider-handle:eq(0) .price-range-min').html('$' + ui.values[0]);
        $('.ui-slider-handle:eq(1) .price-range-max').html('$' + ui.values[1]);
        $('.price-range-both').html('<i>$' + ui.values[0] + ' - </i>$' + ui.values[1]);

        // get values of min and max
        $("#minval").val(ui.values[0]);
        $("#maxval").val(ui.values[1]);

        if (ui.values[0] == ui.values[1]) {
            $('.price-range-both i').css('display', 'none');
        } else {
            $('.price-range-both i').css('display', 'inline');
        }

        if (collision($('.price-range-min'), $('.price-range-max')) == true) {
            $('.price-range-min, .price-range-max').css('opacity', '0');
            $('.price-range-both').css('display', 'block');
        } else {
            $('.price-range-min, .price-range-max').css('opacity', '1');
            $('.price-range-both').css('display', 'none');
        }

    }
});

$('.ui-slider-range').append('<span class="price-range-both value"><i>$' + $('#slider').slider('values', 0) + ' - </i>' + $('#slider').slider('values', 1) + '</span>');

$('.ui-slider-handle:eq(0)').append('<span class="price-range-min value">$' + $('#slider').slider('values', 0) + '</span>');

$('.ui-slider-handle:eq(1)').append('<span class="price-range-max value">$' + $('#slider').slider('values', 1) + '</span>');