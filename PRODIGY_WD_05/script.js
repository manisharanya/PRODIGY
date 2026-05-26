function searchWeather(){

    const city =
    document.getElementById("cityInput").value.toLowerCase();

    if(city === ""){

        alert("Please enter city name");

        return;
    }

    if(city === "hyderabad"){

        document.getElementById("cityName").innerText =
        "Hyderabad";

        document.getElementById("temperature").innerText =
        "32°C";

        document.getElementById("weatherType").innerText =
        "Sunny";

        document.getElementById("humidity").innerText =
        "Humidity: 45%";

        document.getElementById("wind").innerText =
        "Wind Speed: 12 km/h";

        document.getElementById("weatherImage").src =
        "https://cdn-icons-png.flaticon.com/512/869/869869.png";
    }

    else if(city === "delhi"){

        document.getElementById("cityName").innerText =
        "Delhi";

        document.getElementById("temperature").innerText =
        "28°C";

        document.getElementById("weatherType").innerText =
        "Cloudy";

        document.getElementById("humidity").innerText =
        "Humidity: 60%";

        document.getElementById("wind").innerText =
        "Wind Speed: 8 km/h";

        document.getElementById("weatherImage").src =
        "https://cdn-icons-png.flaticon.com/512/414/414825.png";
    }

    else{

        alert("City data not available");
    }
}