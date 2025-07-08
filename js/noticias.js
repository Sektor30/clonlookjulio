// Funcionalidad dinámica para el sidebar de noticias
document.addEventListener('DOMContentLoaded', function() {
            
    // Obtener referencias a los elementos
    const btnPublicaciones = document.getElementById('btnPublicaciones');
    const btnRevistas = document.getElementById('btnRevistas');
    const contenedorPublicaciones = document.getElementById('contenedorPublicaciones');
    const contenedorRevistas = document.getElementById('contenedorRevistas');
    const collapsePublicacionesEl = document.getElementById('listaPublicaciones');
    const collapseRevistasEl = document.getElementById('listaRevistas');
    // Selección robusta del subtítulo dinámico
    const subtitulo = document.querySelector('main .section-title.text-center:not(.animate__animated)');
    // Para depuración, puedes quitar este log después
    if(!subtitulo) console.warn('No se encontró el subtítulo dinámico h2');

    // Función para mostrar publicaciones
    function mostrarPublicaciones() {
        contenedorPublicaciones.style.display = 'flex';
        contenedorRevistas.style.display = 'none';
        btnPublicaciones.classList.add('active');
        btnRevistas.classList.remove('active');
        if(subtitulo) subtitulo.textContent = 'Publicaciones';
    }

    // Función para mostrar revistas
    function mostrarRevistas() {
        contenedorPublicaciones.style.display = 'none';
        contenedorRevistas.style.display = 'block';
        btnRevistas.classList.add('active');
        btnPublicaciones.classList.remove('active');
        if(subtitulo) subtitulo.textContent = 'Revista';
    }

    // Estado de los collapses
    let publicacionesAbierto = false;
    let revistasAbierto = false;

    // Event listeners para los botones principales
    btnPublicaciones.addEventListener('click', function(e) {
        mostrarPublicaciones();
        const collapsePublicaciones = new bootstrap.Collapse(collapsePublicacionesEl, {toggle: false});
        const collapseRevistas = new bootstrap.Collapse(collapseRevistasEl, {toggle: false});
        if (!publicacionesAbierto) {
            collapsePublicaciones.show();
            publicacionesAbierto = true;
            // Si el otro está abierto, ciérralo
            if (revistasAbierto) {
                collapseRevistas.hide();
                revistasAbierto = false;
            }
        } else {
            collapsePublicaciones.hide();
            publicacionesAbierto = false;
        }
    });

    btnRevistas.addEventListener('click', function(e) {
        mostrarRevistas();
        const collapsePublicaciones = new bootstrap.Collapse(collapsePublicacionesEl, {toggle: false});
        const collapseRevistas = new bootstrap.Collapse(collapseRevistasEl, {toggle: false});
        if (!revistasAbierto) {
            collapseRevistas.show();
            revistasAbierto = true;
            // Si el otro está abierto, ciérralo
            if (publicacionesAbierto) {
                collapsePublicaciones.hide();
                publicacionesAbierto = false;
            }
        } else {
            collapseRevistas.hide();
            revistasAbierto = false;
        }
    });

    // Event listeners para los enlaces de la lista de publicaciones
    const enlacesPublicaciones = document.querySelectorAll('#listaPublicaciones a');
    enlacesPublicaciones.forEach((enlace) => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            if (contenedorPublicaciones.style.display === 'none') {
                mostrarPublicaciones();
            }
            const modalId = this.getAttribute('data-modal');
            if (modalId) {
                const modal = new bootstrap.Modal(document.getElementById(modalId));
                modal.show();
            }
        });
    });

    // Event listeners para los enlaces de la lista de revistas
    const enlacesRevistas = document.querySelectorAll('#listaRevistas a');
    enlacesRevistas.forEach((enlace, index) => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            if (contenedorRevistas.style.display === 'none') {
                mostrarRevistas();
            }
            // Aquí podrías abrir un modal de revista si lo tuvieras
        });
    });

    // Mostrar publicaciones y abrir su collapse por defecto al cargar la página
    mostrarPublicaciones();
    const collapsePublicaciones = new bootstrap.Collapse(collapsePublicacionesEl, {toggle: false});
    collapsePublicaciones.show();
    publicacionesAbierto = true;
    revistasAbierto = false;
});