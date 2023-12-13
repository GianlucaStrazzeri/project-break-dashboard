//Crear una variables con las mayusculas, minusculas,numeros y simbolos
let mayúsculas= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let minúsculas= "abcdefghijklmnopqrstuvwxyz";
let números= "0123456789";
let símbolos= "!@#$%^&*()-_=+";

//Capturando id= button del html y id de areaimprimircontraseña
let button=document.getElementById("button");
let insertarContraseña=document.getElementById("areaimpresióncontraseña");

//Creo un addEventiListener al darle click al botón,
//verifico que funcione imprimiendo en el area de impresión contraseña "Texto"
button.addEventListener("click",()=>(areaimpresióncontraseña.innerHTML=" Texto"));

//Creo una función getRandomInt que me devuelve un numero casual
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  //Creo variables iguales a la función por la cantidad de mayusculas y minusculas (26), simbolos (14) y numeros(10)
let mayúsculasI=getRandomInt(26);//Un numero random entre 26 mayusculas
let mayúsculasRandom=(mayúsculas[mayúsculasI]);

let minúsculasI=getRandomInt(26);//26 minusculas
let minúsculasRandom=(minúsculas[minúsculasI]);

let númerosI=getRandomInt(10);//10 numeros
let númerosRandom=(números[númerosI]);

let símbolosI=getRandomInt(14);//14 simbolos
let símbolosRandom=(símbolos[símbolosI]);

let value=12;

let contraseña=[];

for (i=0;i<value/4;i++){
contraseña.push( mayúsculasRandom);
contraseña.push(minúsculasRandom);
contraseña.push(númerosRandom);
contraseña.push(símbolosRandom);
};

console.log(contraseña)