const parede = document.getElementById("parede")
const imgParede = document.getElementById("imgParede")

var screen = screen.width
 

function moverParedeCadastro(imgCadastro){
    if(screen > 700){
        parede.style.marginRight = '50%';
        imgParede.src = imgCadastro;
    }else{
        parede.style.marginBottom = '275px';
        imgParede.src = imgCadastro;
    }
}

function moverParedeLogin(imgLogin){
    if(screen > 700){
        parede.style.marginRight = '0';
        imgParede.src = imgLogin;
    }else{
        parede.style.marginBottom = '0';
        imgParede.src = imgLogin;
    }
}