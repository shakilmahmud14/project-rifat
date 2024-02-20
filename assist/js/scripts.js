jQuery(document).ready(function() {
    jQuery("ul li:has(ul)").hover(function() {
            jQuery(this).find(" > ul").slideDown("fast");
        }, function() {
            jQuery(this).find(" > ul").slideUp("slow");
        })
        // upper menu js hare

    jQuery(window).scroll(function() {
        var scrolltop = jQuery(window).scrollTop();
        if (scrolltop >= 240) {
            jQuery(".upper-menu").slideDown("slow");
        } else {
            jQuery(".upper-menu").slideUp("slow");
        };
        if (scrolltop >= 350) {
            jQuery(".top-btn").show();
        } else {
            jQuery(".top-btn").hide();
        }
    })


    jQuery('.stellarnav').stellarNav({

        theme: 'dark',
        breakpoint: 960,
        position: 'right',
        phoneBtn: '18009997788',
        locationBtn: 'https://www.google.com/maps'

    });


    jQuery(".feature-block-one").hover(function() {
        jQuery(".block-one-overly").addClass(".ovely");
    })


    // work carousel js
    $(".banner-carousel").owlCarousel({
        margin: 0,
        nav: true,
        dots: false,
        items: 1,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        active: true,
        smartSpeed: 1000,
        autoplay: 6000,
        navText: ['<span class="fa-solid fa-arrow-left-long"></span>', '<span class="fa-solid fa-arrow-right-long"></span>'],
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 1
            },
            800: {
                items: 1
            },
            1024: {
                items: 1
            }
        }
    });
    $(".service-carousel").owlCarousel({
        margin: 0,
        nav: true,
        dots: false,
        loop: true,
        items: 3,
        margin: 30,
        active: true,
        smartSpeed: 1000,
        autoplay: 6000,
        navText: ['<span class="fa-solid fa-arrow-left-long"></span>', '<span class="fa-solid fa-arrow-right-long"></span>'],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2
            },
            800: {
                items: 2
            },
            1024: {
                items: 3
            }
        }
    });


    // counter js start hare

    var a = 0;
    $(window).scroll(function() {
        var oTop = $("#counter-box").offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $(".counter").each(function() {
                var $this = $(this),
                    countTo = $this.attr("data-number");
                $({
                    countNum: $this.text()
                }).animate({
                        countNum: countTo
                    },

                    {
                        duration: 1000,
                        easing: "swing",
                        step: function() {
                            //$this.text(Math.ceil(this.countNum));
                            $this.text(
                                Math.ceil(this.countNum).toLocaleString("en")
                            );
                        },
                        complete: function() {
                            $this.text(
                                Math.ceil(this.countNum).toLocaleString("en")
                            );
                            //alert('finished');
                        }
                    }
                );
            });
            a = 1;
        }
    });
    // counter js end hare

    $(".testimonial-carousel").owlCarousel({
        nav: false,
        dots: false,
        loop: true,
        items: 3,
        margin: 30,
        active: true,
        smartSpeed: 1000,
        autoplay: 6000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1
            },
            750: {
                items: 2
            },
            1024: {
                items: 3
            }
        }
    });




    // top button js start hare
    $(".top-btn").on('click', function () {
        $('html').animate({
            scrollTop: 0
        }, 800);
     });



})