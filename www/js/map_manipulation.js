$('#map-canvas').css({
	height : window.innerWidth,
	width : '100%'
});

var pritampura = {
	lat : 28.7010246,
	lng : 77.1609038
};

function initialize() {
	var map = new google.maps.Map(document.getElementById('map-canvas'), {
		zoom : 15,
		center : pritampura
	});

	// Add a marker at the center of the map.
	addMarker(pritampura, map);
}

// Adds a marker to the map.
function addMarker(location, map) {
	// Add the marker at the clicked location, and add the next-available label
	// from the array of alphabetical characters.
	var marker = new google.maps.Marker({
		position : location,
		title : "Esteem Motor",
		map : map
	});
}


$(document).on('pageshow', '#contact', initialize); 