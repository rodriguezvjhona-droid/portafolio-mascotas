// Esperamos a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita que la página se recargue
        
        const nombre = document.getElementById('nombre').value;
        
        // Simulación de envío
        alert(`¡Gracias ${nombre}! Tu mensaje ha sido enviado con éxito.`);
        
        form.reset(); // Limpia los campos
    });
});