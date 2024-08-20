function tocarSom(){
    document.querySelector('#som_'+pClasseDaTeclaDeSom).play();
}

function tocarSomPom(){
    document.querySelector('#som_tecla_pom').play();
}

function tocarSomClap(){
    document.querySelector('#som_tecla_clap').play();
}

function tocarSomTim(){
    document.querySelector('#som_tecla_tim').play();
}

function tocarSomPuff(){
    document.querySelector('#som_tecla_puff').play();
}

function tocarSomSplash(){
    document.querySelector('#som_tecla_splash').play();
}

function tocarSomToim(){
    document.querySelector('#som_tecla_toim').play();
}

function tocarSomPsh(){
    document.querySelector('#som_tecla_psh').play();
}

function tocarSomTic(){
    document.querySelector('#som_tecla_tic').play();
}

function tocarSomTom(){
    document.querySelector('#som_tecla_tom').play();
}

document.querySelector('.tecla_pom').onclick = tocarSomPom
document.querySelector('.tecla_clap').onclick = tocarSomClap
document.querySelector('.tecla_tim').onclick = tocarSomTim