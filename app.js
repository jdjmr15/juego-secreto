let intentos = 0;
let numeroSecreto = 0;
const numeroMaxAdivinar = 10;
const texto1 = "Juego del número secreto";
const texto2 = `Indica un número del 1 al ${numeroMaxAdivinar}`;

let listaNumerosSorteados = [];



function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaxAdivinar) + 1;
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length == numeroMaxAdivinar) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
        return ;

    }

    if (listaNumerosSorteados.includes(numeroGenerado)){
        console.log(`Cambio de numero ${numeroGenerado}`);
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function verificarIntento(){

    let numeroUsuario = parseInt(document.querySelector('input').value);
    console.log(numeroUsuario);
    if (numeroUsuario == numeroSecreto) {
        let mensajeNumeroIntentos = (intentos > 1) ? `${intentos} veces` : `${intentos} vez` ;
        asignarTextoElemento('p', `Acerto el número secreto en ${mensajeNumeroIntentos}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', `El número secreto es menor`);
        } else {
            asignarTextoElemento('p', `El número secreto es mayor`);
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function iniciarJuego() {
    asignarTextoElemento('h1', texto1);
    asignarTextoElemento('p', texto2);
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);

    intentos = 1;
}

function limpiarCaja() {
    document.querySelector("input").value = '';
    return;
    
}

function reiniciarJuego(){
    limpiarCaja();
    iniciarJuego();
    document.querySelector("#reiniciar").setAttribute('disabled',true);
}


iniciarJuego();