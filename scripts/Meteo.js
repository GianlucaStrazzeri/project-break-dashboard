                          //meteo.js
let apiKey = ["77e828056a1d4ceea61213842231912"];
let city= ["Alicante - Spain"];
let meteo1día=document.getElementById("meteo1día");
let temperatura=document.getElementById("temperatura");

const fetchData = async () => {
  let city= ["Alicante - Spain"];
  try{
    
 const response = await fetch (`https://api.weatherapi.com/v1/current.json?key=77e828056a1d4ceea61213842231912&q=${city}&aqi=no`);
 if (!response.ok) {
 throw new Error (`Error`);
}
const data = await response.json();
//console.log(data);
//Object.values() permite sacar como array los datos de un objeto
const locationArr= (Object.values(data.location));
const currentArr= (Object.values(data.current));
//console.log(Object.values(data.location));
//console.log(Object.values(data.current));
const icon=(currentArr[5].icon);

temperatura.innerHTML= `<img src="https:${icon}"> <br>
${locationArr[0]}   ${locationArr[2]}
<p> Temperatura: ${currentArr[2]}</p>
<p> Humedad: ${currentArr[6]} % </p>
<p> Viento por Hora: ${currentArr[21]} km/h </p>
 `;


}catch (error){
console.error(error);
}
}

fetchData();












const fetchDataTomorrow = async () => {
   city= ["Alicante - Spain"];
  try{
    
 const responseTomorrow = await fetch (`https://api.weatherapi.com/v1/future.json?key=77e828056a1d4ceea61213842231912&q=Alicante - Spain&dt=2024-01-25`);
 if (!responseTomorrow.ok) {
 throw new Error (`Error`);
}
const dataTomorrow = await responseTomorrow.json();
console.log(dataTomorrow);
const forecastArrTomorrow= (Object.values(dataTomorrow.forecast));

console.log(forecastArrTomorrow);

console.log(forecastArrTomorrow[0]);
const forecastArrTomorrow0= (Object.values(forecastArrTomorrow[0]));
console.log(forecastArrTomorrow0[0]);
console.log(forecastArrTomorrow0[0].day.condition.icon);

const iconTomorrow=(forecastArrTomorrow0[0].day.condition.icon);

meteo1día.innerHTML= `<img src="https:${iconTomorrow}"> <br>`;


}catch (error){
console.log(error);
}
}

fetchDataTomorrow();



