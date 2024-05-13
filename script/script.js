try{
    window.addEventListener('load', function(){
        setTimeout(scrollTo, 0,0,1);
    }, false);
} catch(e){}

$(function(){
    $('.tab>li>a').click(function(){
        $(this).parent().addClass("active")
        .siblings()
        .removeClass("active");
        return false;
    });
});