$(document).ready(function(){
    if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
        
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var api = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=118b8b6d0bfcb6b4cc3738cc48735712";
        console.log(api);
        
        $.getJSON(api, function(data){
            var kTemp = data.main.temp;
            var fTemp = Math.round(kTemp*(9/5)-459.67) + "&#8457";
            var cTemp = Math.round(kTemp -273) + "&#8451";
            var icon = data.weather[0].icon;
            
            $("#city").html(data.name);
            $("#ctemp").html(cTemp);
            $("#condition").html(data.weather[0].main);
            $("#condition").html(data.weather[0].main);
            
            var tempSwap = true;
            $("#ctemp").click(function(){
                if(tempSwap === true){
                    $("#ctemp").html(cTemp);
                    tempSwap = false;
                }else{
                    $("#ctemp").html(fTemp);
                    tempSwap = true;
                }
            });
            
            var sunny = '<div class="icon sunny"><div class="sun"><div class="rays"></div></div></div>';
            var rainy = '<div class="icon rainy"><div class="cloud"></div><div class="rain"></div></div>';
            var flurries = '<div class="icon flurries"><div class="cloud"></div><div class="snow"><div class="flake"></div><div class="flake"></div></div></div>';
            var cloudy = '<div class="icon cloudy"><div class="cloud"></div><div class="cloud"></div></div>';
            var thunderStorm = '<div class="icon thunder-storm"><div class="cloud"></div><div class="lightning"><div class="bolt"></div><div class="bolt"></div></div></div>';
            var sunShower = '<div class="icon sun-shower"><div class="cloud"></div><div class="sun"><div class="rays"></div></div><div class="rain"></div></div>';
            
            console.log(icon);
            if(icon === "01d" || icon === "01n"){
                $("#content2").append(sunny);
            }else if(icon === "03d" || icon === "03n"){
                $("#content2").append(cloudy);
            }else if(icon === "10d" || icon === "10n"){
                $("#content2").append(rainy);
            }else if(icon === "13d" || icon === "13n"){
                $("#content2").append(flurries);
            }else if(icon === "11d" || icon === "11n"){
                $("#content2").append(thunderStorm);
            }else if(icon === "09d" || icon === "09n"){
                $("#content2").append(sunShower);
            }else{
                var iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
                $("img").attr("src", iconUrl);
            }

        });

    });
  }else{
      $("h2").html("Cannot ready your location, please enable it.");
    }
});