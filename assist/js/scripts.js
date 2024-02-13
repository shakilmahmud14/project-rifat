jQuery(document).ready(function(){
  

    // work carousel js
    $(".banner-carousel").owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        items: 1,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        active: true,
        smartSpeed: 1000,
        autoplay: 6000,
        navText: [ '<span class="fa-solid fa-arrow-left-long"></span>', '<span class="fa-solid fa-arrow-right-long"></span>' ],
       responsive:{
                0:{
                    items:1,
                    nav:false,
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                }
            }
    });











})