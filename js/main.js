$(document).ready(function() {

  mdc.autoInit();

  $('#siteNav').affix({
    offset: {
      top: 100
    }
  })

  $('.driverinfo').hide();

  $('#showdriver').click(function() {
    if (!$('#showdriver').hasClass('activebutton')) {
      $('.advertiserinfo').hide();
      $('.driverinfo').show();
      $('#showdriver').toggleClass('activebutton');
      $('#showadvertiser').toggleClass('activebutton');
      $('#showdriver').toggleClass('inactivebutton');
      $('#showadvertiser').toggleClass('inactivebutton');
    }
  });

  $('#showadvertiser').click(function() {
    if (!$('#showadvertiser').hasClass('activebutton')) {
      $('.driverinfo').hide();
      $('.advertiserinfo').show();
      $('#showdriver').toggleClass('activebutton');
      $('#showadvertiser').toggleClass('activebutton');
      $('#showdriver').toggleClass('inactivebutton');
      $('#showadvertiser').toggleClass('inactivebutton');
    }
  });

  $('#bannerbutton').click(function() {
    $("#1").prop('selected', true);
  })


  $('#starterbutton').click(function() {
    $("#2").prop('selected', true);
  })

  $('#advancedbutton').click(function() {
    $("#3").prop('selected', true);
  })

  $('#commercialbutton').click(function() {
    $("#4").prop('selected', true);
  })

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

  $('#sendbutton, #signupbutton').click(function() {
    alert('Thanks! We will be in touch within 12 hours.');
  });

  $(function() {
    $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
    });
  });
});
