// Condicionales
//let edad = prompt('dime tu edad'); //un prompt es una ventana que pide un dato al usuario, devuelve un string
let edad = 12;
if (edad < 12) {
	//console.log('Eres niño');
	if(edad < 2){
		console.log('eres un bebé');
	}
}else if(edad >=12 && edad < 18){
	//console.log('Eres adolescente');
}else if (edad >= 18 && edad < 60){
	//console.log('Eres adulto');
}
else{
	//console.log('Eres anciano');
}

// Truthy: Strings no vacios, [], {}, números diferentes de cero
// Falsy: 0, String vacio, undefined, null, NaN1
if (edad){
	//console.log('Ingresaste un truthy');
} else{
	//console.log('Ingresaste un valor falsy');
}

// Switch

/*
let color = prompt(`Conoce tu personalidad según tu color (escribe su número):
 1. Rojo
 2. Verde
 3. Azul
 4. Negro
 5. Amarillo`); // template string

switch(color){
	case '1':
		console.log('Escogiste rojo, eres un romántico');
		break;
	case '2':
		console.log('Escogiste verde estás en contacto con la naturaleza');
		break;
	default:
		console.log('Por favor escoge un color válido');
		break;a
}
*/

// Operador ternario (forma abreviada de escribir un if)
//condicion ? valorTrue : valorFalse
let nombre = prompt('Escribe tu nombre');

//nombre.length > 5 ? console.log('Tu nombre es largo') : console.log('Tu nombre es corto');

// IF corto
if (nombre.length > 5) console.log('Tu nombre es largo');

