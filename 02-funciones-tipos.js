// Tipos de funciones
// Funciones por definición y por expresión
// Por definición
	function funcionPorDefinicion(){
		//cuerpo
	}
	funcionPorDefinicion();
// Por expresión
	let funcionPorExpresion = function (){
		//cuerpo
	};
	funcionPorExpresion();

	let c = console.log;
	c('hola mundo');

// Funciones nombradas y funciones anónimas
// Callback = una función que es ejecutada por otra luego de un proceso
	//el.addEventListener('click',function(){
	//	// hacer algo
	//});

// Funciones fecha (arrow functions) ES6 (Son anónimas)
// (param1, param2, param3) => valorDeRetorno
	let suma = (a,b) => a + b;
	let miSuma = suma(10,2);
	c(miSuma);

	let cuadrado = (a) => typeof a == 'number' ? a * a : 'No es un número';
	let miCuadrado = cuadrado(5);
	c(miCuadrado);

// Entre () si se va a devolver un objeto con arrow function
	let myObj = (a,b) => ({a,b});
	let myCustomObj = myObj('Roger', '21');
	c(myCustomObj);