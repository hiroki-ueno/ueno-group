$(function(){
//
//01.main_wrap_top:hover
//02.footer_link_box:hover
//
//
//01.main_wrap_top:hover
//
$('.dgfruit_nav ul > li').hover(
    function(){
        $(this).find('a > img').stop(true).animate({opacity:0},200);
    },
    function(){
        $(this).find('a > img').stop(true).animate({opacity:1},200);
    });
$('.avocado_nav ul > li').hover(
    function(){
        $(this).find('a > img').stop(true).animate({opacity:0},200);
    },
    function(){
        $(this).find('a > img').stop(true).animate({opacity:1},200);
    });
//
//02.footer_link_box:hover
//
$('.fb').hover(
    function(){
        $(this).find('a').stop(true).animate({opacity:0.7},200);
    },
    function(){
        $(this).find('a').stop(true).animate({opacity:1},200);
    });
$('.tw').hover(
    function(){
        $(this).find('a').stop(true).animate({opacity:0.7},200);
    },
    function(){
        $(this).find('a').stop(true).animate({opacity:1},200);
    });
$('.yt').hover(
    function(){
        $(this).find('a').stop(true).animate({opacity:0.7},200);
    },
    function(){
        $(this).find('a').stop(true).animate({opacity:1},200);
    });
$('.dfc').hover(
    function(){
        $(this).find('a').stop(true).animate({opacity:0.7},200);
    },
    function(){
        $(this).find('a').stop(true).animate({opacity:1},200);
    });
});