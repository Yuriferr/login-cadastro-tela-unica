const parede = document.getElementById("parede")
const imgParede = document.getElementById("imgParede")
 

function moverParedeCadastro(imgCadastro){
    parede.style.marginLeft = "-30%";
    imgParede.src = imgCadastro;
}

function moverParedeLogin(imgLogin){
    parede.style.marginLeft = "30%";
    imgParede.src = imgLogin;
}