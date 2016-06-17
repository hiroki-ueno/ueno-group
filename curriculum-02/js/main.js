$(function(){
//
//01.main_wrap_top:hover
//02.sns_link:click
//03.footer_link_box:hover
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
//02.sns_link:click
//
$('.sns_link').click(
    function(){
        var $inner = $('.sns_link_inner');
        $inner.each(
            function(){
                $inner.toggleClass('show');
                if($inner.hasClass('show')){
                    $inner.stop(true).fadeIn(200);
                }else{
                    $inner.stop(true).fadeOut(200);
                }
            })
    });
//
//03.footer_link_box:hover
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