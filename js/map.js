var mapCanvas = document.getElementById('map-canvas'); // JQUERY? for consistency
var mapCenter = new google.maps.LatLng(40.758896, -73.985130);

var styleArr = [{
  featureType: 'landscape',
  stylers: [{ saturation: -100 }, { lightness: 60 }]
}, {
  featureType: 'road.local',
  stylers: [{ saturation: -100 }, { lightness: 40 }, { visibility: 'on' }]
}, {
  featureType: 'transit',
  stylers: [{ saturation: -100 }, { visibility: 'simplified' }]
}, {
  featureType: 'administrative.province',
  stylers: [{ visibility: 'off' }]
}, {
  featureType: 'water',
  stylers: [{ visibility: 'on' }, { lightness: 30 }]
}, {
  featureType: 'road.highway',
  elementType: 'geometry.fill',
  stylers: [{ color: '#ef8c25' }, { lightness: 40 }]
}, {
  featureType: 'road.highway',
  elementType: 'geometry.stroke',
  stylers: [{ visibility: 'off' }]
}, {
  featureType: 'poi.park',
  elementType: 'geometry.fill',
  stylers: [{ color: '#b6c54c' }, { lightness: 40 }, { saturation: -40 }]
}];

var currentMap = new google.maps.Map(mapCanvas, {
  center: mapCenter,
  zoom: 12,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  styles: styleArr
});

function drawMarker(coords) {
  var latLng = new google.maps.LatLng(coords[0], coords[1]);
  var markerIcon = '../images/mapicon.png';
  var marker = new google.maps.Marker({
    icon: markerIcon,
    position: latLng
  });
  marker.setMap(currentMap);
  return marker;
}


// assign to window so available in account.js
window.drawMarker = drawMarker;

// window.adViewLocations.forEach(function(coors) {
//   drawMarker(coords);
// })
