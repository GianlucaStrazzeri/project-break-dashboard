let zonapariciónclimatica =document.getElementById("zonapariciónclimatica");

let apiKey = ["77e828056a1d4ceea61213842231912"];
let city= ["Alicante - Spain"];
let ciudad=document.getElementById("ciudad");


const fetchData = async () => {
  let city= ["Alicante - Spain"];
  try{
    
 const response = await fetch (`http://api.weatherapi.com/v1/current.json?key=77e828056a1d4ceea61213842231912&q=${city}&aqi=no`);
 if (!response.ok) {
 throw new Error (`Error`);
}
const data = await response.json();
console.log(data);
const locationArr= (Object.values(data.location));
ciudad.innerHTML=locationArr[0];
}catch (error){
console.error(error);
}
}

fetchData();
