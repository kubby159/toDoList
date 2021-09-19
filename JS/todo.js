const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');


let toDos = [];


function deleteToDo (event) {

    const li = event.target.parentElement;
    li.remove();

}

function saveToDos() {
    localStorage.setItem('toDos',JSON.stringify(toDos));
}

function paintToDo(newTodo) {

    const li = document.createElement('li');
    const span = document.createElement('span');
    const btn = document.createElement('button');
    btn.innerText = '❌'
    btn.addEventListener('click', deleteToDo)
    li.appendChild(span);
    li.appendChild(btn);
    span.innerText = newTodo;
    toDoList.appendChild(li);

}


function handleToDoSubmit(event) {

    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener('submit',handleToDoSubmit)


const savedToDos = localStorage.getItem('toDos');
if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo)
}