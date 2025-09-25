const pantalla = document.getElementById('pantalla');

// Agrega caracteres (números u operadores) a la pantalla
function agregarCaracter(caracter) {
    pantalla.value += caracter;
}

// Limpia la pantalla
function limpiarPantalla() {
    pantalla.value = '';
}

// Borra el último caracter
function borrarUltimo() {
    pantalla.value = pantalla.value.slice(0, -1);
}

// Calcula el resultado de la expresión
function calcular() {
    try {
        // Usa la función eval() para evaluar la expresión matemática
        // (Nota: eval() puede ser inseguro para entradas no confiables, pero para una calculadora básica es suficiente)
        pantalla.value = eval(pantalla.value);
    } catch (e) {
        // Muestra "Error" si la expresión es inválida
        pantalla.value = 'Error';
    }
}
