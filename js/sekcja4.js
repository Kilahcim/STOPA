// GALERIA + MODAL
 $(document).ready(function(){
   var close = $(".close-me");
   var modal = $(".modal");
   var body = $("body");
   var images = $(".galleryimg");

   modal.hide();
   close.hide();

   $('.gallery-slider').slick({
     slidesToShow: 4,
     speed: 1000,
     autoplay: true,
     autoplaySpeed: 3000,
     arrows : true,
     infinite: false,
     variableWidth: false,
     responsive: [
       {
         breakpoint: 959,
         settings: {
          slidesToShow: 2,
           speed: 1000,
           autoplay: true,
           autoplaySpeed: 3000,
           arrows : true,
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
           arrows : true,
           infinite: false,
           variableWidth: false,
         }
        }

     ]
   });



  images.on('click', function(){
    modal.addClass("modal-gallery-slider");
    body.addClass("modal-open");
    modal.show();
    close.show();

    var modalId = $(this).attr("id");
    var newId = modalId.slice(3);

    console.log(newId);

    $('.modal-gallery-slider').slick({
      speed: 1000,
      autoplay: false,
      autoplaySpeed: 3000,
      arrows : true,
      initialSlide: newId-1
      });

  });

  close.on('click', function(){

    modal.hide();
    close.hide();
    body.removeClass("modal-open");
    $('.modal-gallery-slider').slick('unslick');

  });




});
