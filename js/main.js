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
  })

  function toggleIcon(e) {
    $(e.target)
      .prev('.panel-heading')
      .find(".more-less")
      .toggleClass('glyphicon-plus glyphicon-minus');
  }

$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);
});
