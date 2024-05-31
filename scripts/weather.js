const get_weather = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Stoke-On-Trent&appid=c5b6cf05e8525851c86c0d72366bded7&units=metric`
    );
    const data = await response.json();
    console.log(data.main.temp);   
    document.getElementById('temp').innerHTML = "Temperature: "+data.main.temp+" ºc | "
    document.getElementById('feelsLike').innerHTML = `Feels like ${data.main.feels_like} ºc`
};
get_weather()
setInterval(get_weather,3600000)
