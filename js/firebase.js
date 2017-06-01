var config = {
  apiKey: "AIzaSyCk93QI28nBqCzL0ioly4PZru_sN9A4dr4",
  authDomain: "rideo-732af.firebaseapp.com",
  databaseURL: "https://rideo-732af.firebaseio.com",
  projectId: "rideo-732af",
  storageBucket: "rideo-732af.appspot.com",
  messagingSenderId: "431154143360"
};
firebase.initializeApp(config);

$(document).ready(() => {
  $('#loginbutton').on('click', function(e) {
    e.preventDefault();

    // loggin in user
    if ($('#loginEmail').val() != '' && $('#loginPassword').val() != '') {
      var userEmail = $('#loginEmail').val();
      var userPassword = $('#loginPassword').val();

      firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
        .then(function(data) {
          // successful login, redirect to correct account page
          if ($('#mainheader').text() === 'Drive Your Business.') {
            window.location = "pages/account.html"
          } else {
            window.location = "account.html";
          }
        })
        .catch(function(error) {
          // error handling
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log('Error: ', errorCode, " - ", errorMessage)
        });
    }
  });

  $('#logoutbutton').on('click', function(e) {
    e.preventDefault();

    // logging out user
    firebase.auth().signOut()
      .then(function() {
        $('#logoutbutton').text(function() { return 'Logged Out!'});
        $('#logouttitle').text(function() { return 'Logged Out!'});

        // depending on page location, redirect correctly to home page
        if ($('#mainheader').text() === 'Drive Your Business.') {
          window.location = "index.html";
        } else {
          window.location = "../index.html";
        }
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('Error: ', errorCode, " - ", errorMessage)
      });
  });
})

// upon page load, check if a user is logged in
firebase.auth().onAuthStateChanged(function(user) {
  // User is signed in.
  if (user) {
    // put user information on window to be used by account.js script
    window.userEmail = user.email;

    // depending on page location, append & hide correct nav elements
    if ($('#mainheader').text() === 'Drive Your Business.') {
      $('ul.navbar-nav').append('<li><a href="pages/account.html">Account</a></li><li><a href="#" data-toggle="modal" data-target="#modal-logout">Logout</a></li>');
    } else if ($('#mainheader').text().slice(0, 10) === 'Loading...') {
      $('ul.navbar-nav').append('<li><a href="#" data-toggle="modal" data-target="#modal-logout">Logout</a></li>');
    } else {
      $('ul.navbar-nav').append('<li><a href="account.html">Account</a></li><li><a href="#" data-toggle="modal" data-target="#modal-logout">Logout</a></li>');
    }
    $('#loginlink').hide();
  }
});

