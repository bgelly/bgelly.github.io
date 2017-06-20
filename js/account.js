 // query firebase using the user information put on the window in firebase.js
 var advertisersRef = firebase.database().ref().child('advertisers_may');
 var query = advertisersRef.orderByKey();


query.on('value', function(snapshot) {
  //pull keys of snapshot in an array, filter for correct business -- deep queries?
  var businessValues = snapshot.val();
  var correctBusinessHash = Object.keys(businessValues).filter(function(businessHash) {
    return businessValues[businessHash].email === window.userEmail });

  var foundBusinessObj = businessValues[correctBusinessHash];

  // conditionally render different pay buttons
  if (foundBusinessObj.business_name === "Feltraiger") {
    $('#90pay').show();
  } else if (foundBusinessObj.business_name === "Artists & Fleas") {
    $('#180pay').show();
  } else {
    $('#normalpay').show();
  }

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
    return foundBusinessObj.num_of_views.toString() + " views in the last month";
  })

  $('#par4').text(function() {
    return foundBusinessObj.total_air_time.toString() + " total hours of air time";
  })

  $('#par5').text(function() {
    return foundBusinessObj.unique_views.toString() + " unique views";
  })

  var peakDayVal = 0;
  var peakDay = "";
  for (var key in foundBusinessObj.avg_view) {
    if (foundBusinessObj.avg_view[key] > peakDayVal) {
      peakDayVal = foundBusinessObj.avg_view[key];
      peakDay = key;
    }
  }

  $('#par6').text(function() {
    return "Peak day: " + peakDay;
  })

  // pull out clicks, latlongs of all ad view data for this business
  var totalClicks = 0;


  var adViewLocations = [];

  for (var key in foundBusinessObj.ad_views) {
    var latLongString = foundBusinessObj.ad_views[key].location;
    var latLongNumbers = latLongString.split(',').map(function(numString) {
      return parseFloat(numString);
    });

    adViewLocations.push(latLongNumbers);
    totalClicks += foundBusinessObj.ad_views[key].clicks;
  }

  // draw google maps markers for each latlong using the drawMarker function from map.js
  adViewLocations.forEach(function(coords) {
    window.drawMarker(coords);
  });
});

