$(function() {

$('.carousel1').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive: {
    0: {
      items: 1
    }
  }
})

$('.carousel2').owlCarousel({
  loop:true,
  margin:20,
  nav:true,
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
})

$('.bxslider').bxSlider({
  mode: 'horizontal',
  captions: true
});


  


$('.hamburger').on('click', function(){
  $(this).toggleClass('is-active')
  $('.drop-down-menu').toggleClass('menu-active')
})

});
