
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');



//login Btn
function onLoginSubmit (event) {
   event.preventDefault(); //브라우저의 기본 동작을 막아준다. 여기서는 submit 시 새로고침되는 걸 막아줌.
    const username = loginInput.value;
    localStorage.setItem("username",username);
    loginForm.classList.add('hidden');
    greeting.innerText = `Hello! ${username}`;
    greeting.classList.remove('hidden');

}



loginForm.addEventListener('submit', onLoginSubmit);

