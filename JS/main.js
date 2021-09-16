

const loginInput = document.querySelector('#login-form input');
const loginButton = document.querySelector('#login-form button');


//login Btn
function  onLoginBtnClick () {
    console.log("Hello", loginInput.value);
   

}


loginButton.addEventListener('click', onLoginBtnClick);