function holaMundo(nombre) {
    return "Hola mundo!! Soy " + nombre;
}
var nombre = "Bla bla";
var resultado = holaMundo(nombre);
var etiqueta = document.getElementById("container");
etiqueta.innerHTML = resultado;
//Variables y tipos
var nombretwo = "Blabla";
var edad = 1;
var programador = true;
var langs = ["PHP", "JavaScript", "CSS"];
var cualquiera;
etiqueta.innerHTML = nombre + " - " + edad;
//alert("Hola mundo");
var a = 7;
var b = 12;
if (a === 7) {
    var a_1 = 4;
    var b = 1;
    console.log("DENTRO DEL IF: " + a_1 + " - " + b);
}
console.log("DENTRO DEL IF: " + a + " - " + b);
//Funciones y tipado
function devuelveNumero(num) {
    return "Numero devuelto " + num;
}
function devuelveString(texto) {
    if (texto == "hola") {
        var num = 66;
    }
    else {
        var num = 90;
    }
    return num;
}
alert(devuelveNumero(34));
alert(devuelveString("hola"));
