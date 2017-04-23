$(document).ready(() => {

  $('#siteNav').affix({
    offset: {
      top: 100
    }
  })

  $('.driverinfo').hide();

  $('#showdriver').click(() => {
    if (!$('#showdriver').hasClass('activebutton')) {
      $('.advertiserinfo').hide();
      $('.driverinfo').show();
      $('#showdriver').toggleClass('activebutton');
      $('#showadvertiser').toggleClass('activebutton');
    }
  });

  $('#showadvertiser').click(() => {
    if (!$('#showadvertiser').hasClass('activebutton')) {
      $('.driverinfo').hide();
      $('.advertiserinfo').show();
      $('#showdriver').toggleClass('activebutton');
      $('#showadvertiser').toggleClass('activebutton');
    }
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
    $('#driverbox1').animate({ 'marginTop': '+=5px' });
  });

  $('#driverbox1').mouseleave(() => {
    $('#driveicon1, #drivetitle1').css('color', '#221e1f');
    $('#driverbox1').animate({ 'marginTop': '-=5px' });
  });

  $('#driverbox2').mouseenter(() => {
    $('#driveicon2, #drivetitle2').css('color', '#F2D585');
    $('#driverbox2').animate({ 'marginTop': '+=5px' });
  });

  $('#driverbox2').mouseleave(() => {
    $('#driveicon2, #drivetitle2').css('color', '#221e1f');
    $('#driverbox2').animate({ 'marginTop': '-=5px' });
  });

  $('#driverbox3').mouseenter(() => {
    $('#driveicon3, #drivetitle3').css('color', '#D98661');
    $('#driverbox3').animate({ 'marginTop': '+=5px' });
  });

  $('#driverbox3').mouseleave(() => {
    $('#driveicon3, #drivetitle3').css('color', '#221e1f');
    $('#driverbox3').animate({ 'marginTop': '-=5px' });
  });

  $('#driverbox4').mouseenter(() => {
    $('#driveicon4, #drivetitle4').css('color', '#7CA689');
    $('#driverbox4').animate({ 'marginTop': '+=5px' });
  });

  $('#driverbox4').mouseleave(() => {
    $('#driveicon4, #drivetitle4').css('color', '#221e1f');
    $('#driverbox4').animate({ 'marginTop': '-=5px' });
  });
});
