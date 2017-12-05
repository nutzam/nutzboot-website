// logo加载
$(window).on('load', function () {
    $('.status').fadeOut();
    $('.preloader').delay(350).fadeOut('slow');
});

// 跳转
$(function () {
    $('.navbar-nav a').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// 其他初始化
$(document).ready(function () {
    wow = new WOW(
        {
            animateClass: 'animated',
            offset: 100,
            mobile: true
        }
    );
    wow.init();

    $('.counter').countUp({
        delay: 20,
        time: 1000
    });
});