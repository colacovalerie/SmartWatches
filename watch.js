var watch = false;

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}
else {
    ready();
}
function ready() {
    var button = document.getElementsByClassName('btndel');
    for (var i = 0; i < button.length; i++) {
        var bu = button[i];
        bu.addEventListener('click', element);
    }
    var plusbot = document.getElementsByClassName('sym1');
    for (var i = 0; i < plusbot.length; i++) {
        var bu = plusbot[i];
        bu.addEventListener('click', sym1);
    }

    var minusbot = document.getElementsByClassName('sym');
    for (var i = 0; i < minusbot.length; i++) {
        var bu = minusbot[i];
        bu.addEventListener('click', sym);
    }

    var addbot = document.getElementsByClassName('add')
    for (var i = 0; i < addbot.length; i++) {
        var bu = addbot[i];
        bu.addEventListener('click', add);
    }

    document.getElementsByClassName('btntotal')[0].addEventListener('click', btnclicked);
}

function element(event) {
    var buttonClicke = event.target;
    buttonClicke.parentElement.parentElement.remove();
    total();
    total1();
}

function total() {
    var c = document.getElementsByClassName('rightpanel')[0];
    var b = c.getElementsByClassName('panelcontent');
    var tot = 0;
    for (var i = 0; i < b.length; i++) {
        var item = b[i];
        var preciseelement = item.getElementsByClassName('ite')[0];
        console.log(preciseelement);
        var precise = parseFloat(preciseelement.innerText.replace('INR', '').replace('.', ''));
        console.log(precise);
        var textbox1 = item.getElementsByClassName('textbox')[0];
        var text = textbox1.value;
        console.log(text);
        tot = tot + (precise * text);
    }

    tot = Math.round(tot * 100) / 100;

    document.getElementsByClassName('tot')[0].innerText = "INR " + tot;

}

function total1() {
    var e = document.getElementsByClassName('panel-contents')[0];
    if (e.childElementCount == 0) {
        var rightpanel = document.getElementsByClassName('rightpanel')[0];
        rightpanel.style.marginRight = '-100%';
        rightpanel.style.opacity = '0';
        watch = false;
        var items1 = document.getElementsByClassName('containeritem')[0];
        items1.style.width = '100%';
        visiblepanel()
        location.reload();
    }
}

function sym1(event) {
    var buttonClicked = event.target;
    var selectadd = buttonClicked.parentElement;
    var textvalue = selectadd.getElementsByClassName('textbox')[0].value;
    console.log(textvalue);
    textvalue++;
    selectadd.getElementsByClassName('textbox')[0].value = textvalue;
    total();
}

function sym(event) {
    var buttonClicked = event.target;
    var selectadd = buttonClicked.parentElement;
    var textvalue = selectadd.getElementsByClassName('textbox')[0].value;
    console.log(textvalue);
    textvalue--;
    if (textvalue >= 1) {
        selectadd.getElementsByClassName('textbox')[0].value = textvalue;
        total();
    }
}

function add(event) {

    var cartname = event.target;
    var name = cartname.parentElement;
    var tag = name.getElementsByClassName('name')[0].innerText;
    console.log(tag);
    var cost = name.getElementsByClassName('cost')[0].innerText;
    console.log(cost);
    var img = name.getElementsByClassName('imgit')[0].src;
    console.log(img);
    details(tag, cost, img);
    visiblepanel();
}

function details(tag, cost, img) {
    var item = document.createElement('div');
    item.classList.add = 'item';
    var panelcontents = document.getElementsByClassName('panel-contents')[0];
    var spancontents1 = panelcontents.getElementsByClassName('spancontents');
    for (var i = 0; i < spancontents1.length; i++) {
        if (spancontents1[i].innerText == tag) {
            alert(tag + " has already been added to the cart");
            return;
        }
    }
    var panelcontentitem = `
    <div class="panelcontent">
                    <img src="${img}"
                        alt="" width="80px">

                    <div class="contentspan">
                        <span class="spancontents">${tag}</span>

                        <div class="divcount">
                            <i class="fa-solid fa-minus sym"></i>
                            <input type="text" value="1" class="textbox" disabled>
                            <i class="fa-solid fa-plus sym1"></i>
                        </div>
                        <span class="ite">${cost}</span>
                    </div>
                    <span class="btndel">
                        <i class="fa-solid fa-trash tra"></i>
                    </span>
    </div>
    
    `
    item.innerHTML = panelcontentitem;
    panelcontents.append(item);
    item.getElementsByClassName('btndel')[0].addEventListener('click', element);
    var butadd = item.getElementsByClassName('sym1')[0];
    butadd.addEventListener('click', sym1);
    var butminus = item.getElementsByClassName('sym')[0];
    butminus.addEventListener('click', sym);
    total();
}

