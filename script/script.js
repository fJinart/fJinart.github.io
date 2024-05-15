try {
    window.addEventListener('load', function () {
        setTimeout(scrollTo, 0, 0, 1);
    }, false);
} catch (e) { }

$(function () {
    $('.tab>li>a').click(function () {
        $(this).parent().addClass("active")
            .siblings()
            .removeClass("active");
        return false;
    });
});

jQuery(document).ready(function () {

    $(".menu_m").click(function () {
        $(".popup_menu").slideToggle(500);
    });
});