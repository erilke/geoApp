var fn = {
	ready: function (){
		document.addEventListener("deviceready", fn.init, false);
	},

	init: function (){
		alert("init")
		geo.getPosition();
	},

	drawMap: function(lat,lon){
				//Posición del mapa
		var latlng = new google.maps.LatLng(lat, lon);
		var myOptions = {
			zoom: 8,
			center: latlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
		//Marcador
		var marker = new google.maps.Marker({
			position: latlng, 
			map: map, 
			title:"Mi posición"
		});
	}

};

// este es el document ready mínima
$(fn.ready);