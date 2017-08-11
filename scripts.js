// Javascript es Case Sensitive
// Punto y coma (semicolon -ASI)
// Los bloques no necesitan ";"
// No se recomienda usar var por problemas de HOISTING, let si y tiene ambito de bloque
// Los espacios en blanco los ignora los interpretes, pero se recomienda tabular los codigos

// Variables: Es un espacio en memoria

/*
let precio = 200, 
impuesto = precio * 0.18, 
descuento = precio * 0.1,
precioFinal = precio + impuesto - descuento;
console.log(precioFinal);
*/
//constantes para datos que no van a variar
//const edYear = 2010;

//Bloques
/*
{
	let a = 'a';
	console.log(a);
}
*/
// JS es dinámicamente tipado
// JS está basado en prototipos
// Tipos de datos
// Primitivos

//string (texto)
/*
let amigo = 'Roger Pomacarhua';
let numero = 2;
let saludo = `Bienvenido, ${amigo}, ${numero * 3} veces`;
console.log(saludo);
*/
//number (numeros)
/*
let nacimiento = 1994;
let year = new Date().getFullYear();
let edad = year - nacimiento;
console.log('5' + 5);
*/
//boolean
/*
if ('a' == 'b'){
	console.log('son inguales');
}else{
	console.log('no son iguales');
}
*/
//undefined (cuando no se asigna un valor a una variable)
let noDefinida;

//null (cuando no existe un valor)
let title = document.getElementById('title');

//typeof (para comprobar el tipo de dato)

// Compuestos u Objetos
//arrays
//objetos
//maps
//sets
//funciones

// Operadores aritméticos (+, -, *, /, %)

// Incremento y decremento (++, --)
let numero = 5;
numero--
console.log(numero);

//+=, -=, *=, /=
let num = 10;
num /= 5;

//Operadores de comparación (devuelven un boolean)
let condicion = 5 === '5'; // expresión, porque este codigo devuelve un valor

// Propiedades (son caracteristicas que devuelven un valor) y métodos (requieren una ejecución en el programa)
let prof1 = 'Alexys';
let prof2 = 'Daniel';
let prof3 = 'Jon';
let prof4 = 'alvaro';
console.log(prof1.toUpperCase().indexOf('A') == 0);
let nume = 10.65232323;
