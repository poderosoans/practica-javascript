/*
* Objeto Math
* Solo tiene propiedades y métodos estáticos
* Métodos
* Math.max(a,b,c....n) => Número mayor de una lista de números
* Math.min() => Número menor
* Math.random() => Devuelve un número aleatorio entre 0 y 1
* Math.floor() => Redondea hacia abajo un decimal
* Math.ceil() => Redondea hacia arriba un decimal
* Math.round() => Redondea un decimal a su entero más cercano
* Math.pow(x,n) => Eleva x al exponente n
* Math.sqrt(n) => Devuelve la raiz de n
**/
let arr = [1,2,3,4,5,6,7,8,9]; 

//console.log(Math.max(...arr)); // Spread operation (...) expande el array a una lista
//console.log(Math.min(...arr));

// Ejercicio 1 => Obtener un número aleatorio entero
let getRandomNumber = (min,max) => {
	return Math.floor(Math.random() * (max - min) + min );
}

//let arr2 = ['jose', 'roger'];
//console.log(arr2[getRandomNumber(0,arr2.length)]);

// Ejemplo (Adivinar un número random)
let guestNumber = (min,max) => {
	let numMachine = getRandomNumber(min,max);
	let numPlayer;
	let count = 0;
	do{
		count++;
		numPlayer = parseInt(prompt(`Adivina el número de la máquina ( entre ${min} y ${max} )`),10); //Convierte a número decimal
		if(numPlayer > numMachine) {
			alert(`Tu número es mayor que el de la máquina
				Vas ${count} ${count === 1 ? 'intento' : 'intentos'}`);
		}else if (numPlayer < numMachine){
			alert(`Tu número es menor que el de la máquina
				Vas ${count} ${count === 1 ? 'intento' : 'intentos'}`);
		}else{
			alert(`Adivinaste el número
				Vas ${count} ${count === 1 ? 'intento' : 'intentos'}`);
		}
	} while(numPlayer != numMachine);
};

//guestNumber(10,20);