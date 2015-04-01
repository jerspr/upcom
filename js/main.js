$(window).load(function() {
    $('#status').fadeOut();
    $('#preloader').delay(200).fadeOut(100);
    initAnimation();
});

function initAnimation() {
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile == false) {
        $('*[data-animation]').addClass('animated');
        $('.animated').waypoint(function (down) {
            var elem = $(this);
            var animation = elem.data('animation');
            if (!elem.hasClass('visible')) {
                var animationDelay = elem.data('animation-delay');
                if (animationDelay) {
                    setTimeout(function () {
                        elem.addClass(animation + ' visible');
                    }, animationDelay);
                } else {
                    elem.addClass(animation + ' visible');
                }
            }
        }, {
            offset: $.waypoints('viewportHeight')
        });
    }
}
