/*
* Objeto window => Es el padre de todos los objetos
* alert('Hola mundo') => window.alert('Hola mundo')
*
*/

/* Propiedades
* *Dimensiones del navegador*
* .innerWidth
* .innerHeight
* .outerWidth (el total)
* .outerHeight (el total, incluye scroll)
*
* *Coordenadas de la ventana*
* .screenX
* .screenY
*
* *Scroll* (mide en px)
* .scrollX
* .scrollY
*
* Storage
* .localStorage (No se borra salvo manualmente)
* .sessionStorage (almacenamiento local que se borra cuando cerramos el navegador)
*/

/*
* Métodos
*
* *Diálogos*
* alert()
* prompt() => Se guarda en una variable como string una respuesta
* confirm() => Devuelve true (aceptar) o false (cancelar)
*
* Manipular ventanas
* .open('url')
* .close() => Cierra ventanas que abrimos con JS
* .getSelection() = Captura una selección, ejmp: window.getSelection().toString()
* .getComputedStyle(element) => Devuelve un objeto con las propiedades CSS computadas (Lo que el navegador implementó en la vista) => ejm: window.getComputedStyle($0).borderRadius
* .scrollTo(x,y) => Nos envía a la posición x,y
* .scrollBy(x,y) => Suma a la pósición actual los valores x,y
*/

/* 
* history (Tiene acceso a la sesión y pestaña actual)
* .back() => atras
* .forward() => adelante
* .go(n) => Para moverse en el historial n+ (ir adelante) n- (ir atras)
*/