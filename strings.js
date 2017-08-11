let saludo = 'Bienvenidos a Escuela Digital';

// Propiedades
let longitud = saludo.length;
//console.log(saludo);

// Métodos sin parámetros
	// Quita espacios al inicio y al final.
	//console.log(saludo.trim());
	// Convierte todo a mayuscula
	//console.log(saludo.trim().toUpperCase());
	// Convierte todo a minuscula
	//console.log(saludo.trim().toLowerCase());

// Métodos con parámetros
	// indexOf(string[,i]) Para buscar una palabra, cuando no encuentra devuelve -1
	//console.log(saludo.indexOf('ESCUELA', 1));
	// lastIndexOf(string[,1])
	//console.log(saludo.lastIndexOf('i', 20));
	// replace (oldString, newString)
	let newSaludo = saludo.replace('Escuela Digital','Bextlan');
	//console.log(newSaludo);
	//console.log(saludo);
	// split('separador', N) convierte un string a array []
	let arrayFromSaludo = saludo.split(' ');
	//console.log(arrayFromSaludo);
	// substring(a,b), substr(a,b), slice(a,b)
	let substring, substr, slice;

	substring = saludo.substring(4,-1); // si esta en negativo selecciona hacia atrás
	console.log(substring);

	substr = saludo.substr(-10,5); // toma una cantidad de caracteres partiendo del indice indicado
	console.log(substr);

	slice = saludo.slice(4,-7); // los últimos 7 valores no los toma
	console.log(slice);

// Nuevos métodos ES6 (devuelven un boolean)
	// .startsWith(), endsWith(), includes()
	console.log(saludo.endsWith('d'));
	console.log(saludo.includes('Digital'));