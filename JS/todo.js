
const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('#todo-form input');
const toDoList = document.querySelector('#todo-list');

const TODOS_KEY = 'toDos'

let toDos = [];

function saveToDos () {

    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}


function paintToDo(newTodo) {

    const li = document.createElement('li')
          li.id = newTodo.id;
    const span = document.createElement('span');
    const btn = document.createElement('button');

   
    li.appendChild(span);
    li.appendChild(btn);
    span.innerText = newTodo.text;    
    btn.innerText ="❌";
    btn.addEventListener('click',deleteList)
    toDoList.appendChild(li);
}




function deleteList(event) {


    const deleteEvent = event.target.parentNode
    deleteEvent.remove();
}



function handleToDoSubmit (event) {

    event.preventDefault();

    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {

        text:newTodo,
        id: Date.now()
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();

}



toDoForm.addEventListener('submit',handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

if(savedToDos!==null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);


}
