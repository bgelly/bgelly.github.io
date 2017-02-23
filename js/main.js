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
});
