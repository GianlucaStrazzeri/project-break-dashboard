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