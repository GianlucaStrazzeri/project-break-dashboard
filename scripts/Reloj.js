//Capturo el Id fecha del documento html y lo guardo como variable "fecha"
let fecha= document.getElementById("fecha");

//el metodo new Date(permite pedir la hora fecha etc)
//el metodo getHours(permite pedir la hora)
//el metodo getMinutes(permite pedir los minutos)
//el metodo getSeconds(permite pedir los segundos)
//se utiliza setInterval para repetir la función cada 1000 ms
//se utiliza fecha.innerHTML para insertar como texto la hora , los minutos y los segundos
//Utilizo de comillas francesas y dollar${} para intercalar variables con html




const repetir = () => {
    const today = new Date();
    const horas = today.getHours();
    const minutos = today.getMinutes();
    const segundos = today.getSeconds();
     
    fecha.innerHTML= `${horas}, ${minutos}, ${segundos}`;
};
 
setInterval(repetir, 1000);