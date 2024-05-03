// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Obtener el formulario y los campos
    const form = document.getElementById("contactoForm");
    const nombreInput = document.getElementById("nombre");
    const emailInput = document.getElementById("email");
    const mensajeInput = document.getElementById("mensaje");

    // Agregar evento submit al formulario
    form.addEventListener("submit", function(event) {
        // Verificar si el nombre está vacío
        if (nombreInput.value.trim() === "") {
            alert("Por favor ingresa tu nombre.");
            event.preventDefault(); // Evitar que se envíe el formulario
            return;
        }

        // Verificar si el email está vacío o no es válido
        if (emailInput.value.trim() === "" || !isValidEmail(emailInput.value)) {
            alert("Por favor ingresa un email válido.");
            event.preventDefault(); // Evitar que se envíe el formulario
            return;
        }

        // Verificar si el mensaje está vacío
        if (mensajeInput.value.trim() === "") {
            alert("Por favor ingresa un mensaje.");
            event.preventDefault(); // Evitar que se envíe el formulario
            return;
        }
    });

    // Función para verificar si un email es válido
    function isValidEmail(email) {
        // Expresión regular para validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
