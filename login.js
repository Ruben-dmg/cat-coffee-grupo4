//Login
var email = document.getElementById("email");
var form = document.getElementById("form");
var btnClose = document.getElementById("close");

form.addEventListener("submit", function(a){
    a.preventDefault()
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    sessionStorage.setItem("email", email.value);

    if(regex.test(email.value)){
        window.location = "index.html";
    }

})

btnClose.addEventListener("click", function(){
    sessionStorage.removeItem("email");
})

