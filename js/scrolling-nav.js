//jQuery to collapse the navbar on scroll
// $(window).scroll(function() {
//     if ($(".navbar").offset().top > 50) {
//         $(".navbar-fixed-top").addClass("top-nav-collapse");
//     } else {
//         $(".navbar-fixed-top").removeClass("top-nav-collapse");
//     }
// });

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


if (document.documentElement.clientWidth > 767) {
    // scripts

    // download complicated script
    // swap in full-source images for low-source ones

$(".btn").hover(function(){
    $(this).css("font-size", "2.4vw");
    $('.menuarrow').css("font-size", "2.4vw");
    $(this).css("transition", ".5s");
    $('.menuarrow').css("transition", ".5s");
    $(this).css("color", "rgb(109, 100, 232)");
    $('.menuarrow').css("color", "rgb(109, 100, 232)");

    }, function(){
    $(this).css("color", 'rgb(224, 27,132)');
    $('.menuarrow').css("color",'rgb(224, 27,132)');
    $(this).css("font-size", "2.3vw");
    $('.menuarrow').css("font-size", "2.3vw");
    // $(this).css("transition", ".5s");
    // $('.menuarrow').css("transition", ".5s");
});

$(".btn").click(function(){
  $(".btn").removeClass("active2");
  $(this).addClass("active2");
  $(".menuarrow").removeClass("active2");
  $(".menuarrow").addClass("active2");

    // }, function(){
    // $(".btn").addClass("active3");
    // $('.menuarrow').addClass("active3");

});
}

if (document.documentElement.clientWidth <= 767) {
    $(".btn").hover(function(){
    $(this).css("font-size", "47px");
    $('.menuarrow').css("font-size", "40px");
    $(this).css("transition", ".5s");
    $('.menuarrow').css("transition", ".5s");
    $(this).css("color", "rgb(109, 100, 232)");
    $('.menuarrow').css("color", "rgb(109, 100, 232)");

    }, function(){
    $(this).css("color", 'rgb(224, 27,132)');
    $('.menuarrow').css("color",'rgb(224, 27,132)');
    $(this).css("font-size", "45px");
    $('.menuarrow').css("font-size", "38px");
    // $(this).css("transition", ".5s");
    // $('.menuarrow').css("transition", ".5s");
});

$(".btn").click(function(){
  $(".btn").removeClass("active2");
  // $(this).addClass("active3");
  $(".menuarrow").removeClass("active2");
  // $(".menuarrow").addClass("active3");

    // }, function(){
    // $(".btn").addClass("active3");
    // $('.menuarrow').addClass("active3");

});
}



    // }, function(){
    // $(this).css("color", 'rgb(224, 27,132)');
    // $('.menuarrow').css("color",'rgb(224, 27,132)');
    // $(this).css("font-size", "25px");
    // $('.menuarrow').css("font-size", "30px");
    // $(this).css("transition", ".5s");
    // $('.menuarrow').css("transition", ".5s");


// $(function() {
//     $('a[href*=#section]').on('click', function(e) {
//         e.preventDefault();
//         $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
//     });

// };