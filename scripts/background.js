
//document.body.style.backgroundColor = "url('../Assets/img1.jpg')";

//si las imagenes tienen que cambiar cada  15 segundos habrá que poner un setTimeOut15000 
//a la función que vayamos a crear
let imagenes=["https://unsplash.com/es/fotos/fotografia-aerea-de-una-montana-verde-junto-a-un-cuerpo-de-agua-bajo-el-cielo-blanco-prSogOoFmkw","https://unsplash.com/es/fotos/mujer-de-pie-en-la-colina-en-el-islote-uZVtAixV8c8","https://unsplash.com/es/fotos/fotografia-de-angulo-bajo-de-un-edificio-gris-de-gran-altura-UalPm9GYtow"];

console.log(imagenes);

let background = document.getElementById("background");
background.style.backgroundImage = "url('../Assets/img3.jpg')";

//mirar esta web https://htmlmasters.tech/cambiar-background-image-con-javascript/