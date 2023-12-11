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
//Logica del horario

if(horas>0 &&  horas< 7 ) {
    console.log("Es hora de descansar. Apaga y sigue mañana")}
else if (horas>7 &&  horas< 12 ) {
    console.log("Buenos días, desayuna fuerte y a darle al código")
}  
else if (horas>12 &&  horas< 14 ) {
    console.log("Echa un rato más pero no olvides comer")
}    
else if (horas>14 &&  horas< 16 ) {
    console.log("Espero que hayas comido")
}  
else if (horas>16 &&  horas< 18 ) {
    console.log("Buenas tardes, el último empujón")
} 
else if (horas>18 &&  horas< 22 ) {
    console.log("Esto ya son horas extras, ... piensa en parar pronto")
}  
else if (horas>22 &&  horas< 0 ) {
    console.log("Buenas noches, es hora de pensar en parar y descansar")
};

//No se porqué pero no imprime nada en consola