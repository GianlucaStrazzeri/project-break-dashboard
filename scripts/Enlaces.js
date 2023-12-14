let nombreEnlace=document.getElementById("nombre");
let ruta=document.getElementById("ruta");
let guardarEnlace=document.getElementById("guardarEnlacesButton");


console.log(nombreEnlace,guardarEnlace, ruta);

//localStorage.clear();
localStorage.setItem(`nombreWeb`,"");
localStorage.setItem(`rutaWeb`,"");

let myStoragedNameOfWeb = localStorage.getItem('nombreWeb');
let myStoragedRutaWeb = localStorage.getItem('rutaWeb');