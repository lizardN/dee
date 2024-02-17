window.addEventListener("resize", function() {
    //"use strict"; window.location.reload(); 
});


document.addEventListener("DOMContentLoaded", function() {

    // make it as accordion for smaller screens
    if (window.innerWidth > 992) {


        document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem) {

            everyitem.addEventListener('mouseover', function(e) {

                let el_link = this.querySelector('a[data-bs-toggle]');

                //console.log(el_link)

                if (el_link != null) {
                    let nextEl = el_link.nextElementSibling;
                    //console.log(nextEl);
                    el_link.classList.add('show');
                    nextEl.classList.add('show');
                }

            });
            everyitem.addEventListener('mouseleave', function(e) {
                let el_link = this.querySelector('a[data-bs-toggle]');

                if (el_link != null) {
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.remove('show');
                    nextEl.classList.remove('show');
                }


            })
        });

    }
    // end if innerWidth
});
// DOMContentLoaded  end

(function(jQuery) {

    // Handle click on toggle search button
    jQuery('#toggle-search').click(function() {
        jQuery('#search-form, #toggle-search').toggleClass('open');
        return false;
    });

    // Handle click on search submit button
    jQuery('#search-form input[type=submit]').click(function() {
        jQuery('#search-form, #toggle-search').toggleClass('open');
        return true;
    });

    // Clicking outside the search form closes it
    jQuery(document).click(function(event) {
        var target = jQuery(event.target);

        if (!target.is('#toggle-search') && !target.closest('#search-form').size()) {
            jQuery('#search-form, #toggle-search').removeClass('open');
        }
    });
    jQuery(".hamburger").click(function() {
        jQuery(this).toggleClass("is-active");
    });


})(jQuery); // JavaScript Document


jQuery(document).scroll(function() {
    var $nav = jQuery(".fixed-top");
    $nav.toggleClass('scrolled', jQuery(this).scrollTop() > $nav.height());
});


jQuery(document).ready(function() {

    jQuery("#blog-scroll").owlCarousel({
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        paginationSpeed: 500,
        singleItem: true,
        items: 1,
        stagePadding: 10,
        center: true,
        nav: true,
        margin: 40,
        dots: true,
        navText: ["", ""],
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            1170: {
                items: 3
            }

        }
    });

});
jQuery(document).ready(function() {

    jQuery("#bookacall").click(function() {
        jQuery('html, body').animate({
            scrollTop: jQuery("#pills-tab").offset().top
        }, 1000);
    });
});



jQuery('.carousel').on('slid.bs.carousel', function(evt) {

    jQuery(".carousel-indicators2 li").removeClass("active");
    jQuery(".carousel-indicators2").find("[data-bs-slide-to='" + jQuery(evt.relatedTarget).index() + "']").addClass("active")
})



jQuery(document).ready(function() {
    jQuery(".various").fancybox({

        fitToView: true,
        width: '100%',
        height: '70%',
        autoSize: true,
        closeClick: false,
        openEffect: 'none',
        closeEffect: 'none'
    });
})

jQuery(document).ready(function($) {

    jQuery('.d-order-1').find('.row').on('mousemove', function(event) {


        // var c = jQuery("#compass");
        // /*  . Mouse
        //  *  |\
        //  *  | \
        //  * y|  \
        //  *  |   \
        //  *  |____\. center of compass
        //  *     x
        //  */
        // var x = c.offset().left + c.innerWidth() / 2 - event.pageX;
        // var y = c.offset().top + c.innerHeight() / 2 - event.pageY;

        // // Use the atan function to get the angle back 
        // var angle = Math.atan(y / x) * 180 / Math.PI;

        // // Correct for radians by adding one radian when we are further to the right
        // // Also, correct for the angle's wrong quadrant
        // angle = event.pageX > c.offset().left + c.innerWidth() / 2 ? angle + 90 : angle - 90;

        // //console.log(angle);

        // var arrow = jQuery('.arrow').css({transform: 'rotate(' + (angle) + 'deg)'});

    });



    jQuery('.middle').on('click', function() {

        angle = 106.199;
        jQuery('.arrow').css({
            transform: 'rotate(' + (angle) + 'deg)'
        });
    })

    jQuery(".middle").on({
        mouseenter: function(e) {
            var c = jQuery("#compass");
            var x = c.offset().left + c.innerWidth() / 2 - event.pageX;
            var y = c.offset().top + c.innerHeight() / 2 - event.pageY;
            // Use the atan function to get the angle back 
            var angle = Math.atan(y / x) * 180 / Math.PI;
            angle = 106.199;
            jQuery('.arrow').css({
                transform: 'rotate(' + (angle) + 'deg)'
            });
        },
        mouseleave: function() {
            //stuff to do on mouse leave
        }
    });



    jQuery('.primary').on('click', function() {
        angle = 16.086;
        jQuery('.arrow').css({
            transform: 'rotate(' + (angle) + 'deg)'
        });
    })

    jQuery(".primary").on({
        mouseenter: function(e) {
            var c = jQuery("#compass");
            var x = c.offset().left + c.innerWidth() / 2 - event.pageX;
            var y = c.offset().top + c.innerHeight() / 2 - event.pageY;
            // Use the atan function to get the angle back 
            var angle = Math.atan(y / x) * 180 / Math.PI;
            angle = 16.086;
            jQuery('.arrow').css({
                transform: 'rotate(' + (angle) + 'deg)'
            });
        },
        mouseleave: function() {
            //stuff to do on mouse leave
        }
    });
    jQuery('.i-gcse').on('click', function() {
        angle = -72.035;
        jQuery('.arrow').css({
            transform: 'rotate(' + (angle) + 'deg)'
        });
    })

    jQuery(".i-gcse").on({
        mouseenter: function(e) {
            var c = jQuery("#compass");
            var x = c.offset().left + c.innerWidth() / 2 - event.pageX;
            var y = c.offset().top + c.innerHeight() / 2 - event.pageY;
            // Use the atan function to get the angle back 
            var angle = Math.atan(y / x) * 180 / Math.PI;
            angle = -72.035;
            jQuery('.arrow').css({
                transform: 'rotate(' + (angle) + 'deg)'
            });
        },
        mouseleave: function() {
            //stuff to do on mouse leave
        }
    });

    jQuery('.a-level').on('click', function() {
        angle = -164.035;
        jQuery('.arrow').css({
            transform: 'rotate(' + (angle) + 'deg)'
        });
    })
    jQuery(".a-level").on({
        mouseenter: function(e) {
            var c = jQuery("#compass");
            var x = c.offset().left + c.innerWidth() / 2 - event.pageX;
            var y = c.offset().top + c.innerHeight() / 2 - event.pageY;
            // Use the atan function to get the angle back 
            var angle = Math.atan(y / x) * 180 / Math.PI;
            angle = -164.035;
            jQuery('.arrow').css({
                transform: 'rotate(' + (angle) + 'deg)'
            });
        },
        mouseleave: function() {
            //stuff to do on mouse leave
        }
    });
});


function doCount() {
    jQuery('.counting').each(function() {
        var $this = jQuery(this),
            countTo = $this.attr('data-count');

        jQuery({
            countNum: $this.text()
        }).animate({
            countNum: countTo
        }, {
            duration: 9000,
            easing: 'linear',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
            }
        });
    });
}