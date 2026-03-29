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

let skills = ["my name is loay hossam","i am learned","HTML", "CSS", "JavaScript", "Bootstrap", "tailwind" , "python"];

let i = 0;
let j = 0; 
let currentSkill = "";
let isDeleting = false;

function typeEffect() {

if (i >= skills.length) i = 0;

currentSkill = skills[i];

if (isDeleting) {
    j--;
} else {
    j++;
}

document.getElementById("skills").textContent = currentSkill.substring(0, j);

if (!isDeleting && j === currentSkill.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
}

if (isDeleting && j === 0) {
    isDeleting = false;
    i++;
}

setTimeout(typeEffect, isDeleting ? 50 : 100);

}

typeEffect();
