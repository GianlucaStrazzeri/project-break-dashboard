//Guardo las variables con su id desde el html
let saveLink=document.getElementById("LinkButton");
let areaLink=document.getElementById("areaenlaces");

//Creo una función de click llamada saveLink creo dos variables que capturan dos elementos del html
// su valor utilizando .value
saveLink.addEventListener("click", function() {
    let nombreEnlace=document.getElementById("nombre").value;
    let ruta=document.getElementById("ruta").value;
    //creo persistencia con localstorage //Hay que hacer getitem antes de setItem
    let myStoragedRutaWeb = JSON.parse(localStorage.getItem('rutaWeb')) || []; 
    //El método JSON.parse() analiza una cadena de texto como JSON, transformando opcionalmente el valor producido
    let myStoragedNameOfWeb = JSON.parse(localStorage.getItem("nombreWeb")) || [];
    localStorage.setItem(`nombreWeb`,JSON.stringify(nombreEnlace)); //JSON.stringify() pasa un objeto a un string;
    localStorage.setItem(`rutaWeb`,JSON.stringify(ruta));
    let myStoragedNameOfWebStringify= JSON.stringify(myStoragedNameOfWeb);
    let myStoragedRutaWebStringify= JSON.stringify(myStoragedRutaWeb);
    

    areaLink.innerHTML += `<p> ${myStoragedRutaWebStringify}  </p> `
    U+0058;}) //De esta forma si me lo reconoce como una web no permite entrar
    //areaLink.innerHTML += `<a src="${myStoragedRutaWebStringify}" ${myStoragedRutaWebStringify} >  `;})  //No imprime nada

//para ver localStorage tengo que darle a inspecciónare y luego aplicación



