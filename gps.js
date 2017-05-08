//doGPSStuff does the initial coordinate work, getting the coordinates and making the url to get the weather data from
function doGPSStuff(position) {
  //below is a sample URL for getting weather info without using coordinates. Just use the unique city ID.
  //http://api.openweathermap.org/data/2.5/weather?id=5368361&APPID=632f0b2cc3263cba86a79c732fba7510

  //below is an example URL for openweathermap.org with coordinates lat=30.134737099999995 and lon=-95.52601159999999
  //http://api.openweathermap.org/data/2.5/weather?lat=30.134737099999995&lon=-95.52601159999999&APPID=632f0b2cc3263cba86a79c732fba7510
          
  //generate the URL for the user's unique coordinates for openweathermap.org
  var beginningOpenWebMapUrl = "http://api.openweathermap.org/data/2.5/weather?";
  var theLatitudeCoord = position.coords.latitude;
  var theLongitudeCoord = position.coords.longitude;
  var myKey = "632f0b2cc3263cba86a79c732fba7510";
  var fullUrl = beginningOpenWebMapUrl + "lat=" + theLatitudeCoord + "&lon=" + theLongitudeCoord + "&APPID=" + myKey;

  //now finally get the JSON data from openweathermap.org which will give the weather data


  //now finally get the JSON data from openweathermap.org which will give the weather data
  //***************************************************
  //***************************************************
  //***************************************************
         
  //.ajax does more than .getJSON 
  //full .ajax$.ajax({dataType: "json", url: fullUrl, data: data,success: success});
  //$.ajax({dataType: "json", url: fullUrl, data: data,success: function(blah) { $("getCoordinates").html("<p>this is cool " + blah + "</p>") }});
   //below works 
  $.ajax({dataType: "json", url: fullUrl,success:doAllJSONStuff});

          //$.getJSON(fullUrl, doAllJSONStuff(json) {
           
          //});//end of  $.getJSON(fullUrl, function(json) {
        //});//end of navigator.geolocation.getCurrentPosition
}
