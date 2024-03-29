(function ($) {
    "use strict";

    // Dropdown on mouse hover
    $(document).ready(function () {
        $('body').css({ "--headerinner": '-' + document.querySelector('header > .container-fluid > .row> .col-lg-9 > .row.bg-braken.d-lg-flex').clientHeight + 'px' });
        $('body').css({ "--bottom": + document.querySelector('header > .container-fluid > .row> .col-lg-9 > .navbar.navbar-expand-lg').clientHeight + 'px' });
        $('body').css({ "--top": document.querySelector('header > .container-fluid > .row> .col-lg-9 > .row.bg-braken.d-lg-flex').clientHeight + document.querySelector('header > .container-fluid > .row> .col-lg-9 > .navbar.navbar-expand-lg').clientHeight + 'px' });
        $('body').css({ "--header": document.querySelector('header').clientHeight + 'px' })

        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);


        $(window).scroll(function () {
            if (window.scrollY > 180) {
                $('body').addClass('sticky__header')
            } else if (window.scrollY < 50) {
                $('body').removeClass('sticky__header')

            }
        })
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function (e) {
        e.preventDefault()
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        // return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });

})(jQuery);

