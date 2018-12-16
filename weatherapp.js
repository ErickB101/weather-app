//variables needed to construct the API url


var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var city;
var key = '&APPID=1a527944be3d59e1f8e027ff56139584';
var bridge = '&units=';
var unit;


/*This funtion basically retrieves data using the API and XMLHttpRequest.
  The data is then outputted through the divs in the html page*/
	
function retrieveData(city, unit) {
	
	var url = api + city + bridge + unit + key;
	
	var info = new XMLHttpRequest();
	
	info.open("GET", url, false);
	info.send(null);
	
	var result = JSON.parse(info.response);
	
    var temp = document.getElementById('temp');
	var name = document.getElementById('name');
	var windS = document.getElementById('windS');
	var humid = document.getElementById('humid');
	var icon = document.getElementById('icon');
	var descript = document.getElementById('descript');
	var descriptHolder;
	
	descriptHolder = result.weather[0].description;
	descript.innerText = descriptHolder;
	icon.src = 'http://openweathermap.org/img/w/' + result.weather[0].icon + '.png';
	name.innerHTML = 'Location: ' + result.name;
	temp.innerHTML = 'Temperature: ' + Math.floor(result.main.temp) + '&#176';
	windS.innerHTML = 'Wind Speed: ' + Math.floor(result.wind.speed) + 'm/s';
	humid.innerHTML = 'Humidity Level: ' + result.main.humidity + '%';
	
	
}


    
      /*I added an event listener to store specific values inside 2 variables when the submit button is clicked.
	  The retrieveData function will only be called if the variable city is not null*/
	  
    document.getElementById('submit').addEventListener('click', () => {
		
		city = document.getElementById('city').value;
	    unit = document.querySelector('input[name = "unit"]:checked').value;
		
		if(city) 
			retrieveData(city, unit);
	})
			
