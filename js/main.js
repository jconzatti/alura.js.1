const lTeclas = document.querySelectorAll('.tecla');

function tocarSom(pIDDoAudio){
    lAudio = document.querySelector(pIDDoAudio);
    lAudio.play();    
}

lTeclas.forEach(function (lTecla) {
    const lClasseDaTecla = lTecla.classList[1];
    const lIDDoAudio = `#som_${lClasseDaTecla}`;
    lTecla.onclick = function () {
        tocarSom(lIDDoAudio);
    }
});