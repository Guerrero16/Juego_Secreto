let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("h1", "¡Ganaste!");
        asignarTextoElemento("p", `Acertaste el numero en ${intentos} ${(intentos === 1) ? "intento" : "intentos"}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //No acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("h1", "¡Intenta de nuevo!");
            asignarTextoElemento("p", `El numero secreto es menor a ${numeroDeUsuario}`);
        } else {
            asignarTextoElemento("h1", "¡Intenta de nuevo!");
            asignarTextoElemento("p", `El numero secreto es mayor a ${numeroDeUsuario}`)
        }
        intentos++;
        limpiarCaja();
    }
    return;
};

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
    document.getElementById("valorUsuario").focus();
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(`Numero Generado: ${numeroGenerado}`);
    console.log(listaNumerosSorteados);
    // Si ya sorteamos todos los numeros.
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", `Ya se sortearon los ${numeroMaximo} numeros posibles`)
    } else {
        // Si el numero generado esta en la lista.
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
};


function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del numero secreto!");
    asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`)
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}


function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    // indicar mensaje de intervalo de numeros
    //generar numero aleatorio
    // inicializar numero de intentos
    condicionesIniciales();
    //deshabilitar boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute('disabled', 'true');
}

condicionesIniciales();
console.log(numeroSecreto);