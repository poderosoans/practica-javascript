// POO
// Clase => Plantilla a partir de la cual se crean objetos
// Instancia => Cada objeto creado a partir de una clase
// Constructor => Función que se ejecuta automáticamente al insanciar una clase
// Propiedad => Valores
// Métodos => Funciones
// This => Hace referencia a la instancia

// Objetos literales
	let jon = {
		nombre : 'Jon',
		apellido : 'Mircha',
		cursos: ['Node.js', 'React.js'],
		pais: 'México',
	}

// Clases en ES6
	class Persona {
		constructor(nombre, apellido, pais){
			this.nombre = nombre;
			this.apellido = apellido;
			this.pais = pais;
			this.nombreCompleto = `${nombre} ${apellido}`;
		}

		saludar(){
			return `Hola soy, ${this.nombreCompleto} y vivo en ${this.pais}`;
		}
	}

	const persona1 = new Persona('Roger', 'Pomacarhua', 'Perú');
	const persona2 = new Persona('Pedro', 'Lopez', 'España');
	console.log(persona1);
	console.log(persona2);

// Herencia
	class Profesor extends Persona{
		constructor(nombre, apellido, pais, curso){
			super(nombre, apellido, pais);
			this.curso = curso;
		}

		invitaAlCurso(){
			return `Hola, soy ${this.nombreCompleto} y te invito al curso ${this.curso}`;
		}
	}

	class Estudiante extends Persona{
		constructor (nombre, apellido, pais, aula, codAlumno){
			super(nombre, apellido, pais);
			this.aula = aula;
			this.codAlumno = codAlumno;
		}

		getNombre(){
			return this.nombre;
		}
	}


	const profesor1 = new Profesor('Daniel', 'Romero', 'Colombia', 'PHP desde cero');
	console.log(profesor1.invitaAlCurso());

	const alumno1 = new Estudiante('Clara', 'Diaz', 'Perú', '101-A', '2150');
	console.log(alumno1.getNombre());