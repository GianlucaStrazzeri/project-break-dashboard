                          //meteo.js
let apiKey = ["77e828056a1d4ceea61213842231912"];
let city= ["Alicante - Spain"];
let temperatura=document.getElementById("temperatura");
let meteo1día=document.getElementById("meteo1día");



const fetchData = async () => {
  let city= ["Alicante - Spain"];
  try{
    
 const response = await fetch (`https://api.weatherapi.com/v1/current.json?key=77e828056a1d4ceea61213842231912&q=${city}&aqi=no`);
 if (!response.ok) {
 throw new Error (`Error`);
}
const data = await response.json();
//Object.values() permite sacar como array los datos de un objeto
const locationArr= (Object.values(data.location));
const currentArr= (Object.values(data.current));
const icon=(currentArr[5].icon);

temperatura.innerHTML= `<img src="https:${icon}"> <br>
${locationArr[0]}   ${locationArr[2]}
<p> Temperatura: ${currentArr[2]}</p>
<p> Humedad: ${currentArr[6]} % </p>
<p> Viento por Hora: ${currentArr[21]} km/h </p>`;
}catch (error){
console.error(error);
}
}

fetchData();












const fetchDataTomorrow = async () => {
  let today=[`2024-12-25`]
  try{   
 const responseTomorrow = await fetch (`https://api.weatherapi.com/v1/future.json?key=77e828056a1d4ceea61213842231912&q=Alicante - Spain&dt=${today}`);
 if (!responseTomorrow.ok) {
 throw new Error (`Error`);
}
const dataTomorrow = await responseTomorrow.json();
const forecastArrTomorrow= (Object.values(dataTomorrow.forecast));
const forecastArrTomorrow0= (Object.values(forecastArrTomorrow[0]));
const iconTomorrow=(forecastArrTomorrow0[0].day.condition.icon);
const maxTemperaturaTomorrow=(forecastArrTomorrow0[0].day.maxtemp_c);
meteo1día.innerHTML+= `<div class="meteo-container">
${forecastArrTomorrow0[0].date}
${maxTemperaturaTomorrow} &#176;
 <img src="https:${iconTomorrow}"> <br>
 </div>`;
}catch (error){
console.log(error);
}
}

fetchDataTomorrow();










const fetchDataTwodays = async () => {
  let today=[`2024-12-25`]
  try{   
 const responseTomorrow = await fetch (`https://api.weatherapi.com/v1/future.json?key=77e828056a1d4ceea61213842231912&q=Alicante - Spain&dt=${today}`);
 if (!responseTomorrow.ok) {
 throw new Error (`Error`);
}
const dataTomorrow = await responseTomorrow.json();
const forecastArrTomorrow= (Object.values(dataTomorrow.forecast));
const forecastArrTomorrow0= (Object.values(forecastArrTomorrow[0]));
const iconTomorrow=(forecastArrTomorrow0[0].day.condition.icon);
const maxTemperaturaTomorrow=(forecastArrTomorrow0[0].day.maxtemp_c);
meteo1día.innerHTML+= `<div class="meteo-container">
${forecastArrTomorrow0[0].date}
${maxTemperaturaTomorrow} &#176;
 <img src="https:${iconTomorrow}"> <br>
 </div>`;
}catch (error){
console.log(error);
}
}

fetchDataTwodays();






const fetchDataThreedays = async () => {
  try{  
 const responseTomorrow = await fetch (`https://api.weatherapi.com/v1/future.json?key=77e828056a1d4ceea61213842231912&q=Alicante - Spain&dt=2024-01-27`);
 if (!responseTomorrow.ok) {
 throw new Error (`Error`);
 }
 const dataTomorrow = await responseTomorrow.json();
 const forecastArrTomorrow= (Object.values(dataTomorrow.forecast));
 console.log(forecastArrTomorrow);
 const forecastArrTomorrow0= (Object.values(forecastArrTomorrow[0]));
 const iconTomorrow=(forecastArrTomorrow0[0].day.condition.icon);
 const maxTemperaturaTomorrow=(forecastArrTomorrow0[0].day.maxtemp_c);
 meteo1día.innerHTML+= ` <div class="meteo-container">
 ${forecastArrTomorrow0[0].date}
 ${maxTemperaturaTomorrow} &#176;
  <img src="https:${iconTomorrow}"> <br>
  </div>`;
 }catch (error){
 console.log(error);
 }
 }
 
 fetchDataThreedays();





