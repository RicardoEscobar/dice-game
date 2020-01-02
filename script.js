// Funcion calcula el valor de un dado

function tiraDado() {
    // Elegir un numero al azar entre 0 y 5

    var valorDado = Math.random() * 6; // 0.215165454
    return Math.floor(valorDado); // 0.0 al 5.0
}

// Arreglo con las URL de las imagenes

var imagenes = [
    "images/dice1.png", // 0
    "images/dice2.png", // 1
    "images/dice3.png", // 2
    "images/dice4.png", // 3
    "images/dice5.png", // 4
    "images/dice6.png"  // 5
];

// 1 cambiar imagen al dado 1(valorDado1 + valorDado2) + 2; //
var valorDado1 = tiraDado();
var valorDado2 = tiraDado();

document.querySelector(".img1").src = imagenes[valorDado1];
document.querySelector(".img2").src = imagenes[valorDado2];

// Imprimir ganador

if (valorDado1 === valorDado2) {
    document.querySelector("h1").textContent = ( valorDado1 + valorDado2 + 2 ) + " DOBLES!";
} else {
    document.querySelector("h1").textContent = ( valorDado1 + valorDado2 + 2 );
}