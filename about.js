var form = document.getElementById("form");
var usuario = document.getElementById("usuario");

form.addEventListener("submit", function(a){
    a.preventDefault()
    
    localStorage.setItem("name", usuario.value);

    alert("Gracias por tu opinión " + localStorage.getItem("name")); 
})
