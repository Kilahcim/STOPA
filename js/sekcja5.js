$(document).ready(function(){
  var rest = $('.rest');
  var button = $('.regula').find('button');
  var width = $(window).width();
  if (width > 767) {
    button.hide();
    rest.show();
  } else {
    button.show();
    rest.hide();
  }


  $(window).resize(function(){
    var width = $(window).width();
    if (width > 767) {
      button.hide();
      rest.show();
    } else {
      button.show();
      rest.hide();
    }
  })


  button.on('click', function () {
    rest.slideToggle('slow');
    button.hide();

  })


});
