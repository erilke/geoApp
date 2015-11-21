var geo = {

	getPosition: function(){
		navigator.geolocation.getCurrentPosition(geo.success, geo.error);
	},

	success: function(pos){
		// alert('Latitude: ' + pos.coords.latitude + '\n' + 'Longitude: ' + pos.coords.longitude + '\n');

		fn.drawMap(pos.coords.latitude,pos.coords.longitude);
	},

	error: function(err){
		alert(err.code);
	}
};