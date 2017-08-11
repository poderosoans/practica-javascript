/*				
* Las funciones son bloques de código reutilizables
* function nombreFuncion(parámetro1, parámetro2){
*	 // codigo
* }
*
*/

function sumar(a,b){
	if(a > b) {
		return a + b;
	} 

	return b;

	// Puede devolver un objeto
	// return {
	// a: a + 1,
	// b: b + 1,
	//} 
}


// Expresión (dato   =>   Valor)
	// let saludo = 'Hola mundo';
	let miSuma = sumar(4,15);
	//console.log(miSuma);

// En un objeto
	const obj = {
		nombre: 'objeto',
		sumar(a,b) {
			return a + b;
		}
	};

	let miObj = obj.sumar(10,10);
	//console.log(miObj);

// Función dentro de una función

	function restar (a){
		return function(b){
			return a - b;
		}
	}

	let miResta = restar(5)(2);
	//console.log(miResta);

// Funciones autoinvocadas
	let miMultiplicacion = (function multiplicar(a,b){
	return a * b;
	})(5,2);

	//console.log(miMultiplicacion);

// Funcion constructora
	let Pais = function (nombre, moneda){
	this.nombre = nombre;
	this.moneda = moneda;
	}

	let peru = new Pais('Perú', 'Sol');

	//console.log(peru);

// apply() y call()
	function add(a,b,c){
		return a + b + c;
	}
	let numeros = [2,3,4];
	//let myAdd = add(numeros);
	//console.log(myAdd);
	let myAdd = add.apply(undefined, numeros);
	console.log(myAdd);
	let otherAdd = add.call(undefined,2,3,4);
	console.log(otherAdd);