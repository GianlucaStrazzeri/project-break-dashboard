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
let areaparaguardarenlaces=document.getElementById("areaparaguardarenlaces");

guardarEnlace.addEventListener("click", function() {
    let nombreEnlace=document.getElementById("nombre").value;
    let ruta=document.getElementById("ruta").value;
    //creo persistencia con localstorage
    localStorage.setItem(`nombreWeb`,nombreEnlace);
    localStorage.setItem(`rutaWeb`,ruta);
    let myStoragedNameOfWeb = localStorage.getItem('nombreWeb');
    let myStoragedNameOfWebStringify= JSON.stringify(myStoragedNameOfWeb);
    let myStoragedRutaWeb = localStorage.getItem('rutaWeb');
    let myStoragedRutaWebStringify= JSON.stringify(myStoragedRutaWeb);
    console.log(myStoragedNameOfWebStringify,myStoragedRutaWebStringify)

    areaparaguardarenlaces.innerHTML += ` <p> ${myStoragedNameOfWebStringify} </p>  
${myStoragedRutaWebStringify}  `;})  //No devuelve el enlace


//JSON.stringify() pasa un objeto a un string;
//<a src="${myStoragedRutaWebStringify}">

//codigo reloj
let reloj= document.getElementById("reloj");
let fecha= document.getElementById("fecha");
let frase=document.getElementById("frase");


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



    



