
const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('#todo-form input');
const toDoList = document.querySelector('#todo-list');






function paintToDo(newTodo) {

    const li = document.createElement('li')
    const span = document.createElement('span');
    const btn = document.createElement('button');

   
    li.appendChild(span);
    li.appendChild(btn);
    span.innerText = newTodo;    
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
    paintToDo(newTodo);

}



toDoForm.addEventListener('submit',handleToDoSubmit);