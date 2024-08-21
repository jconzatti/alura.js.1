const lTeclas = document.querySelectorAll('.tecla');

function tocarSom(pIDDoAudio){
    lAudio = document.querySelector(pIDDoAudio);
    lAudio.pause();
    lAudio.currentTime = 0;
    lAudio.play();    
}

function carregarTeclasDoAluraMidi(){
    lTeclas.forEach(function (lTecla) {
        const lIDDoAudio = `#som_${lTecla.classList[1]}`;
        lTecla.onclick = function () {
            tocarSom(lIDDoAudio);
        }
        lTecla.onkeydown = function (evento){
            if (evento.code === 'Enter' || evento.code === 'NumpadEnter' || evento.code === 'Space') {
                lTecla.classList.add('ativa')    
            }
        }
        lTecla.onkeyup = function (){
            lTecla.classList.remove('ativa')    
        }
    });
}

function carregarTecladoNumericoParaTocarAluraMidi(){
    document.onkeydown = function (evento){
        for (let i = 0; i < lTeclas.length; i++) {
            const lValorDaTeclaNumerica = i+1
            if (evento.code === `Numpad${lValorDaTeclaNumerica}`) {
                const lTecla = lTeclas[obterIndiceDaTeclaDeSomPeloValorDaTeclaNumerica(lValorDaTeclaNumerica)];
                const lIDDoAudio = `#som_${lTecla.classList[1]}`;
                tocarSom(lIDDoAudio);
            }
        }
    } 
}

function obterIndiceDaTeclaDeSomPeloValorDaTeclaNumerica(pValorDaTeclaNumerica){
    if (pValorDaTeclaNumerica < 4) {
        return pValorDaTeclaNumerica+5
    } else if (pValorDaTeclaNumerica < 7) {
        return pValorDaTeclaNumerica-1
    } else {
        return pValorDaTeclaNumerica-7
    }
}

carregarTeclasDoAluraMidi();
carregarTecladoNumericoParaTocarAluraMidi();
