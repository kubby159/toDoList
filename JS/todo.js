const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');

function deleteToDo (event) {

    const li = event.target.parentElement;
    li.remove();

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
    paintToDo(newTodo);
}

toDoForm.addEventListener('submit',handleToDoSubmit)
