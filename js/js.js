$(document).ready(function(){
  $('.portfolio__slider').slick({
      slidesToShow:1,
      slidesToScroll:1,
      draggable:false,
      infinite:false,
      fade:true,
      arrows:false,
      speed:300,
      dots:true,
      asNavFor:'.portfolio__slidertext'
  });
    $('.portfolio__slidertext').slick({
      asNavFor:'.portfolio__slider',
      speed:300,
      slidesToShow:1,
      fade:true,
      draggable:false,
      infinite:false,
        arrows:false
  });
    
    $(".calculator__square").slider({
    ticks: [0, 1, 2, 3, 4,5, 6, 7, 8, 9,10],
    ticks_labels: ['0', '12', '24', '36', '48','60', '72', '84', '96', '108','120'],
    ticks_snap_bounds: 1    
});
    $(".calculator__height").slider({
    ticks: [0, 100, 200, 300],
    ticks_labels: ['2.55', '2.75', '2.95', '3.15'],
    ticks_snap_bounds: 1    
});
  $('.header__burger--wrapper').on('click',function(e){
      e.preventDefault;
      $('.header__burger').toggleClass('header__burger--active');
  });
    
  
});

  