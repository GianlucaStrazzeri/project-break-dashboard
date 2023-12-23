let zonapariciónclimatica =document.getElementById("zonapariciónclimatica");

let apiKey = ["77e828056a1d4ceea61213842231912"];
let city= ["Alicante - Spain"];

fetch('https://v2.jokeapi.dev/joke/Any?lang=es&blacklistFlags=sexist')
//fetch (`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=no`)
.then((response) => {
          if (!response.ok) {
            throw new Error('La solicitud no fue exitosa');
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          zonapariciónclimatica.innerText= data;
        })
        .catch((error) => {
          zonapariciónclimatica.innerText = '<p>No se puede  cargar el chiste</p>';
            });
        

