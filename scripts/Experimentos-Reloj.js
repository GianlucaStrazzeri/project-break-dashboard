//1.Intento tratarlo como un string y trasformarlo en array con spread operator;
let DateArr=[...today];
console.log(DateArr); //Uncaught TypeError:newDate is not iterable


//2.Intento tratarlo como un string y trasformarlo en array con bloque for y push;
let arrDate = [];
for(let i of today) {
    arr.push(i);
}
console.log(arr);//newDate is not iterable


//3.Intento que me devuelva el día de la semana
let dateObj=dateObj.getDay(); 
console.log(dateObj);// Cannot access 'dateObj' before initialization


//4. Intento transformar la cadena que representa una fecha y retornar el número 
//de milisegundos transcurridos desde el 1 de Enero de 1970, 00:00:00 UTC
let dateParse = Date.parse(newDate());
console.log(dateParse);//newDate is not a function


//5.Metodos de instanciación= hacer una solicitud por la RAE

//5.1 Intento Retornar el día del mes (1–31) para la fecha especificada acorde a la hora local.
Date.prototype.getDate();//this is not a Date object. at Object.getDate (<anonymous>)
Date.prototype.getDate(newDate);//this is not a Date object. at Object.getDate (<anonymous>)
Date.prototype.getDate(1-31);//this is not a Date object. at Object.getDate (<anonymous>)


//6Intento recorrer la variable con un bloque for
for(i=0;i<today.length;i++){
    console.log(i);
}//No devuelve nada

//6.1 verifico haber escrito bien la estructura for y si funciona
let arrEjemplo= [1,2,3,4,5,6,7,8,9,10];
for (i=0;i<arrEjemplo.length;i++){
    console.log(i);
} //0,1,2,3,4,5,6,7,8,9


//7 Intento recorrer la variable como si fuera un array 
console.log(today[7]);//undefined


//Utilizo el metodo toString para devolver la var today en un string 
let todayString=today.toString();
console.log(todayString);//Sun Dec 10 2023 14:57:21 GMT+0100 (hora estándar de Europa central)

//Utilizo spread operator para transformar la variable todayString en Array; 
let todayArray=[...todayString];
console.log(todayArray);  // 67 Elementos

//Utilizo el metodo .slice() para copiar una parte dell array sin modificar el original
let time=todayArray.slice(16 , 24);
console.log(time);

//Utilizando el metodo .unshift() describo lo que estoy escribiendo en la consola.
time.unshift("Horario Actual:"); // 8 elementos

//Imprimo la fecha en el espacio de fecha de html/me devuelve un string que tendré que convertir a array 
//para poder utilizar metodos con el
fecha.innerHTML= `${time}`;

//imprimo el ultimo segundo en la consola para intentar modificarlo 
let segundo =(time[8]);
































































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
   
    transformNumeroInMes(); //No me da errores en consola pero no funciona
    
    
    
    
    fecha.innerHTML=`Fecha: ${numeroDia}  ${mesDelAño}  ${año}`;
    reloj.innerHTML= `Hora: ${horas} : ${minutos} : ${segundos}`;
   
   
   


};
 
setInterval(repetir, 1000);


//intento sacar la estructura if else afuera de la estructura de la función repetir y para ello 
//vuelvo a crear las constantes afuera de la función repetir 
    
const today = new Date();
let mesDelAño= today.getMonth();



const transformNumeroInMes=()=>{
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
}

if(horas>0 &&  horas< 15 && minutos <  0) {
    console.log("Es hora de descansar. Apaga y sigue mañana")};

transformNumeroInMes(repetir);














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




//Crear un evento de click  utilizando idcapturadoadd.eventlistener("click",function"){}que  
//te cree una clase css para agregar estilos y un  elemento p con la logica dependiente del horario









// Logica minutos
if(minutos<10 ) {
    minutos= 0+minutos}
else if (minutos==2  ) {
    minutos.innerHTML="Buenos días, desayuna fuerte y a darle al código"
}  
else if (minutos==3 ) {
    minutos.innerHTML="Echa un rato más pero no olvides comer"
}    
else if (minutos==4 ) {
    minutos.innerHTML="Espero que hayas comido"
}  
else if (minutos==5 ) {
    minutos.innerHTML="Buenas tardes, el último empujón"
} 
else if (minutos==6 ) {
    minutos.innerHTML="Esto ya son horas extras, ... piensa en parar pronto"
}  
else if (minutos==7 ) {
    minutos.innerHTML="Buenas noches, es hora de pensar en parar y descansar"
}
else if (minutos==8 ) {
    minutos.innerHTML="Buenas tardes, el último empujón"
} 
else if (minutos==9 ) {
    minutos.innerHTML="Esto ya son horas extras, ... piensa en parar pronto"
}  
else if (minutos==0 ) {
    minutos.innerHTML="Buenas noches, es hora de pensar en parar y descansar"
};









// Logica segundos
if(segundos==1 ) {
    segundos.innerHTML="0"}
else if (segundos==2  ) {
    segundos.innerHTML="Buenos días, desayuna fuerte y a darle al código"
}  
else if (segundos==3 ) {
    segundos.innerHTML="Echa un rato más pero no olvides comer"
}    
else if (segundos==4 ) {
    segundos.innerHTML="Espero que hayas comido"
}  
else if (segundos==5 ) {
    segundos.innerHTML="Buenas tardes, el último empujón"
} 
else if (segundos==6 ) {
    segundos.innerHTML="Esto ya son horas extras, ... piensa en parar pronto"
}  
else if (segundos==7 ) {
    segundos.innerHTML="Buenas noches, es hora de pensar en parar y descansar"
}
else if (segundos==8 ) {
    segundos.innerHTML="Buenas tardes, el último empujón"
} 
else if (segundos==9 ) {
    segundos.innerHTML="Esto ya son horas extras, ... piensa en parar pronto"
}  
else if (segundos==0 ) {
    segundos.innerHTML="Buenas noches, es hora de pensar en parar y descansar"
};
