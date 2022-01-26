function fetchWeather(){
    let location=place.value;


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7271f4af8179cb40fc33605b77d36303&units=metric`).then(res=>{
        if(res.ok){
            return res.json()
        }
        else{
            throw new Error("faild to fetch data from resource")
        }
    }).then(data=>displayData(data)).catch(err=>console.log(error.message))
}
function displayData(data){
    console.log(data.main.temp_max);
    let temp=data.main.temp;
    let locationName=data.name;
    let minTemp=data.main.temp_min;
    let maxTemp=data.main.temp_max;
    let typeWeather=data.weather[0].main;
    let windSpeed=data.wind.speed;
    console.log(temp,locationName,minTemp,maxTemp,typeWeather,windSpeed);
    let htmldata=``
    htmldata+=`
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${locationName}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${typeWeather}</h6>
      <p class="card-text">Minimum Temperature:${minTemp} Maximum Temperature:${maxTemp}</p>
      <h6 class="card-link">Temperatur:${temp}</h6>
      <h6 class="card-link">${windSpeed}</h6>
    </div>
  </div>
    `
    document.querySelector("#result").innerHTML=htmldata
}

