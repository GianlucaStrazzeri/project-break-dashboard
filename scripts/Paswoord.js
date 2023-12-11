let array =["ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz","0123456789","!@#$%^&*()-_=+"];
console.log(`Se ha creado una variable con valor de un array: ${array} `);

let button=document.getElementById("button");
let insertarContraseña=document.getElementById("insertarContraseña");


button.addEventListener("click",()=>(insertarContraseña.innerHTML="Insertar texto"));
