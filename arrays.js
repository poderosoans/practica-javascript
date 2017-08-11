// Arrays
	//let arr = [1,2,3,4,5,6,'true'];

/*
console.log(arr);
let sum = 0;
for (let i = 0; i < arr.length; i++) {
	let element = arr[i];
	if(typeof(element) == 'number')
		sum += element;
}
*/
// Para añadir una propiedad
// Array.prototype.saludo = 'Hola';
//console.log(sum);

// indexOf() Devuelve el indice de un elemento
//console.log(arr.indexOf('true'));

// Agregar elementos con: 
// .push(el1,el2, el3) => Añade al final
// .unshift(el1,el2,el3) => Añade al inicio
	//arr.push('Javascript');

// Para devolver un length se añade a una variable
	//let newLength = arr.unshift('Roger', 'Poder');
// console.log(arr);

// Devuelve el nuevo length
// console.log(newLength);

// Eliminar un elemento (sin parámetros)
// Estos métodos devuelven el elemento eliminado
// .pop() al final
// .shift() al inicio
// let deleted = arr.shift()
// console.log(deleted);
// console.log(arr);

// .join('separador') Convierte de un array a un string
// 'separadores' es por defecto una coma
// console.log(arr.join(' '));

// splice() => Añade o quita elementos
	//splice(a,b,items)
// Eliminar elemento => Empieza en el 2 y elimina un elemento
	//arr.splice(2,1);
// Añadir elemento => Reemplaza dos elementos por dos nuevos | 0 para no eliminar y solo añadir
	//arr.splice(2,2,'escuela', 'digital');
	//console.log(arr);

// slice() Crea un nuevo array
	//console.log(arr);
	//let arr2 = arr.slice(2,5);
	//console.log(arr2);

// ES6
// Devolver el primer elemento que cumpla con una condición
// .find(cb);
let arr = [1,2,3,4,5];
// Usando arrow function
let num = arr.find( el => el > 3 );
// Devuelve el indice
let numIndex = arr.findIndex( el => el > 3 );
console.log(numIndex);

// Iteradores (Recuerdan la posición)
// Son objetos que contienen un método next()
// Ese método get devuelve un objeto con dos propiedades
// value (Valor actual), done (Boolean cuando no puede seguir iterando devuelve true)
// .keys()   .values()  .entries()
let iterador = arr.entries();
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
