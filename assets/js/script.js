const numDaTabuada = document.getElementById('numeroDaTabuada');
const mostrarTabuada = document.getElementById('mostrarTabuada');
const tabuada = document.getElementById('tabuada');
const alerta =document.getElementById('alerta');
const porzero = document.getElementById('porZero');
const porUm = document.getElementById('porUm');
const porDois = document.getElementById('porDois');
const porTres = document.getElementById('porTres');
const porQuatro = document.getElementById('porQuatro');
const porCinco = document.getElementById('porCinco');
const porSeis = document.getElementById('porSeis');
const porSete = document.getElementById('porSete');
const porOito = document.getElementById('porOito');
const porNove = document.getElementById('porNove');
const porDez = document.getElementById('porDez');


mostrarTabuada.addEventListener('click', () => {
    if(numDaTabuada.value == 0){
        porzero.textContent = '0 * 0 = 0'
        porUm.textContent = '1 * 0 = 0'
        porDois.textContent = '2 * 0 = 0'
        porTres.textContent = '3 * 0 = 0'
        porQuatro.textContent = '4 * 0 = 0'
        porCinco.textContent = '5 * 0 = 0'
        porSeis.textContent = '6 * 0 = 0'
        porSete.textContent = '7 * 0 = 0'
        porOito.textContent = '8 * 0 = 0'
        porNove.textContent = '9 * 0 = 0'
        porDez.textContent = '10 * 0 = 0'
        alerta.textContent = ''
        tabuada.style.display = 'block'


    } else if(numDaTabuada.value == 1){
        porzero.textContent = '1 * 0 = 0'
        porUm.textContent = '1 * 1 = 1'
        porDois.textContent = '1 * 2 = 2'
        porTres.textContent = '1 * 3 = 3'
        porQuatro.textContent = '1 * 4 = 4'
        porCinco.textContent = '1 * 5 = 5'
        porSeis.textContent = '1 * 6 = 6'
        porSete.textContent = '1 * 7 = 7'
        porOito.textContent = '1 * 8 = 8'
        porNove.textContent = '1 * 9 = 9'
        porDez.textContent = '1 * 10 = 10'
        alerta.textContent = ''
        tabuada.style.display = 'block'

    } else if(numDaTabuada.value == 2){
        porzero.textContent = '2 * 0 = 0'
        porUm.textContent = '2 * 1 = 2'
        porDois.textContent = '2 * 2 = 4'
        porTres.textContent = '2 * 3 = 6'
        porQuatro.textContent = '2 * 4 = 8'
        porCinco.textContent = '2 * 5 = 10'
        porSeis.textContent = '2 * 6 = 12'
        porSete.textContent = '2 * 7 = 14'
        porOito.textContent = '2 * 8 = 16'
        porNove.textContent = '2 * 9 = 18'
        porDez.textContent = '2 * 10 = 20'
        alerta.textContent = ''
        tabuada.style.display = 'block'

    } else if(numDaTabuada.value == 3){
        porzero.textContent = '3 * 0 = 0'
        porUm.textContent = '3 * 1 = 3'
        porDois.textContent = '3 * 2 = 6'
        porTres.textContent = '3 * 3 = 9'
        porQuatro.textContent = '3 * 4 = 12'
        porCinco.textContent = '3 * 5 = 15'
        porSeis.textContent = '3 * 6 = 18'
        porSete.textContent = '3 * 7 = 21'
        porOito.textContent = '3 * 8 = 24'
        porNove.textContent = '3 * 9 = 27'
        porDez.textContent = '1 * 10 = 30'
        alerta.textContent = ''
        tabuada.style.display = 'block'

    } else if(numDaTabuada.value == 4){
        porzero.textContent = '4 * 0 = 0'
        porUm.textContent = '4 * 1 = 4'
        porDois.textContent = '4 * 2 = 8'
        porTres.textContent = '4 * 3 = 12'
        porQuatro.textContent = '4 * 4 = 16'
        porCinco.textContent = '4 * 5 = 20'
        porSeis.textContent = '4 * 6 = 24'
        porSete.textContent = '4 * 7 = 28'
        porOito.textContent = '4 * 8 = 32'
        porNove.textContent = '4 * 9 = 36'
        porDez.textContent = '4 * 10 = 40'
        alerta.textContent = ''
        tabuada.style.display = 'block'

    } else if(numDaTabuada.value == 5){
        porzero.textContent = '5 * 0 = 0'
        porUm.textContent = '5 * 1 = 5'
        porDois.textContent = '5 * 2 = 10'
        porTres.textContent = '5 * 3 = 15'
        porQuatro.textContent = '5 * 4 = 20'
        porCinco.textContent = '5 * 5 = 25'
        porSeis.textContent = '5 * 6 = 30'
        porSete.textContent = '5 * 7 = 35'
        porOito.textContent = '5 * 8 = 40'
        porNove.textContent = '5 * 9 = 45'
        porDez.textContent = '5 * 10 = 50'
        alerta.textContent = ''
        tabuada.style.display = 'block'

    } else if(numDaTabuada.value == 6){
        porzero.textContent = '6 * 0 = 0'
        porUm.textContent = '6 * 1 = 6'
        porDois.textContent = '6 * 2 = 12'
        porTres.textContent = '6 * 3 = 18'
        porQuatro.textContent = '6 * 4 = 24'
        porCinco.textContent = '6 * 5 = 30'
        porSeis.textContent = '6 * 6 = 36'
        porSete.textContent = '6 * 7 = 42'
        porOito.textContent = '6 * 8 = 48'
        porNove.textContent = '6 * 9 = 54'
        porDez.textContent = '6 * 10 = 60'
        alerta.textContent = ''
        tabuada.style.display = 'block'

    } else if(numDaTabuada.value == 7){
        porzero.textContent = '7 * 0 = 0'
        porUm.textContent = '7 * 1 = 7'
        porDois.textContent = '7 * 2 = 14'
        porTres.textContent = '7 * 3 = 21'
        porQuatro.textContent = '7 * 4 = 28'
        porCinco.textContent = '7 * 5 = 35'
        porSeis.textContent = '7 * 6 = 42'
        porSete.textContent = '7 * 7 = 49'
        porOito.textContent = '7 * 8 = 56'
        porNove.textContent = '7 * 9 = 63'
        porDez.textContent = '7 * 10 = 70'
        alerta.textContent = ''
        tabuada.style.display = 'block'

    } else if(numDaTabuada.value == 8){
        porzero.textContent = '8 * 0 = 0'
        porUm.textContent = '8 * 1 = 8'
        porDois.textContent = '8 * 2 = 16'
        porTres.textContent = '8 * 3 = 24'
        porQuatro.textContent = '8 * 4 = 32'
        porCinco.textContent = '8 * 5 = 40'
        porSeis.textContent = '8 * 6 = 48'
        porSete.textContent = '8 * 7 = 56'
        porOito.textContent = '8 * 8 = 64'
        porNove.textContent = '8 * 9 = 72'
        porDez.textContent = '8 * 10 = 80'
        alerta.textContent = ''
        tabuada.style.display = 'block'

    } else if(numDaTabuada.value == 9){
        porzero.textContent = '9 * 0 = 0'
        porUm.textContent = '9 * 1 = 9'
        porDois.textContent = '9 * 2 = 18'
        porTres.textContent = '9 * 3 = 27'
        porQuatro.textContent = '9 * 4 = 36'
        porCinco.textContent = '9 * 5 = 45'
        porSeis.textContent = '9 * 6 = 54'
        porSete.textContent = '9 * 7 = 63'
        porOito.textContent = '9 * 8 = 72'
        porNove.textContent = '9 * 9 = 81'
        porDez.textContent = '9 * 10 = 90'
        alerta.textContent = ''
        tabuada.style.display = 'block'

    } else if(numDaTabuada.value == 10){
        porzero.textContent = '10 * 0 = 0'
        porUm.textContent = '10 * 1 = 10'
        porDois.textContent = '10 * 2 = 20'
        porTres.textContent = '10 * 3 = 30'
        porQuatro.textContent = '10 * 4 = 40'
        porCinco.textContent = '10 * 5 = 50'
        porSeis.textContent = '10 * 6 = 60'
        porSete.textContent = '10 * 7 = 70'
        porOito.textContent = '10 * 8 = 80'
        porNove.textContent = '10 * 9 = 90'
        porDez.textContent = '10 * 10 = 100'
        alerta.textContent = ''
        tabuada.style.display = 'block'

    } 
    
    if(numDaTabuada.value < 0 || numDaTabuada.value > 10 ){
        alerta.textContent = 'Informe um número de 0 a 10!'
        porzero.textContent = ''
        porUm.textContent = ''
        porDois.textContent = ''
        porTres.textContent = ''
        porQuatro.textContent = ''
        porCinco.textContent = ''
        porSeis.textContent = ''
        porSete.textContent = ''
        porOito.textContent = ''
        porNove.textContent = ''
        porDez.textContent = ''
        tabuada.style.display = 'none'
    
    }
});

