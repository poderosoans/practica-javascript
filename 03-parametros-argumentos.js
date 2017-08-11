// Parámetros y argumentos

	//function sumar(a,b,c) {
	//	return a + b + c;
	//}
	//console.log(sumar(2,3,4,6));

// Si hay más parámetros que argumentos, los argumentos faltantes son undefined
// Si hay más argumentos que parámetros no devuelve error

// Sumar todos los argumentos que le pasamos a la función

	//function sumarTodos(){
	//	return [...arguments].reduce((a,b) => a + b);
	//}
	//console.log(sumarTodos(1,2,3,4));


// spred operation (...), añadir [] para que sea array

	//function sum (a,b){
	//	return a + b;
	//}

	//let numeros = [2,3];
	//console.log(sum.apply(undefined,numeros));
// expande con spred operation
	//console.log(sum(...numeros));

// Parámetros por defecto
	//function sumar(a, b = 2) {
	//	return a + b;
	//}
	//console.log(sumar(1));

// Parámetros rest
	function sumarTodos(a,b,...elements) {
		return elements.reduce((a,b) => a + b );

	}
	console.log(sumarTodos(1,2,3,4,5));