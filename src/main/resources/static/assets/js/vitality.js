// Load WOW.js on non-touch devices
// var isPhoneDevice = "ontouchstart" in document.documentElement;
// $(document).ready(function() {
//   if (isPhoneDevice) {
//     //mobile
//   } else {
//     //desktop
//     // Initialize WOW.js
//     var wow = new WOW({
//       offset: 50
//     })
//     wow.init();
//   } 
// });

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 69)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 70
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

  // Owl Carousel Settings
  // $(".portfolio-carousel").owlCarousel({
  //   singleItem: true,
  //   navigation: true,
  //   pagination: false,
  //   navigationText: [
  //     "<i class='fa fa-angle-left'></i>",
  //     "<i class='fa fa-angle-right'></i>"
  //   ],
  //   autoHeight: true,
  //   mouseDrag: false,
  //   touchDrag: false,
  //   transitionStyle: "fadeUp"
  // });

  $(".testimonials-carousel, .mockup-carousel").owlCarousel({
    singleItem: true,
    navigation: true,
    pagination: true,
    autoHeight: true,
    navigationText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
    ],
    mouseDrag: false,
    touchDrag: true,
    transitionStyle: "backSlide"
  });

  // $(".portfolio-gallery").owlCarousel({
  //   items: 3,
  // });

  // Magnific Popup jQuery Lightbox Gallery Settings
  // $('.gallery-link').magnificPopup({
  //   type: 'image',
  //   gallery: {
  //     enabled: true
  //   },
  //   image: {
  //     titleSrc: 'title'
  //   }
  // });

  // Magnific Popup Settings
  // $('.mix').magnificPopup({
  //   type: 'image',
  //   image: {
  //     titleSrc: 'title'
  //   }
  // });

  // Vide - Video Background Settings
  // $('header.video').vide({
  //   mp4: "mp4/camera.mp4",
  //   poster: "img/agency/backgrounds/bg-mobile-fallback.jpg"
  // }, {
  //   posterType: 'jpg'
  // });

})(jQuery); // End of use strict
