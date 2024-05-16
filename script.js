let logIn = document.querySelector(".login-label");
let btn = "log";
let namefeild = document.querySelector(".namefield");
let title = document.querySelector(".account");
let signInBtn = document.querySelector(".signin");

let input1 = document.querySelector("#name");
let input2 = document.querySelector("#email");
let input3 = document.querySelector("#pass");


//Convert SignUp to LogIn & LogIn to SignIn Form:-
logIn.addEventListener("click", () => {
    if (btn === "log") {
        btn = "sign";
        document.querySelector(".login-label").innerText = "Back to Signup";
        namefeild.style.maxHeight = '0';
        namefeild.style.visibility = 'hidden';
        title.innerText = "Login - Form";
        signInBtn.innerText = "Log - In";
    }
    else {
        btn = "log";
        document.querySelector(".login-label").innerText = "Login";
        namefeild.style.maxHeight = 'max-content';
        namefeild.style.visibility = 'visible';
        title.innerText = "Create Account";
        signInBtn.innerText = "Sign - Up";
    }
})
