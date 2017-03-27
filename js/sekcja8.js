// GALERIA PRODUKTY SPECJALNE+ MODAL
 $(document).ready(function(){


 $('.gallery-slider-two').slick({
   slidesToShow: 4,
   speed: 1000,
   autoplay: true,
   autoplaySpeed: 3000,
   arrows : true,
   infinite: false,
   variableWidth: false,

   responsive: [
     {
       breakpoint: 960,
       settings: {
         slidesToShow: 2,
         speed: 1000,
         autoplay: true,
         autoplaySpeed: 3000,
         arrows : false,
         infinite: false,
         variableWidth: false,
       }
     },
     {
       breakpoint: 768,
       settings: {
        slidesToShow: 1,
         speed: 1000,
         autoplay: true,
         autoplaySpeed: 3000,
         arrows : false,
         infinite: false,
         variableWidth: false,

       }
     }
   ]
 });
});
