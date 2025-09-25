// Pedir los dos números al usuario
const num1 = parseFloat(prompt("Ingresa el primer número:"));
const num2 = parseFloat(prompt("Ingresa el segundo número:"));

// Verificar si los valores son números válidos
if (isNaN(num1) || isNaN(num2)) {
  alert("Por favor, ingresa números válidos.");
} else {
  // Calcular la suma
  const suma = num1 + num2;

  // Mostrar el resultado
  alert("La suma es: " + suma);
}
