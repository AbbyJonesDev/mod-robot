$(document).ready(function() {
  // When eyes button is clicked, toggle laser class on brain
  $(".flash").click(function() {
    $(".brain").toggleClass('laser');
  });

  // When color button is clicked...
  $(".color").click(function() {
    // assign each named color a random number 0-255
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
    
    // Generate an RGBA value from red, green, and blue
    var randomRGBA = 'rgba('+red+','+green+','+blue+',1)';
    
    //Display the three values in an alert window
    //alert(randomRGBA);
    
    $('body').css('background', randomRGBA);
  });

  $('.moves').click(function() {
    $('img').toggle();
  });

  $('.hide').click(function() {
    $('.robot').slideToggle();
  })

  // MOVEMENT
  $('.mv-up').click(function() {
    $('.robot').offset(
      { top: $('.robot').offset().top -= 10 }
      );
  });
  $('.mv-down').click(function() {
    $('.robot').offset(
      { top: $('.robot').offset().top += 10 }
      );
  });
  $('.mv-left').click(function() {
    $('.robot').offset(
      { left: $('.robot').offset().left -= 10 }
      );
  });
  $('.mv-right').click(function() {
    $('.robot').offset(
      { left: $('.robot').offset().left += 10 }
      );
  });

  // ROBOT COLOR
  $('#color-original').click(function() {
    $('.robot').removeClass('color-green');
    $('.robot').removeClass('color-yellow');
  })
  $('#color-green').click(function() {
    $('.robot').removeClass('color-yellow');
    $('.robot').addClass('color-green');
  })
  $('#color-yellow').click(function() {
    $('.robot').removeClass('color-green');
    $('.robot').addClass('color-yellow');
  });

  // TOGGLE CONTROL PANELS
  $('#control-toggle').click(function() {
    $('.control-panel').slideToggle();
  })
  $('#custom-toggle').click(function() {
    $('.custom-panel').slideToggle();
  })

  // USER CUSTOMIZATION
  $('input[type="submit"]').click(function() {
    event.preventDefault();
    $('#robot-name').text($('input[name="bot-name"]').val());
    var dbImg = $('select[name="db-img"]').val();
    $('img.db-img').attr("src", dbImg);
  });

})