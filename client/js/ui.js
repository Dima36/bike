$(document).ready(function () {

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
});
