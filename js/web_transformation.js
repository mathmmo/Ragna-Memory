//Background and size change when scrolling, by changing the classes
/*jQuery (function () {
    jQuery(window).scroll(function (){
        if(jQuery(this).scrollTop()>20){
            $("#nav-menu").addClass("bg-scrolled");
            $("#nav-menu").removeClass("bg-dark");
            $("#nav-menu").addClass("fixed-top");
        } else {
            $("#nav-menu").removeClass("bg-scrolled");
            $("#nav-menu").addClass("bg-dark");
            $("#nav-menu").removeClass("fixed-top");
        }
    });
})
small-height navbar-fixed-top*/
jQuery (function () {
    jQuery(window).scroll(function (){
        if(jQuery(this).scrollTop()>20){
            $("#nav-menu").addClass("bg-scrolled");
            $("#nav-menu").removeClass("bg-dark");
            $("#nav-menu").addClass("navbar-fixed-top");
            $("#nav-menu").addClass("small-height");
        } else {
            $("#nav-menu").removeClass("bg-scrolled");
            $("#nav-menu").addClass("bg-dark");
            $("#nav-menu").removeClass("navbar-fixed-top");
            $("#nav-menu").removeClass("small-height");
        }
    });
})