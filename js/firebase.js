var config = {
  apiKey: "AIzaSyCk93QI28nBqCzL0ioly4PZru_sN9A4dr4",
  authDomain: "rideo-732af.firebaseapp.com",
  databaseURL: "https://rideo-732af.firebaseio.com",
  projectId: "rideo-732af",
  storageBucket: "rideo-732af.appspot.com",
  messagingSenderId: "431154143360"
};
firebase.initializeApp(config);


// upon redirect, check if a user is logged in
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log('theres a user!')
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    console.log(user)
    // ...
  } else {
    // User is signed out.
    // ...
  }
});

$(document).ready(() => {
  $('#loginbutton').on('click', function(e) {
    e.preventDefault();
    // $('#loginModal').modal('hide');
    // $('#messageModalLabel').html('<span class="text-center text-info"><i class="fa fa-cog fa-spin"></i></span>');
    // $('#messageModal').modal('show');

    if ($('#loginEmail').val() != '' && $('#loginPassword').val() != '') {
      console.log('in if')
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


      // dbRef.authWithPassword({
      //   email: $('#loginEmail').val(),
      //   password: $('#loginPassword').val()
      // }, function(error, authData) {
      //   if (error) {
      //     console.log("Login Failed!", error);
      //     $('#messageModalLabel').html('<span class="text-danger">ERROR: ' + error.code + '</span>')
      //   } else {
      //     console.log("Authenticated successfully with payload:", authData);
      //     auth = authData;
      //     $('#messageModalLabel').html('<span class="text-center text-success">Success!</span>')
      //     setTimeout(function() {
      //       $('#messageModal').modal('hide');
      //       $('.unauthenticated, .userAuth').toggleClass('unauthenticated').toggleClass('authenticated');
      //       contactsRef
      //         .child(auth.uid)
      //         .on("child_added", function(snap) {
      //           console.log("added", snap.key(), snap.val());
      //           $('#contacts').append(contactHtmlFromObject(snap.val()));
      //         });
      //     })
      //   }
      // });
    } else {
      console.log('nope')
    }
  })
})
