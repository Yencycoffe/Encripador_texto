var botonencriptar = document.querySelector("btn-encriptar");
var botondesencriptar = document.querySelector("btn-desencriptar");
var muneco = document.querySelector("imgder");
var ingtexto = document.querySelector("inputTexto");
var parrafo = document.querySelector("texto");
var resultado = document.querySelector("texto2");


botonencriptar.onclick = encriptar;

function encriptar() {
    ocultarelementos()
    resultado.textContent =recuperartexto();
}
function recuperartexto(   ) {

    var area = document.querySelector("inputTexto");
    return area.value;
    
} 
function ocultarelementos(  )   {  
    muneco.classList.add("ocultar");
    ingtexto.classList.add("ocultar");
    parrafo.classList.add("ocultar");

}