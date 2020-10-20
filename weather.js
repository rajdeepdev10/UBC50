//gets the location of the user using the getCurrentPosition() js function 
function getLocation(callback) 
{
    if (!navigator.geolocation) //if doesn't get geolocation
    {
        console.log("Geolocation is not supported by this browser.");
        return 1;
    }

    navigator.geolocation.getCurrentPosition(userPosition); //.getCurrentPosition() needs a function to be called 

    //this function callbacks the lat, long values to the getLocation function
    function userPosition(position)
    {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        callback(lat, long);
    }
}

//this time calls api with location details to get weather data for currentlocation and for ubc
getLocation(function (lat, long){
    const apiKey = "c68ceb5fb0dcb9d385e672c60892fdc9";
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;

    //ubc lat, long values
    const ubc_lat = 49.2606;
    const ubc_long = -123.2460;
    const ubc_api = `https://api.openweathermap.org/data/2.5/weather?lat=${ubc_lat}&lon=${ubc_long}&appid=${apiKey}&units=metric`;

    //fetches api weather data for current location
    fetch(api)
      .then(response => response.json())
      .then(data => {
          //console.log(data);

          const icon_code = data.weather[0].icon;
          document.getElementById("weather-icon").src = `http://openweathermap.org/img/wn/${icon_code}.png`;

          document.getElementById("temperature").innerHTML = `${data.main.temp}&#8451;`;
          //console.log(data.main.temp)
      });

      //fetches api weather data for ubc
      fetch(ubc_api)
      .then(response => response.json())
      .then(data => {
          console.log(data);

          const icon_code = data.weather[0].icon;
          document.getElementById("ubc-weather-icon").src = `http://openweathermap.org/img/wn/${icon_code}.png`;

          document.getElementById("ubc-temperature").innerHTML = `${data.main.temp}&#8451;`;
          console.log(data.main.temp)
      });

});
