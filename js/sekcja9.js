$(document).ready(function(){
  var listElement = $(".mod9").find('.good-list');
  var arrow = $('.arrow');
  var badArrow = $('.bad-arrow');
  var p = $(".hideparagraph").find('p');
  var badText = $('.bad-text')
  var header = $('.hideparagraph').find('#show');
  var width = $(window).width();
  var counter = 1;

  p.hide();
  header.show();

  listElement.on('click', function(){
    counter= counter + 1
    
    if (counter % 2 == 0) {
      $(this).find('.arrow').animate({  borderSpacing:  90 }, {
        step: function(now,fx) {
          $(this).css('transform','rotate('+now+'deg)');
        },duration:'slow'
      });
      $(this).find('p').animate({height:'toggle'},1050);
    } else {
      $(this).find('.arrow').animate({  borderSpacing:  -5 }, {
        step: function(now,fx) {
          $(this).css('transform','rotate('+now+'deg)');
        },duration:'slow'
      });
      $(this).find('p').animate({height:'toggle'},1050);
    }



  });
  if(width > 959) {
    badArrow.hide();
    p.show();
    badText.hide();
  }
  $(window).on('resize', function () {
    var width = $(window).width();

    if(width > 959) {
      badArrow.hide();
      badText.show();
    }
    if(width < 959){
      arrow.show();
      badText.hide();
    }
  })

});
