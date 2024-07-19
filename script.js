let contador = 0;

const display = document.getElementById('contador');
const botonIncrementar = document.getElementById('incrementar');
const botonDecrementar = document.getElementById('decrementar');
const botonResetear = document.getElementById('resetear');

botonIncrementar.addEventListener('click', () => {
    contador++;
    actualizarDisplay();
});

botonDecrementar.addEventListener('click', () => {
    contador--;
    actualizarDisplay();
});

botonResetear.addEventListener('click', () => {
    contador = 0;
    actualizarDisplay();
});

function actualizarDisplay() {
    display.textContent = contador;
}