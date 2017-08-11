// Scope es un ámbito o contexto donde se ejecuta una función y existen sus variables

	//var hola;
	//function holaMundo(){
	//	hola = 'Hola mundo';
	//}
	//holaMundo()

// Clousures

	//function saludar() {
	//	let saludo = 'Hola';
	//	return function saludarInterno(amigo) {
	//		console.log(`${saludo} ${amigo}`);
		//}
	//}

	//saludar()();
	//let miSaludo = saludar();
	//miSaludo('Roger');
	//miSaludo('Carla');
	
	function afuera(){
		let numero = 1;
		return function(){
			numero++;
			console.log(numero);
		}
	}
	// Se referencia a la función principal conservando su estado
	let aumentar = afuera();
	//Ejectua solo la funcion que está dentro
	aumentar();
	aumentar();
	aumentar();
	// para devolver lo mismo
	afuera()();