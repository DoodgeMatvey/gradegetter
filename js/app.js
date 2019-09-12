const APP = {
    init: function () {
        this.actions.initRange();
        this.actions.initSlider();
        this.actions.initUI();
        this.actions.SlickSlider();
    },
    actions: {
        initUI: function () {
            $('.ui.dropdown').dropdown();
            $('.ui.accordion').accordion()
        },
        initRange: function () {
            if (window.innerWidth > 480) {
                $('.range').range({
                    min: 50,
                    max: 250,
                    start: 100,
                    step: 25
                });
            }
            else {
                $('.range').range({
                    min: 1,
                    max: 7,
                    start: 4,
                    step: 1
                });
            }
        },
        initSlider: function () {
            $('[data-prev]').click(function () {
                const carousel = $(this).data('prev');
                $(carousel).slick('prev')
            })
            $('[data-next]').click(function () {
                const carousel = $(this).data('next');
                $(carousel).slick('next')
            })
            
        },
        SlickSlider: function () {
            if ($(".carousel-block").length) {
                var attributeSlick = $('.carousel-block').attr('data-config');
                console.log(attributeSlick);
                const config = JSON.parse(attributeSlick);
                $('.carousel-block').each(function () {
                    $(this).slick(config);
                })
            }
            if ($(".carousel-aledo").length) {
                var attributeSlick = $('.carousel-aledo').attr('data-config');
                console.log(attributeSlick);
                const config = JSON.parse(attributeSlick);
                $('.carousel-aledo').each(function () {
                    $(this).slick(config);
                })
            }
    
        }
    }
    
}
APP.init();

              


// $('.carousel-block').slick({
//     dots: false,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//         {
//             breakpoint: 992,
//             settings: {
//             slidesToShow: 2,
//             }
//         },
//         {
//             breakpoint: 768,
//             settings: {
//             slidesToShow: 1,
//             }
//         }
//     ]
// });
// $('.carousel-aledo').slick({
//     dots: false,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     responsive: [
//         {
//           breakpoint: 992,
//           settings: {
//             slidesToShow: 1,
//           }
//         }
//     ]
// });
























let open = document.querySelector('.menu-open');
let exit = document.querySelector('.menu-close');
let overflow = document.createElement('div');
$(function(){
    $('.menu-open').on("click", function () {
        // $('.navigation').toggleClass('nav-block');
        $('.menu-open').toggleClass('button-hide');
        $('.menu-close').toggleClass('button-visible');
        $('.header').toggleClass('header-shadow');
        $('.block-mobile').toggleClass('block-mobile-v');
        overflow.className = 'overflow';
        document.body.appendChild(overflow);
    });

});
$(function(){
    $('.menu-close').on("click", function () {
        // $('.navigation').toggleClass('nav-block');
        $('.menu-open').toggleClass('button-hide');
        $('.menu-close').toggleClass('button-visible');
        $('.header').toggleClass('header-shadow');
        $('.block-mobile').toggleClass('block-mobile-v');
        overflow.remove();
        document.body.style.overflow = "visible";
    });

});
overflow.onclick = function () {
    $('.menu-open').toggleClass('button-hide');
    $('.menu-close').toggleClass('button-visible');
    $('.header').toggleClass('header-shadow');
    $('.block-mobile').toggleClass('block-mobile-v');
    overflow.remove();
    document.body.style.overflow = "visible";

}
