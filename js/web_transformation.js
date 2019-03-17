//Background and size change when scrolling, by changing the classes
jQuery (function () {
    jQuery(window).scroll(function (){
        if(jQuery(this).scrollTop()>20){
            $("#nav-menu").addClass("bg-scrolled");
            $("#nav-menu").removeClass("bg-dark");
        } else {
            $("#nav-menu").removeClass("bg-scrolled");
            $("#nav-menu").addClass("bg-dark");
        }
    });
})