// .map()  => crea un nueo array y hace un cambio al original
// .filter() => fitra los elementos y lo devuelve en un nuevo array
// .reduce() => Selecciona los elementos del array y devuelve un solo valor

let estudiantes = [
	{
		nombre: 'Roger',
		calificacion: 20
	},
	{
		nombre: 'Juan',
		calificacion: 5
	},
	{
		nombre: 'Pablo',
		calificacion: 10
	}
];

// map(cb)
// Transforma cada elemento del array según el callback y devuelve un nuevo array


// opción que demora
	let estudiantesNombres = []
	for (let i = 0; i < estudiantes.length; i++) {
		estudiantesNombres.push(estudiantes[i].nombre);
	}

// opción optimizada
	let eNombres = estudiantes.map(estudiante => estudiante.nombre);

	//console.log(eNombres);

// filter(cb)
	let estudiantesAprobados = estudiantes.filter(estudiante => estudiante.calificacion > 10);
	console.log(estudiantesAprobados);
	let estudiantesAprobadosNombres = estudiantesAprobados.map(estudiantea => estudiantea.nombre);
	//console.log(estudiantesAprobadosNombres);

// reduce(cb(prev,current,[i,arr])[, initial])
	let numeros = [1,2,3,40,5];
	let suma = numeros.reduce((a,b) => a + b);
	//console.log(suma);
// Máximo
	let max = numeros.reduce((a,b) => a > b ? a : b);
	//console.log(max);
// Promedio
	let promedio = numeros.reduce((a,b,i,arr) => {
		b+=a;

		return i == arr.length -1 ? b / arr.length : b;
	});

	//console.log(promedio);

// Mejor estudiante
	let mejorEstudiante = estudiantes
							.reduce((a,b) => { 
								if(a.calificacion > b.calificacion){
									return {
										nombre: a.nombre,
										calificacion: a.calificacion 
								    }
								}else{
									return {
										nombre: b.nombre,
										calificacion: b.calificacion 
								    }
								}
							});


	console.log(mejorEstudiante);

