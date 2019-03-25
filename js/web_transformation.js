//Background and size change when scrolling, by changing the classes
jQuery (function () {
    jQuery(window).scroll(function (){
        if(jQuery(this).scrollTop()>160){
            $("#nav-menu").addClass("bg-scrolled");
            $("#nav-logo").addClass("after-scroll");
            $("#nav-menu").addClass("fixed-top");
            $("#nav-menu").removeClass("bg-dark");

        } else {
            $("#nav-menu").removeClass("bg-scrolled");
            $("#nav-logo").removeClass("after-scroll");
            $("#nav-menu").removeClass("fixed-top");
            $("#nav-menu").addClass("bg-dark");
        }
    });
})
