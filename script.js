document.addEventListener("DOMContentLoaded", () => {
    const botonRegalo = document.getElementById("boton-regalo");
    const mensaje = document.getElementById("mensaje");

    // Mostrar el mensaje cuando se presiona el botón
    botonRegalo.addEventListener("click", () => {
        mensaje.classList.remove("oculto");
        botonRegalo.disabled = true; // Desactiva el botón después de presionarlo
    });
});
