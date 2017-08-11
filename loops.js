// for
let teachers = ['Juan', 'Pablo', 'Roger', 'Miguel']; // Array
/*
for (let i = 0; i < teachers.length; i++){
	if(teachers[i].toUpperCase().indexOf('R') == 0){
			break;
	}
	console.log(teachers[i]);
}
*/
// break
// continue

// While
/*
let i = 100;
while (i--){
	console.log('Debo atender la clase y no jugar');
}
*/
// Do While
/*
let password = 'ED';
let pass;
do{
	pass = prompt('Introduzca la contraseña');

} while (pass != password);
*/
// for of (ES6)
for(let teacher of teachers){
	console.log(teacher);
}