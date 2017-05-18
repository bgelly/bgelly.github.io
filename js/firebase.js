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
  console.log('hello worldddddddd')
  $('#loginbutton').click(function() {
    console.log('hello world')
  })
})
