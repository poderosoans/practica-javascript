// Date => Es un objeto que requiere ser instanciado para usarse

	//let date = new Date(),
	//date2 = new Date();
	//date.setFullYear(1980);
	//date.setMinutes(58);
	//date.setHours(20);
	//date.setDate(21);
	//date.setMonth(11); // De 0 a 11 porque es un Array
	//console.log(date);
	//console.log(date2);

// Métodos get en el objeto Date
// .getFullYear()
// .getMinutes()
// .getMonth() => 0 es enero
// .getHours() => 0 - 24
// .getSeconds()
// .getMilliseconds()
// .getDate() => Día del mes
// .getDay() => Día de la semana (0 es domingo)
// .getTime() => Milisegundos desde el 1 de enero de 1970

 	//let date = new Date();
	//console.log(date.getTime());

// Ejercicio 1: Imprimir la fecha y hora en formato personalizado
	//let date = new Date();

// Obtener el día en letras
	//let getStringDay = date => {
	//	let days = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
	//	return days[date.getDay()];
	//};

// Obtener el mes en letras
	//let getStringMonth = date => {
	//	let days = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Setiembre','Octubre','Noviembre','Diciembre'];
	//	return days[date.getMonth()];
	//};

// Añade un cero adelante
	//let hourLeadingZero = num => ('0' + num).slice(-2); //slice extrae los dos últimos valores

// Obtener hora en AM o PM
	//let getAmPmHours = date => {
	//	let hours = date.getHours();
	//	let minutes = date.getMinutes();
	//	let seconds = date.getSeconds();
	//	let amPm = hours >= 12 ? 'pm' : 'am';
	//	if (amPm === 'pm') hours -= 12;

	//	return `${hourLeadingZero(hours)}:${hourLeadingZero(minutes)}:${hourLeadingZero(seconds)}${amPm}`;
	//};

	//let dateFormated = `${getStringDay(date)} ${date.getDate()} de ${getStringMonth(date)} de ${date.getFullYear()}, ${getAmPmHours(date)}`;
	//console.log(dateFormated);

// Definir fechas
// new Date(año,mes,dia,horas,minutos,segundos,milisegundos)
// new Date(string)
	//console.log(new Date(1994,8,24,5,30,32));
	//console.log(new Date('9/24/1994'));
	//console.log(new Date('Sep 24 1994 05:30:32 GMT-0500'));

// Operaciones con fechas (Calcular edad)
// Se operan con milisegundos (ms)
// 1s = 1000ms
// 1m = 1000ms * 60
// 1h = 1000ms * 60 * 60
// 1d = 1000ms * 60 * 60 * 24
// 1y = 1000ms * 60 * 60 * 24 * 365

	// Método que calcula el tiempo que paso en horas, minutos, días, años, etc
	let msToDateObj = ms => {
		let seconds = Math.floor(ms / 1000), // Math.floor redondea hacia abajo, quita los decimales y te da un entero
			minutes = Math.floor(ms / (1000 * 60)),
			hours = Math.floor(ms / (1000 * 60 * 60)),
			days = Math.floor(ms / (1000 * 60 * 60 * 24)),
			months = Math.floor(ms / (1000 * 60 * 60 * 24 * 30)),
			years = Math.floor(ms / (1000 * 60 * 60 * 24 * 365));

		return {years,months,days,hours,minutes,seconds};
	};

	// Método que calcula El año y los días, horas minutos que paso...
	let msToExpandDateObj = ms => {
		let years = msToDateObj(ms).years,
			days = msToDateObj(ms).days % 365, // Queda el resto de la división
			hours = msToDateObj(ms).hours % 24,
			minutes = msToDateObj(ms).minutes % 60,
			seconds = msToDateObj(ms).seconds % 60;

		return {years,days,hours,minutes,seconds};
	}

	let date = new Date(),
		date2 = new Date('Sep 24 1994 05:30:32 GMT-0500');
	//console.log(msToExpandDateObj(date - date2));

/*	
* Horarios y fechas internacionales
* .getUTC... (fullYear, Hours, etc...)
**/
