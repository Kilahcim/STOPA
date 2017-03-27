$(function (){
  var burgerMenu = $('.hamburger');
  var cross = $('.cross');
  var menu = $('.menu');

  burgerMenu.on('click', function () {
    menu.animate({width:'toggle'},550);
    burgerMenu.hide();
    cross.show();
  })

  cross.on('click', function(){
    menu.animate({width:'toggle'},550);
    burgerMenu.show();
    cross.hide();
  });
// Funkcja obsługująca menu przy scrolowaniu.

  $( window ).on('scroll resize', function (){
      var scroll = $(window).scrollTop();
      var width = $(window).width();
      var logo = $(".logo");
      var fb = $(".fb");
      var nav = $("nav");
      var anchor = nav.find('a');

      if (scroll > 0 ) {
        nav.css({
          'position': 'fixed',
          'background-color': '#ffffff'
        });
        logo.css({
          'background-image': 'url("images/logoBlack.png")'
        });
        burgerMenu.css({
          'background-image': 'url("images/menuIconBlack.png")'
        });
      }
      if ((scroll > 0) && (width > 959)){
        anchor.css ({
          'color': 'black',
        });
        fb.css ({
          'background-image': 'url("images/fbIconBlack.png")'
        })

      }
      if ((scroll < 2) && (width > 959)){
        anchor.css ({
          'color': 'white',
        });
        fb.css ({
          'background-image': 'url("images/fbIconWhite.png")'
        })

      }
      if(scroll < 2){
      nav.css({
        'position': 'fixed',
        'background': 'none',
      });
      logo.css({
        'background-image': 'url("images/logoWhite.png")'
      });
      burgerMenu.css({
        'background-image': 'url("images/menuIcon.png")'
      });
      }

  });
// Funkcja smooth scroll - potrzebuje przy niej pomocy. Działa tylko jak odpalam ją z poziomu menu .

  // $('a[href*=\\#]').on('click', function(event){
  //     event.preventDefault();
  //     $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  // });
});
