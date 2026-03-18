






function showMessage(){

alert("Thanks for contacting me!")

}


function erhandler() {
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var subject = document.getElementById("subject").value
    var message = document.getElementById("message").value
    if (name === "" || email === "" || subject === "" || message === "") {
        alert("form is not vallid")
    }
    if (email.indexOf("@") === -1 && email.indexOf(".")=== -1) {
        alert("email is not vallid")
    }
}


let topBtn = document.getElementById("topBtn")

window.onscroll = function(){

if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){

topBtn.style.display = "block"

}else{

topBtn.style.display = "none"

}

}

function topFunction(){

document.body.scrollTop = 0
document.documentElement.scrollTop = 0

}




let btn = document.getElementById("modeToggle")

btn.onclick = function(){

document.body.classList.toggle("dark-mode")

}
