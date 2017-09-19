'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Al hacer clic en una imagen se debe abrir su versión grande

// Obtiene la galería de imágenes
var getImages = function getImages(container) {
	return [].concat(_toConsumableArray(container.querySelectorAll('img')));
};

// Obtiene un array de las rutas de las imágenes grandes
var getLargeImages = function getLargeImages(gallery) {
	return gallery.map(function (el) {
		return el.src;
	}).map(function (el) {
		return el.replace('thumb', 'large');
	});
};

// Obtiene las descripciones de las imágenes
var getDescriptions = function getDescriptions(gallery) {
	return gallery.map(function (el) {
		return el.alt;
	});
};

// Captura el evento click en la galería para abrir el lightbox
var openLightboxEvent = function openLightboxEvent(container, gallery, larges, descriptions) {
	container.addEventListener('click', function (e) {
		var el = e.target,
		    i = gallery.indexOf(el);
		if (el.tagName == 'IMG') {
			openLightbox(gallery, i, larges, descriptions);
		}
	});
};

// Imprimir everlay del lightbox en el body
var openLightbox = function openLightbox(gallery, i, larges, descriptions) {
	var lightboxElement = document.createElement('div');
	lightboxElement.innerHTML = '\n\t\t<div class="lightbox-overlay">\n\t\t\t<figure class="lightbox-container">\n\t\t\t\t<img src="' + larges[i] + '" class="lightbox-image">\n\t\t\t\t<figcaption>\n\t\t\t\t<p class="lightbox-description">' + descriptions[i] + '</p>\n\t\t\t\t<nav class="lightbox-navigation">\n\t\t\t\t\t<a href="#" class="lightbox-navigation__button prev"></a>\n\t\t\t\t\t<span class="lightbox-navigation__counter">Imagen ' + (i + 1) + ' de ' + gallery.length + '</span>\n\t\t\t\t\t<a href="#" class="lightbox-navigation__button next"></a>\n\t\t\t\t</nav>\n\t\t\t\t</figcaption>\n\t\t\t</figure>\n\t\t</div>\n\t';
	lightboxElement.id = 'lightbox';
	document.body.appendChild(lightboxElement);
};

var lighbox = function lighbox(container) {
	var images = getImages(container),
	    larges = getLargeImages(images),
	    descriptions = getDescriptions(images);
	openLightboxEvent(container, images, larges, descriptions);
};

lighbox(document.getElementById('gallery-container'));

// se abre en un overlay
// Cerrar el overlay

// Al abrirse la versión grande debe tener
// Descripción de la imagen (que se tomará del atributo alt)
// Navegación entre la imagen (siguiente y anterior)