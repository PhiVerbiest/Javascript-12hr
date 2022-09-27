let todo1 = 'Get groceries';
let todo2 = 'Wash car';
let todo3 = 'Make dinner';

let todos = [{
    title: 'Get groceries',
    dueDate: '2021-10-04'
}, {
    title: 'Wash car',
    dueDate: '2021-02-03'
}, {
    title: 'Make dinner',
    dueDate: '2021-03-04'
}];

function addTodo() {
    // Todo list
    const textbox = document.getElementById('todo-title');
    const title = textbox.value;

    // Date picker
    const datePicker = document.getElementById('date-picker');
    const dueDate = datePicker.value;

    todos.push({
        title: title,
        dueDate: dueDate
    });


    render();
}

function deleteTodo() {
    console.log('delete');
}

function render() {
    // reset our list
    document.getElementById('todo-list').innerHTML = '';

    todos.forEach(function (todo){
        const element = document.createElement('div');
        element.innerText = todo.title + '' + todo.dueDate;

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.style = 'margin-left: 12px;';
        deleteButton.onclick = deleteTodo;
        element.appendChild(deleteButton);

        const todoList = document.getElementById('todo-list');
        todoList.appendChild(element);
    });
}