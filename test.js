//JSON call for Open weather API
var weather = function(lat, lon){
  var apiKey = "&appid=10ddf1a5e1f2aa9f4b606d5025f56ed5";
  var api ='http://api.openweathermap.org/data/2.5/weather?lat=' +lat+'&lon=' +long+ apiKey;
  $.getJSON(api,function(data){
    var weatherType= data.weather[0].description;

    //Temperature in Kelvin
    var tempSwap=true;
    var kTemp= data.main.temp;
    cTemp= (kTemp-273).toFixed(1);
    fTemp= (kTemp*(9/5)-459.67).toFixed(1);

    //Other Stuff
    var windSpeed= data.wind.speed;
    var humidity = data.main.humidity;
    var pressure = data.main.pressure;
    var city = data.name;
    var sunriseTime= data.sys.sunrise;
    sunriseTime=
    console.log(sunriseTime);


    //Writing them to Html
    $("#city").html(city);
    $("#weatherType").html(weatherType);
    $("#fTemp").html(fTemp);
    $("#fTemp").click(function() {
      if (tempSwap===false){
        $("#fTemp").html(cTemp);
        tempSwap=true;
      }
      else {
        $("#fTemp").html(fTemp);
        tempSwap=false;
      }
    });
    windSpeed =(2.237*(windSpeed)).toFixed(1);
    $(".windSpeed").html(windSpeed + " mph");
    $(".humidity").html(humidity + " %");
    $(".pressure").html(pressure + " hPa");

    /*Sunset and sunriseTimeTime

    var sunsetDt = new Date (sunsetUTC);
    $('.').html((sunriseTime.getHours()>12?(sunriseTime.getHours()-12):sunriseTime.getHours()).toString() + ":" + ((sunriseTime.getMinutes() < 10 ? '0' : '').toString() + sunriseTime.getMinutes().toString()) + (sunriseTime.getHours() < 12 ? ' AM' : ' PM').toString());
    $('.sunset-time').html((sunsetDt.getHours()>12?(sunsetDt.getHours()-12):sunsetDt.getHours()).toString() + ":" + ((sunsetDt.getMinutes() < 10 ? '0' : '').toString() + sunsetDt.getMinutes().toString()) + (sunsetDt.getHours() < 12 ? ' AM' : ' PM').toString());
    //$('.').html(data.sys.sunriseTime);
    // $('.sunset-time').html(json.sys.sunset);  */

    //DATE AND TIME//
    //Converted into days, months, hours, day-name, AM/PM
    //Understood it but it took too long to code.
    var dt = new Date()
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    $('#day').html(days[dt.getDay()]);
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    $('#date').html(months[dt.getMonth()] + " " + dt.getDate() + ", " + dt.getFullYear());
    $('#time').html((dt.getHours()>12?(dt.getHours()-12):dt.getHours()).toString() + ":" + ((dt.getMinutes() < 10 ? '0' : '').toString() + dt.getMinutes().toString()) + (dt.getHours() < 12 ? ' AM' : ' PM').toString());

  });
};
