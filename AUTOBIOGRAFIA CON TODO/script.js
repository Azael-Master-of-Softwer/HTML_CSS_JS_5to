// ====== SCRIPT DE JAVASCRIPT ======
// Variables globales
let focoEncendido = false;

/* Comentario:
   Esta función alterna el estado del foco y cambia la imagen. 
   Usa el DOM para acceder al elemento con id="foco".
*/
function toggleFoco() {
    const foco = document.getElementById("foco");

    // Estructura de decisión
    if (!focoEncendido) {
        foco.src = "https://www.w3schools.com/js/pic_bulbon.gif";
        alert("💡 El foco se ha encendido");
        focoEncendido = true;
    } else {
        foco.src = "https://www.w3schools.com/js/pic_bulboff.gif";
        alert("💡 El foco se ha apagado");
        focoEncendido = false;
    }
}

// Función intrínseca + definida por el usuario
function enviarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const mensaje = document.getElementById("mensaje").value;

    // Expresiones y validación
    if (nombre.trim() === "" || correo.trim() === "" || mensaje.trim() === "") {
        alert("⚠️ Por favor, completa todos los campos antes de enviar.");
    } else {
        alert(`✅ Gracias ${nombre}, tu mensaje ha sido enviado correctamente.`);
    }
}

// Función para limpiar campos (DOM + funciones personalizadas)
function borrarCampos() {
    document.getElementById("nombre").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("mensaje").value = "";
    alert("🧹 Campos del formulario limpiados.");
}
