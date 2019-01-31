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
    document.getElementById("name").innerHTML = (JSON.stringify(myJson.name));
    document.getElementById("temp").innerHTML = (JSON.stringify(myJson.main.temp));
    document.getElementById("high").innerHTML = (JSON.stringify(myJson.main.temp_max));
    document.getElementById("low").innerHTML = (JSON.stringify(myJson.main.temp_min));
  })
}
