
var h1_place=document.getElementById("place");
var p_sky=document.getElementById("skyconditions");
var p_temp=document.getElementById("temprature");
var p_windspeed=document.getElementById("windspeed");
// function NoDataFound(){
//     document.getElementById("display").innerText="No data Foound!";
// }
const weather_report=(e)=>{
    e.preventDefault();
    var input=document.getElementById("input");
    if(input.value===""){
    alert("Add city name");
    }
    var apiKey="1f875d8bd63b358dc7f79f73c47ff7ae";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}`)
    .then((data)=>{
       return data.json(); 
    })
    // .catch(()=>{
    //     console.log("error");
    // })
    .then((data)=>{
    h1_place.innerHTML = data.name.fontcolor("yellow");
    p_sky.innerHTML= data.weather[0].description.fontcolor("red");
    p_temp.innerHTML=data.main.temp;
    p_temp.style.color="red";
    p_windspeed.innerHTML=data.wind.speed; 
    p_windspeed.style.color="red";
    document.getElementById("display").style.display="block";
    })
    .catch(()=>{
        // NoDataFound();
        console.log("Error");
    })
 
}
document.getElementById("submit").addEventListener('submit',weather_report);
