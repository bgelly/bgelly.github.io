$(document).ready(() => {
  $('#driverinfo').hide();

  $('#showdriver').click(() => {
    $('#advertiserinfo').hide();
    $('#driverinfo').show();
  });

  $('#showadvertiser').click(() => {
    $('#driverinfo').hide();
    $('#advertiserinfo').show();
  });

  $('#myModal').on('shown.bs.modal', function() {
    $('#myInput').focus()
  });

  function toggleIcon(e) {
    $(e.target)
      .prev('.panel-heading')
      .find(".more-less")
      .toggleClass('glyphicon-plus glyphicon-minus');
  }

  $('.panel-group').on('hidden.bs.collapse', toggleIcon);
  $('.panel-group').on('shown.bs.collapse', toggleIcon);

  $(function() {
    $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
    });
  });

  $('.carousel').carousel({
    interval: 5000
  })

  $('#driverbox1').mouseenter(() => {
      $('#driveicon1, #drivetitle1').css('color', '#7CA689');
  });

  $('#driverbox1').mouseleave(() => {
    $('#driveicon1, #drivetitle1').css('color', '#221e1f');
  });

  $('#driverbox2').mouseenter(() => {
    $('#driveicon2, #drivetitle2').css('color', '#7CA689');
  });

  $('#driverbox2').mouseleave(() => {
    $('#driveicon2, #drivetitle2').css('color', '#221e1f');
  });

  $('#driverbox3').mouseenter(() => {
    $('#driveicon3, #drivetitle3').css('color', '#7CA689');
  });

  $('#driverbox3').mouseleave(() => {
    $('#driveicon3, #drivetitle3').css('color', '#221e1f');
  });
});
