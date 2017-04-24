function holaMundo(nombre) {
	return "Hola mundo!! Soy " + nombre;
}

var nombre = "Bla bla";
var resultado = holaMundo(nombre);

var etiqueta = <HTMLElement>document.getElementById("container");
etiqueta.innerHTML = resultado;

//Variables y tipos
var nombretwo: string = "Blabla";
var edad:number = 1;
var programador:boolean = true;
var langs: Array<string> = ["PHP","JavaScript","CSS"];
var cualquiera:any;

etiqueta.innerHTML = nombre + " - " + edad;

//alert("Hola mundo");

var a = 7;
var b = 12;

if(a === 7) {
	let a = 4;
	var b = 1;

	console.log("DENTRO DEL IF: " + a + " - " + b);
}
console.log("DENTRO DEL IF: " + a + " - " + b);


//Funciones y tipado

function devuelveNumero(num: number):string {
	return "Numero devuelto " + num;
}

function devuelveString(texto:string):number {
	if(texto=="hola"){
		var num = 66;
	}else{
		var num = 90;
	}
	return num;
}
alert(devuelveNumero(34));
alert(devuelveString("hola"));