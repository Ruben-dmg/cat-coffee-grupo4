//Index
var btn = document.getElementById("sesion");

var storage_email = sessionStorage.getItem("email");

if(storage_email){
    btn.innerHTML = storage_email;
}