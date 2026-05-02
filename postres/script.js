function cambiarSeccion(id) {
    // Buscar todas las secciones y quitarles la clase 'activa'
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(sec => {
        sec.classList.remove('activa');
    });

    // Mostrar solo la sección seleccionada
    const seccionSeleccionada = document.getElementById(id);
    if (seccionSeleccionada) {
        seccionSeleccionada.classList.add('activa');
    }
}