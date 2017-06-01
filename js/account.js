 // query firebase using the user information put on the window in firebase.js
 var advertisersRef = firebase.database().ref().child('advertisers');
 var query = advertisersRef.orderByKey();

query.on('value', function(snapshot) {
  //pull keys of snapshot in an array, filter for correct business -- deep queries?
  var businessValues = snapshot.val();
  var correctBusinessHash = Object.keys(businessValues).filter(function(businessHash) {
    return businessValues[businessHash].email === window.userEmail });

  var foundBusinessObj = businessValues[correctBusinessHash];
  console.log('correct business found: ', foundBusinessObj);
  // set header to welcome that user
  $('#mainheader').text(function() {
    return 'Welcome, ' + foundBusinessObj.business_name;
  });

  // set header paragraphs to have correct text values
  $('#par1').text(function() {
    return foundBusinessObj.business_name;
  })

  $('#par2').text(function() {
    return foundBusinessObj.email;
  })

  $('#par3').text(function() {
    return foundBusinessObj.num_of_views.toString() + " ad views";
  })

});

