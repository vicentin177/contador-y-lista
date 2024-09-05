// Función para incrementar el contador y actualizar el texto del botón
function incrementarContador(boton) {
    // Obtener el texto actual del botón y extraer el número de clics
    const textoActual = boton.innerText;
    const partes = textoActual.split(': ');
    const contadorActual = parseInt(partes[1], 10);

    // Incrementar el contador
    const nuevoContador = contadorActual + 1;

    // Actualizar el texto del botón
    boton.innerText = `Clics: ${nuevoContador}`;
}

// Añadir el evento al botón después de que el documento esté listo
document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('clickButton');
    boton.addEventListener('click', () => incrementarContador(boton));
});
