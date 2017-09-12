/*
*
* Un evento es 'cualquier cosa' que sucede en la aplicación
*
* ¿Como reconocer los eventos disponibles en un objeto?
* 	console.dir(obj)
*	todos los que comiencen con on son eventos
*
* ¿Cómo aplico una función a un evento? (no recomendable)
* 	objeto.onEvent = function(){}
*	  onEvent = evento del objeto
*
*	Se recomienda usar addEventListener
*	objeto.addEventListener('event', function(){})
* 	event => Es el nombre del evento (sin 'on')
*/


/*
*	Eventos comunes
*	De mouse
*		'click' => Cuando el usuario hace clic
*		'dblclick' => Doble clic
*		'mousedonw' => El mouse ingresa a un elemento 
*		'mouseenter' => Sale del elemento
*		.
*		.
*	De teclado
*		'keydown' => Cuando se presiona una tecla
*		'keyup'	=> Cuando se suelta una tecla
*		.
*		.
*	De formulario
*		'submit' => Cuando se envia el formulario
*		'change' => Cambio de valor de un input
*
*	De window
*		'resize' => Cuando se redimensiona la ventana
*		'scroll' => Cuando se hace scroll
*		'load'	=> cuando se carga completamente toda la página web
*		'DOMContentLoaded' => Cuando se renderiza el DOM
*/
let menu = document.getElementById('menu');

// Ejemplo	
	//menu.addEventListener('click', e => {
	//	e.preventDefault(); // Previene lo que hace el navegador por defecto
	//	e.target.style.backgroundColor = 'red';
	//});

/*
*	Delegación de eventos
*		
*
*/

let eventHandler = e => {
	e.preventDefault();
	if (e.target.tagName=='A'){
		console.log(e.target.textContent);
	}
};

menu.addEventListener('click',eventHandler);