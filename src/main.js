var puntajeUsuario = 0;
var puntajeMaquina = 0;
var nroIntentos = 0;
var jugadaActual = 0;

document.getElementById('btnInicio').addEventListener("click", iniciarJuego)

function iniciarJuego() {
    //obtengo y valido el nro de intentos
    let intentos = document.getElementById("intentos").value
    if (intentos == "") {
        alert("Debe elegir un número entre 1 y 50")
        return
    }
    //guardo valor de intentos
    nroIntentos = parseInt(intentos)

    //oculto solicitud de intentos
    document.getElementById("nroIntentos").classList.toggle("hidden");

    //muestro selector
    document.getElementById("juego").classList.toggle("hidden");

    //inicializo las jugadas
    jugadaActual = 1;
    marcarJugada()
}

function marcarJugada() {
    document.getElementById("nroJugada").innerText = jugadaActual
}

document.getElementById("opcionesCachipun").addEventListener("change", function(e) {
    let seleccionUsuario = e.target.id
    let seleccionMaquina = seleccionarMaquina()
    procesarJugada(seleccionUsuario, seleccionMaquina)
    mostrarJugada(seleccionUsuario, seleccionMaquina)
});

function procesarJugada(jugadaUsuario, jugadaMaquina) {
    let ganador = elegirGanador(jugadaUsuario, jugadaMaquina)
    if (ganador == "usuario") {
        puntajeUsuario += 1
    } else if (ganador == "maquina") {
        puntajeMaquina += 1
    }
    dibujarRonda()
    //verifico que no sea la ronda final
    if (jugadaActual < nroIntentos) {
        //incremento la ronda
        jugadaActual += 1;
        marcarJugada()
        resetOpciones()
    } else {
        terminarJuego()
    }
}

function mostrarJugada(jugadaUsuario, jugadaMaquina) {
    document.getElementById("Seleccion").innerHTML = `
        <img style="width: 200px;" src="./src/img/${jugadaUsuario}.png" class="card-img-top" alt="Elegiste Piedra" >
    `

    document.getElementById("resultado").innerHTML = `
        <img style="width: 200px;" src="./src/img/${jugadaMaquina}.png" class="card-img-top" alt="Elegiste Tijera" >
    `
}

function resetOpciones() {
    var radios = document.getElementsByName('opcionesCachipun');
    radios.forEach((radio) => {
        radio.checked = false;
    })
}

function elegirGanador(jugadaUsuario, jugadaMaquina) {
    if (jugadaUsuario == jugadaMaquina) {
        return "empate"
    }

    if (jugadaUsuario == "piedra" && jugadaMaquina == "tijera" 
        || jugadaUsuario == "papel" && jugadaMaquina == "piedra" 
        || jugadaUsuario == "tijera" && jugadaMaquina == "papel") {
        return "usuario"
    } 
    return "maquina"
}

function dibujarRonda() {
    document.getElementById("ronda").insertAdjacentHTML("beforeend", `
    <tr>
        <td scope="col">Nro jugada: ${jugadaActual}</td>
        <td scope="col">Usuario: ${puntajeUsuario}</td>
        <td scope="col">Computador: ${puntajeMaquina}</td>
    </tr>
    `)
}

function seleccionarMaquina() {
    const eleccion = ["piedra", "papel", "tijera"];
    const aleatorio = Math.floor(Math.random() * 3);
    return eleccion[aleatorio];
}

function terminarJuego() {
    //muestro mensaje con ganador final y opcion de reiniciar juego
    document.getElementById("opcionesCachipun").classList.toggle("hidden");
    let ganador = "hubo un empate"
    if (puntajeUsuario > puntajeMaquina) {
        ganador = "ganaste!"
    } else if (puntajeMaquina > puntajeUsuario) {
        ganador = "ganó la máquina :-/"
    }
    document.getElementById("ganador").innerText = ganador
    document.getElementById("finJuego").classList.toggle("hidden");
    
}
