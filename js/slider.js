 $(document).ready(function(){
   $('.slider').slick({
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows : true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          speed: 1000,
          autoplay: false,
          autoplaySpeed: 3000,
          arrows : false,
        }
      }
    ]
   });
 });
