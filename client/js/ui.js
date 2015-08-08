$(document).ready(function () {

    var init = function () {
        //mapHeightFunc();
        console.log('init');
    }

    var headerHeight = $('header').height();

    /*
    // map height
    var mapHeightFunc = function () {
        var userScreen = $('html').height(),
            mapHeight = userScreen - headerHeight;

        $('#map').css({
            'height': mapHeight
        });
    }

    $(window).resize(function () {
        mapHeightFunc();
    });


    $('.content').css({
        'top': headerHeight
    });

*/
    $("nav a").mouseenter(function () {
        var width = $(this).width();
        var left = $(this).offset().left;

        $("nav .line").css({
            "width": width + 30,
            "left": left,
        });
    });

    $("nav").mouseleave(function () {
        $("nav .line").css({
            "width": 0,
            "left": 0,
        });
    });

    init();
});
