function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -38.112313, lng: 146.300610},
    zoom: 11,
    disableDefaultUI: true,
  });
  map.setTilt(45);

  var marker = new google.maps.Marker({
  	position: {lat: -38.095724, lng: 145.973970},
  	map: map
  });

  var infoWindow = new google.maps.InfoWindow({
  	content: "<p id='pos'>We are here</p>"
  });

  infoWindow.open(map, marker);
}