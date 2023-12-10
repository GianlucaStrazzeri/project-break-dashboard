let reloj= document.getElementById("reloj");
let fecha= document.getElementById("fecha");


const repetir = () => {
    const today = new Date();
    const horas = today.getHours();
    const minutos = today.getMinutes();
    const segundos = today.getSeconds();
    const numeroDia= today.getDate(); //10
    let mesDelAño= today.getMonth(); //Me saca 11
    const año= today.getFullYear(); //2023
   

    
        if (mesDelAño=11){
            mesDelAño="Diciembre"
            }
        else if (mesDelAño=0) {
            mesDelAño="Enero"
        }
        else if (mesDelAño=1) {
            mesDelAño="Febrero"
        }
        else if (mesDelAño=2) {
            mesDelAño="Marzo"
        }
        else if (mesDelAño=3) {
            mesDelAño="Abril"
        }
        else if (mesDelAño=4) {
            mesDelAño="Mayo"
        }
        else if (mesDelAño=5) {
            mesDelAño="Junio"
        }
        else if (mesDelAño=6) {
            mesDelAño="Julio"
        }
        else if (mesDelAño=7) {
            mesDelAño="Agosto"
        }
        else if (mesDelAño=8) {
            mesDelAño="Septiembre"
        }
        else if (mesDelAño=9) {
            mesDelAño="Octubre"
        }
        else if (mesDelAño=10) {
            mesDelAño="Noviembre"
        } ;
    
    

    reloj.innerHTML= `Hora: ${horas} : ${minutos} : ${segundos}`;
    fecha.innerHTML=`Fecha: ${numeroDia}  ${mesDelAño}  ${año}`

   
};
 
setInterval(repetir, 1000);



    
       



//Explicación trabajo
//Capturo el Id fecha del documento html y lo guardo como variable "fecha"
//Capturo el Id reloj del documento html y lo guardo como variable "reloj"
//el metodo new Date(permite pedir la hora fecha etc)
//el metodo getHours(permite pedir la hora)
//el metodo getMinutes(permite pedir los minutos)
//el metodo getSeconds(permite pedir los segundos)
//se utiliza setInterval para repetir la función repetir cada 1000 ms
//se utiliza reloj.innerHTML para insertar como texto la hora , los minutos y los segundos
//se utiliza fecha.innerHTML para insertar como texto la hora , los minutos y los segundos
//Utilizo de comillas francesas y dollar${} para intercalar variables con html


//Crear un evento de click que al darle te cree una clase css y un  elemento p con la logica dependiente
//del horario
