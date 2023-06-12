

function Name() {
    let username = document.getElementById('rname').value
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

function phone() {
    let rphone = document.getElementById('rphone').value
    let valid = document.getElementById('phoneval')
    if (rphone == '') {
        valid.innerHTML = 'this field is required'
        return 0
    }

    else if (rphone.length == 10) {
        valid.innerHTML = "";
        return 1
    }
    else {
        valid.innerHTML = "Mobile must be 10 digits";
        return 0
    }
}
function Email() {
    let remail = document.getElementById('remail').value
    let valid = document.getElementById('emailval')
    if (remail == '') {
        valid.innerHTML = 'this field is required'
        return 0
    }

    else if (remail.includes("@")) {
        valid.innerHTML = "";
        return 1
    }
    else {
        valid.innerHTML = "incorrect email id";
        return 0
    }
}

function password() {
    let rpass = document.getElementById('rpass').value
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

function passwordc() {
    let rpass = document.getElementById('rpass').value
    let rpass1 = document.getElementById('rpass1').value
    let valid = document.getElementById('passval1')
    if (rpass1 == '') {
        valid.innerHTML = 'this field is required'
        return 0
    }

    else if (rpass1 == rpass) {
        valid.innerHTML = "";
        return 1
    }
    else {
        valid.innerHTML = "password does not match";
        return 0
    }
}


function register() {
    if (Name() && phone() && Email() && password() && passwordc()) {
        alert("Registration successfull")
    }
}