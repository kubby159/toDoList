
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const USERNAME_KEY = 'username'; //같은 String이 반복될 떄는 오타날 확률이 있음. 그러므로 변수에 담아서 사용하는 것이 안전함.(오류찾기가 쉬움)

//login Btn
function onLoginSubmit (event) {
   event.preventDefault(); //브라우저의 기본 동작을 막아준다. 여기서는 submit 시 새로고침되는 걸 막아줌.
   loginForm.classList.add('hidden'); 
   const username = loginInput.value;
    localStorage.setItem("USERNAME_KEY",username);
    paintGreetings(username);

}

//paintGreetings

function paintGreetings(username) {

    greeting.innerText = `Hello! ${username}`; 
    greeting.classList.remove('hidden');
}



//localstorage 받아오기.
const savedUserName = localStorage.getItem('USERNAME_KEY');

if(savedUserName === null) {

    //show the form

    loginForm.classList.remove('hidden');
    loginForm.addEventListener('submit', onLoginSubmit);
} else  {

    // show the greeting
    paintGreetings(savedUserName);
    
}

