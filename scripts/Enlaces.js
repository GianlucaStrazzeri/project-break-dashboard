let nombreEnlace=document.getElementById("nombre");
let ruta=document.getElementById("ruta");
let guardarEnlace=document.getElementById("guardarEnlacesButton");
let areaparasalvarenlaces=document.getElementById("areaparasalvarenlaces");


console.log(nombreEnlace,guardarEnlace, ruta);

//localStorage.clear();
localStorage.setItem(`nombreWeb`,"vacio");
localStorage.setItem(`rutaWeb`,"http://");

let myStoragedNameOfWeb = localStorage.getItem('nombreWeb');
let myStoragedRutaWeb = localStorage.getItem('rutaWeb');

console.log(ruta.value);

//guardarEnlace.addEventlistener("click",function() {
//    myStoragedNameOfWeb=myStoragedNameOfWeb.value,
//    myStoragedRutaWeb=myStoragedRutaWeb.value")}

guardarEnlace.addEventListener("click", function() {
areaparasalvarenlaces.innerHTML = `<p> Nombre de la web ${myStoragedNameOfWeb}</p> 
<p> Ruta relativa:${myStoragedRutaWeb}</p>`;})  
