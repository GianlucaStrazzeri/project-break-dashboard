//Capturo el Id fecha del documento html y lo guardo como variable "fecha"
let fecha= document.getElementById("fecha");

//Creo una constante newDate que sea igual al metodo ofrecido por Js new Date();
let today=new Date();


//Utilizo el metodo toString para devolver la var today en un string 
let todayString=today.toString();
console.log(todayString);//Sun Dec 10 2023 14:57:21 GMT+0100 (hora estándar de Europa central)

//Utilizo spread operator para transformar la variable todayString en Array; 
let todayArray=[...todayString];
console.log(todayArray);  // (67) [Elementos]


//Utilizo el metodo .slice() para copiar una parte dell array sin modificar el original
let time=todayArray.slice(16,24);
console.log(time);

//Utilizando el metodo .unshift() describo lo que estoy escribiendo en la consola.
time.unshift("Horario Actual:");

//Imprimo la fecha en el espacio de fecha de html/me devuelve un string que tendré que convertir a array 
//para poder utilizar metodos con el
fecha.innerHTML= `${time}`;

