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

    if ($('#loginEmail').val() != '' && $('#loginPassword').val() != '') {
      var userEmail = $('#loginEmail').val();
      var userPassword = $('#loginPassword').val();

      firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
        .then(function(data) {
          // successful login, redirect to login page
          window.location = "pages/data.html"
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
    firebase.auth().signOut().then(function() {
      $('#logoutmodaltitle').text(function() { return 'Logged Out!'});
      $('#logoutbutton').hide();
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

// upon redirect, check if a user is logged in
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // depending on page location, append correct nav elements
    if ($('#mainheader').text() === 'Drive Your Business.') {
      $('ul.navbar-nav').append('<li><a href="pages/data.html">Account</a></li><li><a href="#" data-toggle="modal" data-target="#modal-logout">Logout</a></li>');
    } else {
      $('ul.navbar-nav').append('<li><a href="data.html">Account</a></li><li><a href="#" data-toggle="modal" data-target="#modal-logout">Logout</a></li>');
    }

    // remove login nav element, because a user is logged in
    $('#loginlink').hide();
    console.log('theres a user!')
      // User is signed in.
    var displayName = user.displayName;
    var userEmail = user.email;

    console.log(userEmail)

    //order by hash then search those children by the email?

    var advertisersRef = firebase.database().ref().child('advertisers');

    var query = advertisersRef.orderByKey().limitToFirst(10);

    query.on('value', function(snapshot) {
      //pull keys of snapshot in an array, filter for correct business -- deep queries?
      var businessValues = snapshot.val();
      var correctBusinessHash = Object.keys(businessValues).filter(function(businessHash) { return businessValues[businessHash].email === userEmail });

      console.log('correct business found: ', businessValues[correctBusinessHash]);
    })



    // var emailVerified = user.emailVerified;
    // var photoURL = user.photoURL;
    // var isAnonymous = user.isAnonymous;
    // var uid = user.uid;
    // console.log(user)

    // console.log('advertisers: ', advertisers)
    // ...
  } else {
    // User is signed out.
    // ...
  }
});

