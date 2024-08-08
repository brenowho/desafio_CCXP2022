const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lancamento = "20 oct 2024"

function countDown(){
    const dataLancamento = new Date(lancamento)
    const hoje = new Date()
    const segundosTotal = (dataLancamento - hoje)/1000;

    const finalDias = Math.floor(segundosTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segundosTotal / 60 / 60) % 24;
    const finalMinutos = Math.floor(segundosTotal / 60) % 60;
    const finalSegundos = Math.floor(segundosTotal) % 60;
    
    dia.innerHTML = finalDias
    hora.innerHTML = formatoTempo(finalHoras)
    minuto.innerHTML = formatoTempo(finalMinutos)
    segundo.innerHTML = formatoTempo(finalSegundos)

}

function formatoTempo( tempo ){
    return tempo < 10? `0${tempo}` : tempo;
}


countDown();
setInterval(countDown, 1000)
