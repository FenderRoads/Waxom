$(function() {
  $(".carousel1").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      }
    }
  });

  $(".carousel2").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      750: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });

  $(".hamburger").on("click", function() {
    $(this).toggleClass("is-active");
    $(".drop-down-menu").toggleClass("menu-active");
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 900) {
      $(".top").addClass("active");
    } else {
      $(".top").removeClass("active");
    }
  });

  $(".top").on("click", function() {
    $("html, body")
      .stop()
      .animate({ scrollTop: 0 }, "slow", "swing");
  });

  $(window).on("load", function() {
    $(".preloader")
      .delay(1000)
      .fadeOut("slow");
  });
});
