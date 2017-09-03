/*
* Timers
* setTimeout(cb,t) => Espera un tiempo y luego ejecuta la función que se le pasa como parámetro 
* setInterval(cb,t) => Ejecuta la función que se le pasa como parámetro repetidas veces ségún cierta cantidad de tiempo
*/

	//let counter = num => console.log(++num);

	//setTimeout(function(){
	//	counter(1);
	//},2000);

	//setInterval(function(){
	//	counter(1);
	//},1000)

// Ejercicio 1: Reloj

	//let reloj = setInterval(function(){
	//	document.body.innerHTML = new Date().toLocaleString();
	//}, 1000);

// Ejercicio 2 : Cuenta regresiva
	//let countDown = ms => {
	//	let myCountDown = setInterval(function(){
	//		ms -= 1000;
	//		let minutes = Math.floor(ms/(1000 * 60)),
	//		    seconds = Math.floor((ms % (1000 * 60))/1000);
	//		    document.body.innerHTML = `Quedan ${minutes} minutos y ${seconds} segundos`;
	//		  
	//		    if(ms === 0){
	//		    	clearInterval(myCountDown);
	//		    	document.body.innerHTML = `Tiempo cumplido`;
	//		    }
	//	}, 1000);
	//};

	//countDown(70000);

// Ejercicio 3
let writing = srt => {
	let arrFromStr = srt.split('');
	let i = 0;
	let printStr = setInterval( function(){
		if(arrFromStr[i] === ' '){
			document.body.innerHTML += arrFromStr[i];
			document.body.innerHTML += arrFromStr[i+1];
			i+=2;	
		}else{
			document.body.innerHTML += arrFromStr[i];
		    i++;
		}
		
		if (i === arrFromStr.length) { // Condición que para el Interval al leer el Array
			clearInterval(printStr);
			document.body.style.color = 'steelblue';
		} 
	},300);
};

writing('ReacJS Desde Cero a parti del 4 de abril');