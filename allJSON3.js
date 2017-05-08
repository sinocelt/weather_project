//doAllJSONStuff takes all the GPS stuff we get from the function doGPSStuff, and it then displays the various weather data to the user and so on.          
function doAllJSONStuff(json)
{
  //we need to now get the JSON data, and interpret it.
  //for example, from http://api.openweathermap.org/data/2.5/weather?lat=30.134737099999995&lon=-95.52601159999999&APPID=632f0b2cc3263cba86a79c732fba7510
  //openweathermap will give an object with data like:
  //{"coord":{"lon":-95.53,"lat":30.13},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"stations","main":{"temp":300.04,"pressure":1001,"humidity":65,"temp_min":298.15,"temp_max":301.15},"visibility":16093,"wind":{"speed":4.6,"deg":170,"gust":9.8},"clouds":{"all":90},"dt":1493162100,"sys":{"type":1,"id":2637,"message":0.0171,"country":"US","sunrise":1493120606,"sunset":1493168201},"id":4736476,"name":"The Woodlands","cod":200}
  
  //the openweathermap data will have a property called "weather". 
  //The "weather" property has its value a 1 element array with subproperties: "id", "main", "description", and "icon"
  //the "description" subproperty of "weather" gives a detailed description of the weather
  
  //now in the message class, delete everything and start writing the weather description and temporarily write the openweathermap URL where they got
  //their data from
  $(".message").html("<br><p>" + "the weather condition is <strong>" + json["weather"][0]["description"] + "</strong>" + "</p>");
  
  //getting weather icon info
  //openweathermap has a weather icon based on the data in the icon subproperty of "weather"
  //for example, if you had the data "icon":"04d", it represents the icon which is located at:
  //http://openweathermap.org/img/w/04d.png
  //all openweathermap icons start with http://openweathermap.org/img/w/, and will only differ based on different weather conditions
  var beginningWeatherIconURL = "http://openweathermap.org/img/w/";
  $(".message").append("<p><br>" + "<img src='" + beginningWeatherIconURL+json["weather"][0]["icon"] + ".png'>" + "</a></p>");
  $(".message").append("<br>your weather icon id is " + json["weather"][0]["icon"] +  "</br>");
  
  //city and country information of the user
  //the name of the city for the user is the value mapped to the property "name"
  //the "sys" property is mapped to another object which has subproperties: "type","id","message","country","sunrise","sunset"
  //json["sys"]["country"] will give you the country name of the user
  $(".message").append("<br><p>" + "your current city is <strong>" + json["name"] +"</strong> and your country is <strong>" + json["sys"]["country"] + "</strong>" + "<br></p>");
  
  //now give temperature information. Remember that openweathermap gives data in Kelvin for some reason, so we will need to convert the temperature
  //data based on whether the user wants the temperature information in Fahrenheit or Celsius
  //the weather info will be stored in the property "main" with subproperty "temp". Do not confuse the property "main" with the subproperty of "weather"
  //which is also called "main"
  //$(".message").append("<p><br>" + "Current temp in Kelvin is " + json["main"]["temp"] + "</p>");
  //???????????remember I made ourTemp a global variable earlier.... and the other 2 variables below.
  ourTemp = json["main"]["temp"];
  ourCTemp = kToC(ourTemp);
  ourFTemp = kToF(ourTemp);
  //openweathermap will give very precise temperature data with temperature to the hundrendth place. We don't need it to be so precise. Let's round
  //to the nearest tenths place
  
  //Math.round will round to the nearest ones place. But, to be able to round to a certain place such as the tenths place, there is a workaround
  //To round to the tenths place, multiply by 10 inside the Math.round and then outside of the parentheses divide by 10
  //for example, if we wanted to round 81.43 to the nearest tenths place, do the following
  //Math.round(81.43*10)/10; which will give us 81.4
  //again I made the following global
  ourRoundedCTemp = (Math.round(ourCTemp*10))/10;
  ourRoundedFTemp = (Math.round(ourFTemp*10))/10;
  
  //now set up an array of random colors, for use to randomly choosing background color
  var arrayOfColors = ["IndianRed","LightBlue","Tan","SlateGray","Tomato","powderblue","Peru","Turquoise"];
  var yourRandomColorNumber = Math.floor(Math.random() * (arrayOfColors.length));
  
  //document.getElementById("lastOne").style.backgroundImage = "url('https://cdn.pixabay.com/photo/2012/03/04/00/01/background-21717_960_720.jpg')";       
  
  
  //change the CSS of the background to whatever random color was randomly chosen
  //$("body").css("background-color", arrayOfColors[yourRandomColorNumber]);
  //$("body").css("background-image", url('https://cdn.pixabay.com/photo/2012/03/04/00/01/background-21717_960_720.jpg');
  
  //function changeBackgroundImage() {
  // document.getElementById("message").style.backgroundImage = "url('https://cdn.pixabay.com/photo/2012/03/04/00/01/background-21717_960_720.jpg')";
  //}
  
  //now try button to switch between F and C
  
  /*
  function changeTempDisplay(temp) {
  document.getElementById("tempDisplay").innerHTML = "<p>your temp in F is " + temp + "</p>";
  }
  */
  
  /*?????????????????var theTempChoice = prompt("Do you want the temperature in F or C? Enter F for Fahrenheit and C for Celcius");
  
  
  if (theTempChoice === 'F' || theTempChoice === 'f') {
  changeTempDisplayF(ourRoundedFTemp);
  }
  else if (theTempChoice === 'C' || theTempChoice === 'c') {
  changeTempDisplayC(ourRoundedCTemp);
  }?????????????????*/

  //below works for some reason
  //changeTempDisplaySample();
  
  /*now change the background image based on the icon*/
  var iconID = json["weather"][0]["icon"];
  
  /*the following ******************************
  ********************************************
  ********************************************
  is getting errors for some reason unknown to me */
  //document.write("iconID is ", iconID);
  /*if (iconID === '01d' || iconID === '01n')
  document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2012/03/04/00/01/background-21717_960_720.jpg')";
  }*/
  
  
  //document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2012/03/04/00/01/background-21717_960_720.jpg')";
  
  //changeTempDisplay(ourRoundedFTemp);
  //change content of blue button after first use of this program to "Get a weather report."
  $("#getCoordinates").text("Get a weather report.");

}
