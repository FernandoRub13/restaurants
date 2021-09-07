var mymap = L.map('mapid').setView([19.29759, -99.22428], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
		'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	id: 'mapbox/streets-v11',
	tileSize: 512,
	zoomOffset: -1
}).addTo(mymap);

L.marker([19.29759, -99.22428]).addTo(mymap)
	.bindPopup("<b>¡La mejor casa del mundo!</b><br />I am a popup.").openPopup();

$.ajax({
	dataTypr: "json",
	url: "api/restaurants",
	success: function (result) {
		console.log(result);
		result.restaurants.forEach(restaurant => {
			L.marker(restaurant.location,).addTo(mymap)
				.bindPopup(`${ restaurant.name }`).openPopup();
		});
	}
});
// L.circle([19.29759,-99.22428], 500, {
// 	color: 'red',
// 	fillColor: '#f03',
// 	fillOpacity: 0.5
// }).addTo(mymap).bindPopup("I am a circle.");

// L.polygon([
// 	[51.509, -0.08],
// 	[51.503, -0.06],
// 	[51.51, -0.047]
// ]).addTo(mymap).bindPopup("I am a polygon.");


// var popup = L.popup();

// function onMapClick(e) {
// 	popup
// 		.setLatLng(e.latlng)
// 		.setContent("You clicked the map at " + e.latlng.toString())
// 		.openOn(mymap);
// }

mymap.on('click', onMapClick);