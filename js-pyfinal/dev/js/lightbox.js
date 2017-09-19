// Al hacer clic en una imagen se debe abrir su versión grande

// Obtiene la galería de imágenes
const getImages = container => [...container.querySelectorAll('img')];

// Obtiene un array de las rutas de las imágenes grandes
const getLargeImages = gallery => gallery.map( el => el.src)
										 .map( el => el.replace('thumb','large'));

// Obtiene las descripciones de las imágenes
const getDescriptions = gallery => gallery.map( el => el.alt);

// Captura el evento click en la galería para abrir el lightbox
const openLightboxEvent = (container,gallery, larges, descriptions) => {
	container.addEventListener('click', e => {
		let el = e.target,
			 i = gallery.indexOf(el);
		if (el.tagName == 'IMG'){
			openLightbox(gallery, i, larges, descriptions);
		} 
	})
};


// Imprimir everlay del lightbox en el body
const openLightbox = (gallery, i, larges, descriptions) => {
	let lightboxElement = document.createElement('div');
	lightboxElement.innerHTML = `
		<div class="lightbox-overlay">
			<figure class="lightbox-container">
				<img src="${larges[i]}" class="lightbox-image">
				<figcaption>
				<p class="lightbox-description">${descriptions[i]}</p>
				<nav class="lightbox-navigation">
					<a href="#" class="lightbox-navigation__button prev"></a>
					<span class="lightbox-navigation__counter">Imagen ${i + 1} de ${gallery.length}</span>
					<a href="#" class="lightbox-navigation__button next"></a>
				</nav>
				</figcaption>
			</figure>
		</div>
	`;
	lightboxElement.id = 'lightbox';
	document.body.appendChild(lightboxElement);
};

const lighbox = container => {
	let images = getImages(container),
		larges = getLargeImages(images),
		descriptions = getDescriptions(images);
	openLightboxEvent(container, images, larges, descriptions);
}

lighbox(document.getElementById('gallery-container'))


	// se abre en un overlay
	// Cerrar el overlay

// Al abrirse la versión grande debe tener
	// Descripción de la imagen (que se tomará del atributo alt)
	// Navegación entre la imagen (siguiente y anterior)