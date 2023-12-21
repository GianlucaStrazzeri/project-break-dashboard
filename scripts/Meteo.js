let apiKey = ["77e828056a1d4ceea61213842231912"];
let city= ["Alicante - Spain"];

//fetch ("https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no")
//.then((response) => {
//          if (!response.ok) {
//            throw new Error('La solicitud no fue exitosa');
//          }
//          return response.json();
//        })
//        .then((data) => {
//          console.log(data);
//        })

//Estructura fetch ejercicios
//const obtenerChiste = document.getElementById('obtenerChiste');
//const chiste = document.getElementById('chiste');

//obtenerChiste.addEventListener('click', () => {
//  fetch('https://v2.jokeapi.dev/joke/Any?lang=es&blacklistFlags=sexist')
//    .then((response) => {
//      if (!response.ok) {
//        throw new Error('La solicitud no fue exitosa');
//      }
//      return response.json();
//    })
//    .then((data) => {
//      chiste.innerText = data.setup + ' ' + ' ' + data.delivery;
//    })
//    .catch((error) => {
//      chiste.innerText = 'No se puede  cargar el chiste';
//    });
//});