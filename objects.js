// Objetos (Colección de datos separados por parejas) Propiedad = Valor

const persona = {
	nombre: "Roger",
	edad: 37,
	país: 'Perú',
	esPadre: true,
	hijos: ['Sofia', 'Alejandro'],
	saludar(){
		return 'Datos de Roger';
	}
}

// Añadiendo propiedad luego de declarar el objeto
	persona.ciudad = 'Lima';

// Operadores
// Delete => Elimina una propiedad
	//delete persona.esPadre;
// in => Devuelve true si existe la propiedad en el objeto o cadena de prototipo
	//console.log('nombre' in persona);

// Prototipos
	Object.prototype.numeroMagico = 27;

	console.log(persona.edad);
// Verifica solo en el objeto si existe la propiedad
	console.log(persona.hasOwnProperty('hijos'));

// ES6
// Copiar un objeto
	let persona2 = Object.assign({}, persona);
	console.log(persona2);
// Asignar variables existentes a propiedades
	let a = 'Hola', b = 'mundo';
	let myObj = {
		a,
		b
	}
	console.log(myObj);
// Expresiones (Cualquier porción de codigo o enunciado que devuelve un valor) en propiedades
let myObj2 = {
	[a + b]: 'Hola mundo'
}
console.log(myObj2);