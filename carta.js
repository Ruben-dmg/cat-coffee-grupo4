getData();

async function getData(){
    const response = await fetch("https://api.sampleapis.com/coffee/hot");
    const data = await response.json();
    // console.log(data); //Comprobación


    //La última imagen de la API está bloqueada por orígenes cruzados (ver consola), por eso no se ve
    for (let i = 0; i < data.length; i++) {
        document.querySelectorAll(".card-img-top")[i].setAttribute("src", data[i].image);
        document.querySelectorAll(".card-title")[i].innerHTML = data[i].title
    }
}
