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

  $('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})
});
