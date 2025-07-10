// Esta función se ejecuta cuando haces clic en el boton
function convertirTemperatura() {
  // Obtenemos el valor del input
  let celsius = document.getElementById("celsiusInput").value;

  // Convertimos el valor a numero (Float)
  celsius = parseFloat(celsius);

  // Verificamos si realmente es un numero válido
  if (isNaN(celsius)) {
    alert("Por favor, ingresa un número válido.");
    return; // Salimos de la función si no es válido
  }

  // Formulas de conversión
  let fahrenheit = (celsius * 9 / 5) + 32;
  let kelvin = celsius + 273.15;

  // Mostramos el resultado por consola
  console.log("Grados Fahrenheit: " + fahrenheit.toFixed(1));
  console.log("Grados Kelvin: " + kelvin.toFixed(2));

  // Mostrar el resultado en la caja "globo"
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = `
    <p>Grados Fahrenheit: <strong>${fahrenheit.toFixed(1)}</strong></p>
    <p>Grados Kelvin: <strong>${kelvin.toFixed(2)}</strong></p>
  `;
  // toFixed(numero) esto es para mostrar solo cierta cantidad de decimales




 resultadoDiv.style.display = "block"; // Mostrarlo solo si hay resultado

}
