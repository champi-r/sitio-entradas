const sessionUser = sessionStorage.getItem('name');
const sessionPassword = sessionStorage.getItem('password');
const localUser = localStorage.getItem('name');
const localPassword = localStorage.getItem('password');

const buttonLogin = document.getElementsByClassName('login');
const buttonIdentified = document.getElementsByClassName('user-identified');
const buttonName = document.querySelector('.user-identified button span');
const loginOut = document.getElementById('loginOut');
const confirmLoginOut = document.getElementById('confirmLoginOut');

const inputUsername = document.getElementById('floatingInput');
const inputPassword = document.getElementById('floatingPassword');
const rememberMe = document.getElementById('rememberMe');
const loginIn = document.getElementById('loginIn');

// Si existe usuario y contraseña, en sesion o local
const checkSession = (localUser, localPassword, sessionUser, sessionPassword) => {
    if(localUser && localPassword || sessionUser && sessionPassword){
        buttonLogin[0].classList.add("d-none");
        buttonIdentified[0].classList.remove("d-none");
        localUser == null ? buttonName.innerText=sessionUser : buttonName.innerText=localUser;
    }
}
checkSession(localUser, localPassword, sessionUser, sessionPassword);

loginIn.addEventListener('click', login);
confirmLoginOut.addEventListener('click', confirmLogout);

const logout = () =>{
    localStorage.removeItem('name');
    localStorage.removeItem('password');
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('password');
}

function confirmLogout(){
    buttonLogin[0].classList.remove("d-none");
    buttonIdentified[0].classList.add("d-none");
    logout();
}

function login (){
    const user = inputUsername.value;
    const pass = inputPassword.value;

    if(rememberMe.checked){
        localStorage.setItem('name', user);
        localStorage.setItem('password', pass);
    } else{
        sessionStorage.setItem('name', user);
        sessionStorage.setItem('password', pass);
    }
    buttonLogin[0].classList.add("d-none");
    buttonIdentified[0].classList.remove("d-none");
    checkSession(localUser, localPassword, sessionUser, sessionPassword);
}