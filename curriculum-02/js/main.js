$(function(){
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
$('.transparency').hover(
    function(){
        $(this).find('a').stop(true).animate({opacity:0.7},200);
    },
    function(){
        $(this).find('a').stop(true).animate({opacity:1},200);
    });
$('.flush').on('mouseover',
    function(){
        $(this).animate({opacity:0.4},200);
        $(this).animate({opacity:0},200);
    });
});