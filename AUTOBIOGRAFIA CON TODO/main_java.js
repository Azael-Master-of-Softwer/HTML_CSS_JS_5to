// --- Saludo inicial
const btnSaludo = document.getElementById("btnSaludo");
btnSaludo.addEventListener("click", () => {
    alert("¡SPICYYY!");
});

// --- Ocultar y mostrar texto
const btnOcultarTexto = document.getElementById("btnOcultarTexto");
const textoPasatiempos = document.getElementById("textoPasatiempos");
btnOcultarTexto.addEventListener("click", () => {
    textoPasatiempos.style.display =
        textoPasatiempos.style.display === "none" ? "block" : "none";
});

// --- Foco animado
const btnFoquito = document.getElementById("btnFoquito");
const foquito = document.getElementById("foquito");
let encendido = false;
btnFoquito.addEventListener("click", () => {
    encendido = !encendido;
    if (encendido) {
        foquito.style.backgroundColor = "#ffeb3b";
        foquito.style.boxShadow = "0 0 20px #ffeb3b";
    } else {
        foquito.style.backgroundColor = "#ccc";
        foquito.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
    }
});

// --- Animación de color de fondo
const cajaAnimacion = document.getElementById("cajaAnimacion");
const colores = ["#1abc9c", "#3498db", "#9b59b6", "#e67e22"];
let i = 0;
setInterval(() => {
    cajaAnimacion.style.backgroundColor = colores[i % colores.length];
    i++;
}, 1200);

// --- Mensaje dinámico
const btnEscribir = document.getElementById("btnEscribir");
const mensajeDinamico = document.getElementById("mensajeDinamico");
btnEscribir.addEventListener("click", () => {
    mensajeDinamico.innerHTML = "<p>Gracias por visitar mi autobiografía, ¡espero que te haya gustado!</p>";
});

// --- Animación de entrada con scroll
const secciones = document.querySelectorAll(".fade-section");

const mostrarSeccion = () => {
    const alturaVentana = window.innerHeight;
    secciones.forEach(sec => {
        const distancia = sec.getBoundingClientRect().top;
        if (distancia < alturaVentana - 100) {
            sec.classList.add("visible");
        }
    });
};

mostrarSeccion();
window.addEventListener("scroll", mostrarSeccion);

// --- Modo Oscuro
const btnModoOscuro = document.getElementById("btnModoOscuro");
btnModoOscuro.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    btnModoOscuro.textContent = 
        document.body.classList.contains("dark-mode") 
            ? "☀️ Modo Claro" 
            : "🌙 Modo Oscuro";
});
