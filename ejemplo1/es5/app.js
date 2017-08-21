'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function () {
	function Task(name) {
		_classCallCheck(this, Task);

		this.name = name;
		this.isComplete = false;
	}

	_createClass(Task, [{
		key: 'complete',
		value: function complete() {
			this.isComplete = !this.isComplete;
		}
	}]);

	return Task;
}();

var TaskList = function () {
	function TaskList(name) {
		_classCallCheck(this, TaskList);

		this.name = name;
		this.tasks = [];
	}

	_createClass(TaskList, [{
		key: 'addTask',
		value: function addTask(task, element) {
			this.tasks.push(task);
			this.renderTasks(element);
		}
	}, {
		key: 'removeTask',
		value: function removeTask(i, element) {
			this.tasks.splice(i, 1);
			this.renderTasks(element);
		}
	}, {
		key: 'renderTasks',
		value: function renderTasks(element) {
			var tasks = this.tasks.map(function (task) {
				return '\n\t\t\t<li class="task">\n\t\t\t\t<input type="checkbox" class="task__complete-button">\n\t\t\t\t<span class="task__name">' + task.name + '</span>\n\t\t\t\t<a href="#" class="task__remove-button">X</a>\n\t\t\t</li>';
			});
			element.innerHTML = tasks.reduce(function (a, b) {
				return a + b;
			}, '');
		}
	}]);

	return TaskList;
}();

// Trabajando con el DOM


var addTaskElement = document.getElementById('add-task');
var tasksContainerElement = document.getElementById('tasks-container');
var inbox = new TaskList('inbox');

//	Función que añade las tareas desde el DOM
function addDOMTask(e) {
	var list = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : inbox;

	// Obtener el texto del input
	if (e.key == 'Enter') {
		// Crear la tarea instanciando la clase
		var task = new Task(this.value);
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
	var taskItem = e.target.parentElement,
	    tasksItems = [].concat(_toConsumableArray(tasksContainerElement.querySelectorAll('li')));
	return tasksItems.indexOf(taskItem);
}

// Eliminar tarea desde el DOM
function removeDOMtask(e) {
	var list = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : inbox;

	// Detectar que se hizo clic en el enlace
	if (e.target.tagName == 'A') {
		// Etiqueta (todos los elementos HTML son objetos)
		// Remover tarea de la lista (se necesita el indice)
		console.log('remove');

		list.removeTask(getTaskIndex(e), tasksContainerElement);
	}
}

// Detectar evento en el contenedor
tasksContainerElement.addEventListener('click', removeDOMtask);

// Completar la tarea

function completeDOMtask(e) {
	var list = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : inbox;

	// Detectar que se hizo clic en el input
	if (e.target.tagName == 'INPUT') {
		// Etiqueta (todos los elementos HTML son objetos)
		// Completar la tarea de la lista (se necesita el indice)
		list.tasks[getTaskIndex(e)].complete();
		console.table(list.tasks);
	}
}

// Detectar evento en el contenedor
tasksContainerElement.addEventListener('click', completeDOMtask);