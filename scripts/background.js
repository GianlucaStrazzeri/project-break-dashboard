
//document.body.style.backgroundColor = "url('../Assets/img1.jpg')";

//si las imagenes tienen que cambiar cada  15 segundos habrá que poner un setTimeOut15000 
//a la función que vayamos a crear


let background = document.getElementById("background");

let imagenesBackground=["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg","img6.jpg","img7.jpg","img8.jpg",]


background.style.backgroundImage = `url('../Assets/${imagenesBackground[4]}')`;//Establece un background inicial


 

const promesa1 = new Promise((resolve) => {
    setTimeout(() => {
      numeroAleatorio1 = Math.floor(Math.random() * 10);
      background.style.backgroundImage = `url('../Assets/${imagenesBackground[numeroAleatorio1]}')`;
      resolve(numeroAleatorio1);
    }, 5000);
  });
  
  const promesa2 = new Promise((resolve) => {
    setTimeout(() => {
      numeroAleatorio2 = Math.floor(Math.random() * 10);
      background.style.backgroundImage = `url('../Assets/${imagenesBackground[numeroAleatorio2]}')`;
      resolve(numeroAleatorio2);
    }, 10000);
  });
  
  const promesa3 = new Promise((resolve) => {
    setTimeout(() => {
      numeroAleatorio3 = Math.floor(Math.random() * 10);
      background.style.backgroundImage = `url('../Assets/${imagenesBackground[numeroAleatorio3]}')`;
      resolve(numeroAleatorio3);
    }, 15000);
  });

  const promesa4 = new Promise((resolve) => {
    setTimeout(() => {
      numeroAleatorio4 = Math.floor(Math.random() * 10);
      background.style.backgroundImage = `url('../Assets/${imagenesBackground[numeroAleatorio4]}')`;
      resolve(numeroAleatorio4);
    }, 20000);
  });
  
  const promesa5 = new Promise((resolve) => {
    setTimeout(() => {
      numeroAleatorio5 = Math.floor(Math.random() * 10);
      background.style.backgroundImage = `url('../Assets/${imagenesBackground[numeroAleatorio5]}')`;
      resolve(numeroAleatorio5);
    }, 25000);
  });
  
  const promesa6 = new Promise((resolve) => {
    setTimeout(() => {
      numeroAleatorio6 = Math.floor(Math.random() * 10);
      background.style.backgroundImage = `url('../Assets/${imagenesBackground[numeroAleatorio6]}')`;
      resolve(numeroAleatorio6);
    }, 30000);
  });
  
  promesa1.then((numeroAleatorio1) => {
    console.log(` ${numeroAleatorio1}`);
    return promesa2;
  });

  promesa2.then((numeroAleatorio2) => {
    console.log(` ${numeroAleatorio2}`);
    return promesa3;
  });
  
  promesa3.then((numeroAleatorio3) => {
    console.log(` ${numeroAleatorio3}`);
    return promesa4;
  });

  promesa4.then((numeroAleatorio1) => {
    console.log(` ${numeroAleatorio1}`);
    return promesa5;
  });

  promesa5.then((numeroAleatorio2) => {
    console.log(` ${numeroAleatorio2}`);
    return promesa6;
  });

  promesa6.then((numeroAleatorio1) => {
    console.log(` ${numeroAleatorio1}`);
  });

 

console.log("background-conectado");