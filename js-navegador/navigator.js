/*
* Geolocation es un objeto con tres métodos
* .clearWatch()
* .watchPosition()
* .getCurrentPosition(success[,error,options])
**/

/*
navigator.geolocation.getCurrentPosition(function(geoposition){
	let coords = geoposition.coords
		lat = coords.latitude,
		long = coords.longitude;

	console.log(lat, long);
});
*/
// => navigator.geolocation.getCurrentPosition

/*
* Location => Contiene la información de la página actual
* .href      -> url
* .pathname  -> la ruta dentro del dominio
* .hash      -> el marcador
* .origin    -> protocol + hostname
* .protocol  -> http o https
* .hostname  -> hostname (dominio o IP)
* .host      -> hostname y port
* .port      -> puerto
* .search    -> parámetros de búsqueda ?id=1
*/

// => location


// Ejercicio 01 (determinar el item activo de un menú)

//function getCurrentMenuItem(containerElement) {
//	let url = location.href,
//		links = [...containerElement.querySelectorAll('a')];
//	links.map(link => {
//		if (link.href == url) return link.classList.add('active');
//	})
//}

//getCurrentMenuItem(document.getElementById('menu'));