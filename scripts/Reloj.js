//Capturo el Id fecha del documento html y lo guardo como variable "fecha"
let reloj= document.getElementById("reloj");
let fecha= document.getElementById("fecha");


const repetir = () => {
    const today = new Date();
    const horas = today.getHours();
    const minutos = today.getMinutes();
    const segundos = today.getSeconds();
    const numeroDia=today.getDate(); //10
    const mesDelAño=today.getMonth(); //Me saca 11
    const año=today.getFullYear(); //2023
     
    reloj.innerHTML= `Hora: ${horas} : ${minutos} : ${segundos}`;
    fecha.innerHTML=`Fecha: ${numeroDia} / ${mesDelAño} / ${año}`
};
 
setInterval(repetir, 1000);

const today = new Date();
const numeroDia=today.getDate()//10
const mesDelAño=today.getMonth()//Me saca 11
const año=today.getFullYear()//2023
console.log(numeroDia, mesDelAño, año);
