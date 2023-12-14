//Guardo las variables con su id desde el html
let guardarEnlace=document.getElementById("guardarEnlacesButton");
let areaparasalvarenlaces=document.getElementById("areaparasalvarenlaces");


guardarEnlace.addEventListener("click", function() {
    let nombreEnlace=document.getElementById("nombre");
    let ruta=document.getElementById("ruta");
    //creo persistencia con localstorage
    localStorage.setItem(`nombreWeb`,nombreEnlace);
    localStorage.setItem(`rutaWeb`,ruta);
    let myStoragedNameOfWeb = localStorage.getItem('nombreWeb');
    let myStoragedNameOfWebStringify= JSON.stringify(myStoragedNameOfWeb);
    let myStoragedRutaWeb = localStorage.getItem('rutaWeb');
    let myStoragedRutaWebStringify= JSON.stringify(myStoragedRutaWeb);
    console.log(myStoragedNameOfWebStringify,myStoragedRutaWebStringify)

areaparasalvarenlaces.innerHTML = `<p> Nombre de la web ${myStoragedNameOfWebStringify}</p> 
<p> Ruta relativa:${myStoragedRutaWebStringify}</p>`;})  


//JSON.stringify() pasa un objeto a un string;
