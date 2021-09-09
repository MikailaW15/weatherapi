var button = document.getElementById('searchbutton')
var searchbox = document.getElementById('searchbox')


button.addEventListener('click', function(){
    // alert("i have been clicked")
    var citysearch = searchbox.value
    console.log(citysearch)
    getCurrentWeather(citysearch)
}) 

function getCurrentWeather(cityName){
    var getCurrentWeatherApi = "https://api.openweathermap.org/data/2.5/weather?q="+ cityName +"&appid=7504c76ba45d2c4368c2449263319d4a&units=metric"
    fetch(getCurrentWeatherApi)
    .then(response =>{
        return response.json()
    })
    .then(data => {
        var tempValue = data.main.temp
        console.log(tempValue)
        console.log(data)
    }) 
}
