/*
* DOM -> Document Object Model
*	.body            -> body element
* 	.documentElement -> root (html)
*	.links			 -> enlaces
*	.scripts	     -> scripts
*	.images			 -> images
*	.head			 -> head element
*	.styleSheets     -> todos los css
*/

// document.links

// Ver información completa de objeto
//	console.dir(document)
//

/*
* Obtener elementos del DOM
* document.getElementById('id') => Devuelve solo el elemento que coincide
* document.querySelector('cssSelector') => Obtiene solo el primer elemento que coincida
* document.querySelectorAll('cssSelector') => Devuelve todos los elementos que coincidan
*
* * Si no se encuentra el (los) elementos se devuelve null
*
* querySelector() y querySelectorAll()
* Se pueden ejecutar desde el documento o desde un elemento
* querySelectorAll no devuelve un array (nodeList), es necesario expandirlo
* [...document.querySelectorAll(selector)]
*/

// Ejemplo de mala practica
	//let title = document.getElementById('title');
		//if (title){
		//	title.textContent = 'Bienvenidos';
		//}
	//title.textContent = 'Bienvenidos';
		//console.log('sigo funcionando');
	// el resto de la app no se va a ejecutar


// Ejemplo de menú (obtener elemento del HTML)
	let menu = document.getElementById('menu'),
		menuLinks = [...menu.querySelectorAll('a')],
		menuItems = [...menu.querySelectorAll('li')];

	//console.dir(menuLinks);

/*
* DOM Traversing (moverse a través del DOM)
* Element (elemento HTML)
*
* Hermanos
* 	element.nextElementSibling => hermano siguiente (elemento)
* 	element.nextSibling => Hermano siguiente (nodo)
* 	element.previuosElementSibling => hermano anterior (elemento)
* 	element.previousSibling => Hermano anterior (nodo)
*
* Padres
* 	element.parentElement.(parentElement) => padre (elemento)
* 	element.parentNode => padre (nodo)
*
* Hijos
* 	element.children -> lista de elementos hijos
* 	element.childNodes => Todos los nodos hijos
* 	element.firstElementChild => Primer elemento hijo
*	element.firstChild => Primer nodo hijo
* 	element.lastElementChild => Primer elemento hijo
*	element.lastChild => Último nodo hijo
*
*/

//	console.dir(menuItems[1]);


/*
* Propiedades de los elementos
*	Contenido
*		.textContent => Texto plano del elemento (Lectura y excritura)
*		.innerHTML => HTML interno de un elemento
*
*	Atributos
*		.attributes
*		.getAttribute('attr')
*		.setAttribute('attr', 'value')
*		.removeAttribute('attr')
*
*	Clases
*		.classList (Objeto que devuelve un nodeList)
*		    .add('className')
*			.remove('className')
*			.toggle('className') => Cambia una clase
*			.contains('className') => Devuelve true si el elemento contiene esa clase
*
*	Estilos CSS
*		.style
*			.cssProperty (usar camelCase en lugar de guiones)
*/

/*
*	Transformar el DOM
*	
*	Crear elementos
*		document.createElement('tagName')
*
*	Insertar elementos
*		.appendChild(childElement) => Inserta elemento al final del padre
*			parent.appendChild(element)
*
*		.insertBefore() => Inserta un elemento antes de otro
*			parent.insertBefore(newElement, nextElement)
*				parent => Elemento padre
*				newElement => Elemento a insertar
*				nextElement => Elemento ya existente antes del cual se insertará el nuevo
*
*	Eliminar y mover elementos
*		parent.removeChild(element) => Elimina element de parent
*
*		element.remove() => Elimina element
*/

	//let item = menuItems[1];
	//let el = document.createElement('li')
	//el.textContent ='hola';
	//menu.appendChild(el);
	//menu.insertBefore(el,menuItems[1])

// Elimina y mueve a otra posición
let el = menu.removeChild(menuItems[0]);
menu.appendChild(el)