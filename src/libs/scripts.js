import $ from 'jquery';
$('document').ready(function() {

  function checkIfLoaded () {
  if($('#loader').is(':visible')){
    $(".list-button").click(function(e) {
      $('.active-movie').removeClass('active-movie');
      $(this).closest( "li" ).addClass('active-movie');
      if($( window ).width()<990){
        $("html, body").animate({
          scrollTop: $("#loader").offset().top}, "slow");
      }
     });
  }
  else {
    setTimeout(checkIfLoaded, 50);
  }
  }

  var moved = -1;

  $("#scroll").click(function() {
    var y = $(document).scrollTop();
    var a = $(".active-movie");
    var scroll = 0;
    if((a.length >0 )){
      var top = a.position().top;
      if(top<y){
        scroll = top;
      }
    }
    $("html, body").animate({
      scrollTop: scroll
    }, "slow");
    return false;
  });

  $(document).scroll(function() {
    var y = $(this).scrollTop();
    var x = $(window).width();
    if (y > 100) {
      $('#scroll').fadeIn();
    }
    else {
      $('#scroll').fadeOut();
    }
  });

  $(".input").keypress(function(e) {
    if(e.which == 13) {
      $(".input").blur();
      checkIfLoaded();
    }
  });
});
