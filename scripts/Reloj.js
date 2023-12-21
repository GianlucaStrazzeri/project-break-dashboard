let clock= document.getElementById("clock");
let data= document.getElementById("data");
let fraseMotivación=document.getElementById("fraseMotivación");


const rep = () => {
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

    //Logica Frases
    if(horas>0 &&  horas< 7 ) {
        fraseMotivación.innerHTML="Es hora de descansar. Apaga y sigue mañana"}
    else if (horas>=7 &&  horas<= 12 ) {
        fraseMotivación.innerHTML="Buenos días, desayuna fuerte y a darle al código"
    }  
    else if (horas>=12 &&  horas<= 14 ) {
        fraseMotivación.innerHTML="Echa un rato más pero no olvides comer"
    }    
    else if (horas>=14 &&  horas<= 16 ) {
        fraseMotivación.innerHTML="Espero que hayas comido"
    }  
    else if (horas>=16 &&  horas<= 18 ) {
        fraseMotivación.innerHTML="Buenas tardes, el último empujón"
    } 
    else if (horas>=18 &&  horas<= 22 ) {
        fraseMotivación.innerHTML="Esto ya son horas extras, ... piensa en parar pronto"
    }  
    else if (horas>=22 &&  horas<= 0 ) {
        fraseMotivación.innerHTML="Buenas noches, es hora de pensar en parar y descansar"
    };

    

    data.innerHTML=`Fecha: ${numeroDia}  ${mesDelAño}  ${año}`;
    clock.innerHTML= `&#128368; Hora: ${horas} : ${minutos} : ${segundos}`;
   
   

};
 


setInterval(rep, 1000);



