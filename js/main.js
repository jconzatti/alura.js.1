const lTeclas = document.querySelectorAll('.tecla');

function tocarSom(pIDDoAudio){
    lAudio = document.querySelector(pIDDoAudio);
    lAudio.play();    
}

lIndiceDaTecla = 0
while (lIndiceDaTecla < lTeclas.length) {
    const lTecla = lTeclas[lIndiceDaTecla];
    const lClasseDaTecla = lTecla.classList[1];
    const lIDDoAudio = '#som_'+lClasseDaTecla;
    lTecla.onclick = function () {
        tocarSom(lIDDoAudio);
    }
    lIndiceDaTecla++;
}