if (navigator.geolocation) {
  		navigator.geolocation.getCurrentPosition(showPosition);
  	} else {
  		alert('Geolocation is not supported in your browser');
  	}

function showPosition(position) {
	var api = "https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + 
	"&lon=" + position.coords.longitude;

	fetch(api).then(function(response) {
    	return response.json();
  })
  .then(function(myJson) {
    document.getElementById("data").innerHTML = (JSON.stringify(myJson.name));
  })
}
