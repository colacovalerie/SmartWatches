
var openpopuop = document.getElementById('pop');

function openpopup() {
    openpopuop.classList.add('popupopen');
}


function closepopup() {
    openpopuop.classList.remove('popupopen');

}




function Name() {
    let username = document.getElementById('name').value
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
    let rphone = document.getElementById('mob').value
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
    let remail = document.getElementById('email').value
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

function add() {
    let username = document.getElementById('add').value
    let valid = document.getElementById('mssgval')
    if (username == '') {
        valid.innerHTML = 'this field is required'
        return 0
    }
    else {
        valid.innerHTML = ""
        return 1
    }
}


function register() {
    if (Name() && phone() && Email() && add()) {
        // alert("Details submitted successfull")
        var openpopuop = document.getElementById('pop')
        openpopuop.classList.add('popupopen');

    }


}

function closepopup() {
    var openpopuop = document.getElementById('pop')
    openpopuop.classList.remove('popupopen');
}
