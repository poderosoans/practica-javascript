class Task {

	constructor(name) {
		this.name = name;
		this.isComplete = false;
	}

	complete() {
		this.isComplete = !this.isComplete;
	}
}

class TaskList {

	constructor (name){
		this.name = name;
		this.tasks = [];
	}

	addTask(task, element) {
		this.tasks.push(task);
		this.renderTasks(element);
	}

	removeTask(i, element) {
		this.tasks.splice(i, 1);
		this.renderTasks(element);
	}

	renderTasks(element) {
		let tasks = this.tasks.map( task => `
			<li class="task ${task.isComplete ? 'complete' : ''}">
				<input type="checkbox" 
				        class="task__complete-button"
				        ${task.isComplete ? 'checked' : ''}>
				<span class="task__name">${task.name}</span>
				<a href="#" class="task__remove-button">X</a>
			</li>`);
		element.innerHTML = tasks.reduce((a,b) => a + b, ''); // Valor inicial se está pasando un String vacío
	}
}



// Trabajando con el DOM
const addTaskElement = document.getElementById('add-task');
const tasksContainerElement = document.getElementById('tasks-container');
const inbox = new TaskList('inbox');

//	Función que añade las tareas desde el DOM
function addDOMTask (e, list = inbox) {
	// Obtener el texto del input
	if(e.key == 'Enter') {
		// Crear la tarea instanciando la clase
		let task = new Task(this.value);
		// Añadir la tarea a la lista
		list.addTask(task, tasksContainerElement);
		// Borrar el texto del input
		this.value = '';
	}

}
// El navegador está atento a un evento
addTaskElement.addEventListener('keyup', addDOMTask);

// Obtener indice de la tarea actual
function getTaskIndex(e) {
	let taskItem = e.target.parentElement, // Se selecciona al padre
		    tasksItems = [...tasksContainerElement.querySelectorAll('li')]; // Busca con un selector de CSS los LI
		    return tasksItems.indexOf(taskItem);
}

// Eliminar tarea desde el DOM
function removeDOMtask(e, list = inbox) {
	// Detectar que se hizo clic en el enlace
	if(e.target.tagName == 'A'){ // Etiqueta (todos los elementos HTML son objetos)
		// Remover tarea de la lista (se necesita el indice)
		console.log('remove');

		list.removeTask(getTaskIndex(e),tasksContainerElement);
    }
}

// Detectar evento en el contenedor
tasksContainerElement.addEventListener('click', removeDOMtask);

// Completar la tarea

function completeDOMtask(e, list = inbox) {
	// Detectar que se hizo clic en el input
	if(e.target.tagName == 'INPUT'){ // Etiqueta (todos los elementos HTML son objetos)
		// Completar la tarea de la lista (se necesita el indice)
		list.tasks[getTaskIndex(e)].complete();
		// classList = Lista que contiene a todas las clases del elemento, toggle cambia, añade o quita una clase
		e.target.parentElement.classList.toggle('complete');
		console.table(list.tasks);
    }
}

// Detectar evento en el contenedor
tasksContainerElement.addEventListener('click', completeDOMtask);