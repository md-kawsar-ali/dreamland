;(function($) {
    "use strict";
    
    /*----------------------------------------------------*/
    /* WOW js
    /*----------------------------------------------------*/
 
    function bodyScrollAnimation() {
        var scrollAnimate = $('body').data('scroll-animation');
        if (scrollAnimate === true) {
            new WOW({
                mobile: false
            }).init()
        }
    }
    bodyScrollAnimation();
    
    
    
     $("a.demo_btn").on('click', function(event) {
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 500, function(){
            window.location.hash = hash;
            });
        } // End if
    });
    
    
})(jQuery)
