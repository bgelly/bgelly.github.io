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
  })
})

// upon redirect, check if a user is logged in
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log('theres a user!')
      // User is signed in.
    var displayName = user.displayName;
    var userEmail = user.email;

    console.log(userEmail)

    var ref = firebase.database().ref('advertisers');
    ref.orderByChild("email")
    .equalTo(userEmail)
    .on('child_added', function(snap) {
       console.log('success', snap);
    });
    // var emailVerified = user.emailVerified;
    // var photoURL = user.photoURL;
    // var isAnonymous = user.isAnonymous;
    // var uid = user.uid;
    // console.log(user)

    // var advertisers = firebase.database().ref('advertisers');
    // console.log('advertisers: ', advertisers)
    // ...
  } else {
    // User is signed out.
    // ...
  }
});
