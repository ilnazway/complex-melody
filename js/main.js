$(document).ready(function () {
  var currentFloor = '02';
  var floorPath = $(".main__image-group path");
  var counterButtonUp = $(".counter__button_up");
  var counterButtonDown = $('.counter__button_down');
  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor");
    currentFloor = $(this).attr("data-floor");
    $(".counter__floor").text(currentFloor);
  });

  counterButtonUp.on('click', function () {
    if ( currentFloor < 18 ) {
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGroupping: false });
      $(".counter__floor").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
    }
  });

  counterButtonDown.on('click', function () {
    if (currentFloor > 2 ) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGroupping: false });
      $(".counter__floor").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    
    }
  })

});