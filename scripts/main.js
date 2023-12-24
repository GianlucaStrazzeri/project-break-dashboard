//                                          background code
let background = document.getElementById("background");

let imagenesBackground=["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg","img6.jpg","img7.jpg","img8.jpg",]


background.style.backgroundImage = `url('./Assets/${imagenesBackground[4]}')`;//Establece un background inicial


 

const promesa1 = new Promise((resolve) => {
    setTimeout(() => {
      numeroAleatorio1 = Math.floor(Math.random() * 10);
      background.style.backgroundImage = `url('./Assets/${imagenesBackground[numeroAleatorio1]}')`;
      resolve(numeroAleatorio1);
    }, 15000);
  });
  
  const promesa2 = new Promise((resolve) => {
    setTimeout(() => {
      numeroAleatorio2 = Math.floor(Math.random() * 10);
      background.style.backgroundImage = `url('./Assets/${imagenesBackground[numeroAleatorio2]}')`;
      resolve(numeroAleatorio2);
    }, 30000);
  });
  
  const promesa3 = new Promise((resolve) => {
    setTimeout(() => {
      numeroAleatorio3 = Math.floor(Math.random() * 10);
      background.style.backgroundImage = `url('./Assets/${imagenesBackground[numeroAleatorio3]}')`;
      resolve(numeroAleatorio3);
    }, 45000);
  });

  const promesa4 = new Promise((resolve) => {
    setTimeout(() => {
      numeroAleatorio4 = Math.floor(Math.random() * 10);
      background.style.backgroundImage = `url('./Assets/${imagenesBackground[numeroAleatorio4]}')`;
      resolve(numeroAleatorio4);
    }, 60000);
  });
  
  const promesa5 = new Promise((resolve) => {
    setTimeout(() => {
      numeroAleatorio5 = Math.floor(Math.random() * 10);
      background.style.backgroundImage = `url('./Assets/${imagenesBackground[numeroAleatorio5]}')`;
      resolve(numeroAleatorio5);
    }, 75000);
  });
  
  const promesa6 = new Promise((resolve) => {
    setTimeout(() => {
      numeroAleatorio6 = Math.floor(Math.random() * 10);
      background.style.backgroundImage = `url('./Assets/${imagenesBackground[numeroAleatorio6]}')`;
      resolve(numeroAleatorio6);
    }, 90000);
  });
  
  promesa1.then((numeroAleatorio1) => {
    return promesa2;
  });

  promesa2.then((numeroAleatorio2) => {
    return promesa3;
  });
  
  promesa3.then((numeroAleatorio3) => {
    return promesa4;
  });

  promesa4.then((numeroAleatorio1) => {
    return promesa5;
  });

  promesa5.then((numeroAleatorio2) => {
    return promesa6;
  });

  promesa6.then((numeroAleatorio1) => {
    return promesa1;
  });

 





//                                                  codigo enlace

//Guardo las variables con su id desde el html
let guardarEnlace=document.getElementById("guardarEnlacesButton");


guardarEnlace.addEventListener("click", function() {
    let nombreEnlace=document.getElementById("nombre").value;
    let ruta=document.getElementById("ruta").value;
    //creo persistencia con localstorage
    localStorage.setItem(`nombreWeb`,nombreEnlace);
    localStorage.setItem(`rutaWeb`,ruta);
    let myStoragedNameOfWeb = localStorage.getItem('nombreWeb');
    let myStoragedNameOfWebStringify= JSON.stringify(myStoragedNameOfWeb);
    let myStoragedRutaWeb = localStorage.getItem('rutaWeb');
    //JSON.stringify() pasa un objeto a un string;
    let myStoragedRutaWebStringify= JSON.stringify(myStoragedRutaWeb);
    console.log(myStoragedNameOfWebStringify,myStoragedRutaWeb)

    let areaParaGuardarEnlaces=document.getElementById("areaparaguardarenlaces");
    //Creo una clase "linkcontainer" para modificar el css y un id "xlink"
    // para modifcar el storage haciendo click

    //En alternativa se podría probar con `<a src="${myStoragedRutaWebStringify}" `>
    areaParaGuardarEnlaces.innerHTML += `<div class="linkcontainer">
     <p> ${myStoragedRutaWebStringify} </p>  
     <button id=xlink">&#120;</button> </div> `;

    })  //Devuelve el enlace pero no es clickable

  //  xlink=document.getElementById("xlink");
  //  xlink.addEventListener("click", function(){
  //      removeItem(`${myStoragedRutaWebStringify}`)
  //  })




//codigo reloj
let reloj= document.getElementById("reloj");
let fecha= document.getElementById("fecha");



const repetir = () => {
    const today = new Date();
    const horas = today.getHours();
    let minutos = today.getMinutes();
    let segundos = today.getSeconds();
    const numeroDia= today.getDate(); 
    let mesDelAño= today.getMonth(); 
    const año= today.getFullYear(); 
   
    if(segundos<10 ) {
        segundos = "0"+segundos;
        };

        if(minutos<10 ) {
            minutos = "0"+minutos;
            };

    

    fecha.innerHTML=`Fecha: ${numeroDia}  ${mesDelAño}  ${año}`;
    reloj.innerHTML= `&#128368; Hora: ${horas} : ${minutos} : ${segundos}`;
   
   

};
 


setInterval(repetir, 1000);


//meteo.js
let apiKey = ["77e828056a1d4ceea61213842231912"];
let city= ["Alicante - Spain"];

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

temperatura.innerHTML= `<img src="https:${icon}"> <br>
${locationArr[0]}   ${locationArr[2]}
<p> Temperatura: ${currentArr[2]}</p>
<p> Humedad: ${currentArr[6]} % </p>
<p> Viento por Hora: ${currentArr[21]} </p>
 `;
//zonapariciónclimatica.innerHTML=`<img src=https=${}>`;
}catch (error){
console.error(error);
}
}

fetchData();

    