function btnclicked(event) {
    alert("Thank u for your purchase!")
    location.reload()
    var purchase = document.getElementsByClassName('panel-contents')[0];
    while (purchase.hasChildNodes()) {
        purchase.removeChild(purchase.firstChild);
    }
    total();
   
   
}

function visiblepanel() {
    watch = true;
    var rightpanel = document.getElementsByClassName('rightpanel')[0];
    rightpanel.style.marginRight = "0px";
    rightpanel.style.display = "block";
    var items = document.getElementsByClassName('containeritem')[0];
    items.style.width = "100%";

}


function visiblepanel1() {
watch = true;
var rightpanel1 = document.getElementsByClassName('rightpanel')[0];
rightpanel1.style.marginRight = "0px";
rightpanel1.style.display = "none";
var items = document.getElementsByClassName('containeritem')[0];
items.style.width = "100%";

}


let acDetails = document.getElementById('Account')
let acUser = document.getElementById('User')
let Profile = localStorage.getItem('User')
let logIn = document.getElementById('loginreg')
let logOut = document.getElementById('logout')
let add1 = document.getElementById('add1')
let add2 = document.getElementById('add2')
let add3 = document.getElementById('add3')
let add4 = document.getElementById('add4')
let add5 = document.getElementById('add5')
let add6 = document.getElementById('add6')
let add7 = document.getElementById('add7')
let add8 = document.getElementById('add8')
let add9 = document.getElementById('add9')
let add10 = document.getElementById('add10')
let add11 = document.getElementById('add11')
let add12 = document.getElementById('add12')
let add13 = document.getElementById('add13')
let add14 = document.getElementById('add14')
let add15 = document.getElementById('add15')
let add16 = document.getElementById('add16')
window.addEventListener('load', () => {
    if (Profile == "") {
        acUser.innerText = ""
        acDetails.style.display = "none"
        logOut.style.display = "none"
        add1.style.display = "block"
        add2.style.display = "none"
        add3.style.display = "block"
        add4.style.display = "none"
        add5.style.display = "block"
        add6.style.display = "none"
        add7.style.display = "block"
        add8.style.display = "none"
        add9.style.display = "block"
        add10.style.display = "none"
        add11.style.display = "block"
        add12.style.display = "none"
        add13.style.display = "block"
        add14.style.display = "none"
        add15.style.display = "block"
        add16.style.display = "none" 
    }
    else {
        console.log("load page")
        acUser.innerText = Profile
        acDetails.style.display = "block"
        logOut.style.display = "block"
        logIn.style.display = "none"
        add1.style.display = "none"
        add2.style.display = "block"
        add3.style.display = "none"
        add4.style.display = "block"
        add5.style.display = "none"
        add6.style.display = "block"
        add7.style.display = "none"
        add8.style.display = "block"
        add9.style.display = "none"
        add10.style.display = "block"
        add11.style.display = "none"
        add12.style.display = "block"
        add13.style.display = "none"
        add14.style.display = "block"
        add15.style.display = "none"
        add16style.display = "block"
    }

})

function logout() {
    localStorage.setItem("User", "")
    logIn.style.display = "block"
    acDetails.style.display = "none"
    logOut.style.display = "none"
    visiblepanel1()
    add1.style.display = "block"
    add2.style.display = "none"
    add3.style.display = "block"
    add4.style.display = "none"
    add5.style.display = "block"
    add6.style.display = "none"
    add7.style.display = "block"
    add8.style.display = "none"
    add9.style.display = "block"
    add10.style.display = "none"
    add11.style.display = "block"
    add12.style.display = "none"
    add13.style.display = "block"
    add14.style.display = "none"
    add15.style.display = "block"
    add16.style.display = "none"
    acUser.innerHTML = ""
}

function but()
{
alert("Pls Login first for your first purchase")
location.assign("SignUp_SignIn.html")
}

var sidmenu = document.getElementById("sidemenu");

function openpan() {
    sidmenu.style.left = "0px";
    sidmenu.style.top = "50px";
   
}

function closepan() {
    sidmenu.style.left = "-120px";

}



  
let arr = ["Life","World", "Generation"]

const text = document.querySelector('.stxt');

function changeText(val){
    console.log("Hello",arr[val],val)
    text.textContent = arr[val]
}
let i=1
setInterval(()=>{
    console.log(i)
    if(i<arr.length){
        changeText(i);
    }
    else{
        i=0;
        changeText(i);
    }
    i++;
},3000)