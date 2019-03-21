//Background and size change when scrolling, by changing the classes
jQuery (function () {
    jQuery(window).scroll(function (){
        if(jQuery(this).scrollTop()>65){
            $("#nav-menu").addClass("bg-scrolled");
            $("#nav-menu").addClass("fixed-top");
            $("#nav-menu").removeClass("bg-dark");
        } else {
            $("#nav-menu").removeClass("bg-scrolled");
            $("#nav-menu").removeClass("fixed-top");
            $("#nav-menu").addClass("bg-dark");
        }
    });
})
