 $(document).ready(function(){
   $('.inne').slick({
     slidesToShow: 4,
     speed: 1000,
     autoplay: false,
     autoplaySpeed: 3000,

    responsive: [

      {
        breakpoint: 960,
          settings: {
            slidesToShow: 2,
            speed: 1000,
            autoplay: false,
            autoplaySpeed: 3000,
          }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          speed: 1000,
          autoplay: false,
          autoplaySpeed: 3000,
        }
      }
    ]

   });
 });
