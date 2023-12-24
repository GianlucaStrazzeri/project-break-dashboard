let apiKey = ["77e828056a1d4ceea61213842231912"];
let city= ["Alicante - Spain"];
let ciudad=document.getElementById("ciudad");
let temperatura=document.getElementById("temperatura");



const fetchData = async () => {
  let city= ["Alicante - Spain"];
  try{
    
 const response = await fetch (`https://api.weatherapi.com/v1/current.json?key=77e828056a1d4ceea61213842231912&q=${city}&aqi=no`);
 if (!response.ok) {
 throw new Error (`Error`);
}
const data = await response.json();
console.log(data);
//Object.values() permite sacar como array los datos de un objeto
const locationArr= (Object.values(data.location));
const currentArr= (Object.values(data.current));
console.log(Object.values(data.location));
console.log(Object.values(data.current));
const icon=(currentArr[5].icon);
ciudad.innerHTML=locationArr[0]+ " " + locationArr[2];
temperatura.innerHTML=`<p> Temperatura: ${currentArr[2]}</p>
<p> Humedad: ${currentArr[6]} % </p>
<p> Viento por Hora: ${currentArr[21]} </p>
<img src="https:${icon}"> `;
//zonapariciónclimatica.innerHTML=`<img src=https=${}>`;
}catch (error){
console.error(error);
}
}

fetchData();
