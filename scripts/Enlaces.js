//Guardo las variables con su id desde el html
let guardarEnlace=document.getElementById("guardarEnlacesButton");
let areaparaguardarenlaces=document.getElementById("areaparaguardarenlaces");


guardarEnlace.addEventListener("click", function() {
    let nombreEnlace=document.getElementById("nombre").value;
    let ruta=document.getElementById("ruta").value;
    //creo persistencia con localstorage
    localStorage.setItem(`nombreWeb`,nombreEnlace);
    localStorage.setItem(`rutaWeb`,ruta);
    let myStoragedNameOfWeb = localStorage.getItem('nombreWeb');
    let myStoragedNameOfWebStringify= JSON.stringify(myStoragedNameOfWeb);
    let myStoragedRutaWeb = localStorage.getItem('rutaWeb');
    let myStoragedRutaWebStringify= JSON.stringify(myStoragedRutaWeb);
    console.log(myStoragedNameOfWebStringify,myStoragedRutaWebStringify)

    areaparaguardarenlaces.innerHTML += ` <p> ${myStoragedNameOfWebStringify} </p>  
${myStoragedRutaWebStringify}  `;})  //No devuelve el enlace


//JSON.stringify() pasa un objeto a un string;
//<a src="${myStoragedRutaWebStringify}">


