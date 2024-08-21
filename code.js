// Script para activar o desactivar el contenido
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});

document.querySelectorAll('.tab2').forEach(tab => {
    tab.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});
// Variables para controlar el color HSL
let hue = 0; // Valor inicial de tono (hue)

// Función para actualizar el color del h1
function updateTitleColor() {
    hue = (hue + 1) % 360; // Aumenta el tono y lo reinicia al llegar a 360
    document.getElementById('main-title').style.color = `hsl(${hue}, 100%, 50%)`;
}

// Cambia el color del h1 cada 0.1 segundos
setInterval(updateTitleColor, 50);
