 // query firebase using the user information put on the window in firebase.js
 var advertisersRef = firebase.database().ref().child('advertisers');
 var query = advertisersRef.orderByKey();

query.on('value', function(snapshot) {
  //pull keys of snapshot in an array, filter for correct business -- deep queries?
  var businessValues = snapshot.val();
  var correctBusinessHash = Object.keys(businessValues).filter(function(businessHash) {
    return businessValues[businessHash].email === window.userEmail });

  var foundBusinessObj = businessValues[correctBusinessHash];

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

  // pull out clicks, latlongs of all ad view data for this business
  var totalClicks = 0;

  // assign to window so it can be used in the maps.js file
  var adViewLocations = [];
  for (var key in foundBusinessObj.ad_views) {
    var latLongString = foundBusinessObj.ad_views[key].location;
    var latLongNumbers = latLongString.split(',').map(function(numString) {
      return parseFloat(numString);
    });

    adViewLocations.push(latLongNumbers);
    totalClicks += foundBusinessObj.ad_views[key].clicks;
  }

  adViewLocations.forEach(function(coords) {
    window.drawMarker(coords);
  })
});

