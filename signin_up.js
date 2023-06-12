var loginform = document.getElementById('signin');
var register = document.getElementById('signup');
var forgot = document.getElementById('forgot')


function signup() {
    register.style.transform = "translateX(0px)";
    loginform.style.transform = "translateX(0px)";
    forgot.style.transform = "translateX(-900px)"
}

function signin() {
    register.style.transform = "translateX(800px)";
    loginform.style.transform = "translateX(800px)";
    forgot.style.transform = "translateX(-900px)"
}

function forgotp() {
    forgot.style.transform = "translateX(900px)"
    register.style.transform = "translateX(400px)";
    loginform.style.transform = "translateX(400px)";
}


function loginstorage() {
    if (Name() && password()) 
    {
    let username = document.getElementById('supname').value
    let password = document.getElementById('suppass').value
    localStorage.setItem(username, password)
    localStorage.setItem('User', username)
    console.log(username, password) 
    alert('Hi Sign up successful, Pls Sign in')
    signin()
}  


} 

function logintoApp() {
    if (Name1() && password1()) 
    {
    let username = document.getElementById('sinname').value
    let password = document.getElementById('sinpass').value
    if (localStorage.getItem(username)) {
        if (localStorage.getItem(username) == password) {
            localStorage.setItem('User', username)
            window.location.assign("index.html");
            alert("login successful")
        }
        else {
            alert("invalid Password!")
        }
    }
    else {
        alert("invalid User!")
    }
}
}

function forgotApp() {
    if (Name2() && password2()) {
        let usernamef = document.getElementById('forname').value
        let passwordf = document.getElementById('forpass').value
        localStorage.setItem(usernamef, passwordf)
        console.log(passwordf)
        alert("Password changed successfully")
        signin()
    }
}

function Name() {
    let username = document.getElementById('supname').value
    let valid = document.getElementById('nameval')
    if (username == '') {
        valid.innerHTML = 'this field is required'
        return 0
    }
    else {
        valid.innerHTML = ""
        return 1
    }
}


function password() {
    let rpass = document.getElementById('suppass').value
    let valid = document.getElementById('passval')
    if (rpass == '') {
        valid.innerHTML = 'this field is required'
        return 0
    }

    else if (rpass.includes("@") && rpass.length == 6 && rpass.includes("#")) {
        valid.innerHTML = "";
        return 1
    }
    else {
        valid.innerHTML = "incorrect password";
        return 0
    }
}



function Name1() {
    let username = document.getElementById('sinname').value
    let valid = document.getElementById('valname')
    if (username == '') {
        valid.innerHTML = 'this field is required'
        return 0
    }
    else {
        valid.innerHTML = ""
        return 1
    }
}


function password1() {
    let rpass = document.getElementById('sinpass').value
    let valid = document.getElementById('valpas')
    if (rpass == '') {
        valid.innerHTML = 'this field is required'
        return 0
    }

    else if (rpass.includes("@") && rpass.length == 6 && rpass.includes("#")) {
        valid.innerHTML = "";
        return 1
    }
    else {
        valid.innerHTML = "incorrect password";
        return 0
    }
}


function Name2() {
    let username = document.getElementById('forname').value
    let valid = document.getElementById('namefor')
    if (username == '') {
        valid.innerHTML = 'this field is required'
        return 0
    }
    else {
        valid.innerHTML = ""
        return 1
    }
}


function password2() {
    let rpass = document.getElementById('forpass').value
    let valid = document.getElementById('pasfor')
    if (rpass == '') {
        valid.innerHTML = 'this field is required'
        return 0
    }

    else if (rpass.includes("@") && rpass.length == 6 && rpass.includes("#")) {
        valid.innerHTML = "";
        return 1
    }
    else {
        valid.innerHTML = "incorrect password";
        return 0
    }
}



