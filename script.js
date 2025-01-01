function abrirCarta() {
    const nombre = prompt("Escribe tu nombre para abrir la carta:");
    if (nombre && nombre.trim() !== "") {
        document.getElementById('nombreDestino').textContent = nombre;
        document.querySelector('.sobre').style.display = 'none';
        document.getElementById('contenidoCarta').style.display = 'block';
    } else {
        alert('Por favor, escribe tu nombre para abrir la carta.');
    }
}
