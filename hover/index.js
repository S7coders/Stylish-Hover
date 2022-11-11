$(document).ready(function () {
    $(".row a").on("click", function () {
        const position = $(this).parent().position();
        const width = $(this).parent().width();

        // console.log( $(this) );

        $(".row .slide-1").css({
            left: +position.left,
            width: width,
        });
    });

    $(".row a").on("mouseover", function () {
        const positionMouse = $(this).parent().position();
        const widthMouse = $(this).parent().width();

        $(".row .slide-2").css({
            opacity: 1,
            left: +positionMouse.left,
            width: widthMouse
        });
    });

    $(".row a").on("mouseout", function () {
        $(".row .slide-2").css({
            opacity: 0
        });
    });


    const currentWidth = $(".row").find("li:nth-of-type(1) a").parent().width();
    const current = $("li:nth-of-type(1) a").position();

    $(".row .slide-1").css({
        left: +current.left,
        width: currentWidth
    });

});