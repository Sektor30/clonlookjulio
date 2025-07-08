document.addEventListener("DOMContentLoaded", function () {
    const btnRegistro = document.querySelector('#btnregistro');
    const btnIniciarSesion = document.querySelector('#btniniciar');
    const btnModulos = document.querySelector('#btnmodulos');
    const userIcon = document.querySelector("#ico");
    const btnExpandir = document.querySelector("#btnExpandir");

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  
    for (let i = 0; i < usuarios.length; i++) {
        let confirmarSesion = usuarios[i] ? usuarios[i].logged : false;
  
        if (confirmarSesion) {
            btnModulos.style.display = "block";
            btnRegistro.style.display = "none";
            btnIniciarSesion.style.display = "none";

            const nombre = document.querySelector("#NombreUser");
            nombre.textContent = `${usuarios[i].userName}`;
            return;
        }
    }
  
    btnModulos.style.display = "none";
    userIcon.style.display = "none";
    btnExpandir.style.display = "none";
    btnRegistro.style.display = "block";
    btnIniciarSesion.style.display = "block";
});

// modal seleccion 

document.addEventListener('DOMContentLoaded', function() {
    var btnResumen = document.getElementById('btnResumenDashboard');
    if (btnResumen) {
      btnResumen.addEventListener('click', function() {
        var modal = bootstrap.Modal.getInstance(document.getElementById('modalOpcionesDashboard'));
        if (modal) modal.hide();
        var offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasUser'));
        setTimeout(function() {
          offcanvas.show();
        }, 300); // Espera a que el modal termine de cerrarse
      });
    }
  });


// Funcionalidad del video y barra de progreso
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('miVideo');
    const barraProgreso = document.getElementById('barraProgreso');

    if (video && barraProgreso) {
        // Función para actualizar la barra de progreso
        function actualizarBarraProgreso(porcentaje) {
            barraProgreso.style.width = porcentaje + '%';
            barraProgreso.setAttribute('aria-valuenow', porcentaje);
            // Guardar progreso en localStorage para el usuario logueado
            let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
            for (let i = 0; i < usuarios.length; i++) {
                if (usuarios[i].logged) {
                    if (!usuarios[i].progresoEstilos || usuarios[i].progresoEstilos < porcentaje) {
                        usuarios[i].progresoEstilos = Math.floor(porcentaje);
                        localStorage.setItem("usuarios", JSON.stringify(usuarios));
                    }
                }
            }
            // Actualizar barra de la card lateral si existe
            const barraCard = document.getElementById('progress-estilos-card');
            if (barraCard) {
                barraCard.style.width = Math.floor(porcentaje) + '%';
                barraCard.textContent = Math.floor(porcentaje) + '%';
                barraCard.setAttribute('aria-valuenow', Math.floor(porcentaje));
            }
            // Actualizar barra de dashboard si está abierta
            const barraDashboard = document.getElementById('progress-estilos-dashboard');
            if (barraDashboard) {
                barraDashboard.style.width = Math.floor(porcentaje) + '%';
                barraDashboard.textContent = Math.floor(porcentaje) + '%';
                barraDashboard.setAttribute('aria-valuenow', Math.floor(porcentaje));
            }
            // Si el progreso llega al 100%, mostrar el modal
            if (porcentaje >= 100) {
                mostrarModalFelicitaciones();
                // Habilitar el botón de siguiente módulo
                const btnSiguienteMod = document.querySelector('.siguienteMod');
                if (btnSiguienteMod) {
                    btnSiguienteMod.removeAttribute('disabled');
                }
            }
        }

        // Eventos del video
        video.addEventListener('timeupdate', () => {
            if (video.duration) {
                const porcentaje = (video.currentTime / video.duration) * 100;
                actualizarBarraProgreso(porcentaje);
            }
        });
        video.addEventListener('loadedmetadata', () => {
            if (video.duration) {
                const porcentaje = (video.currentTime / video.duration) * 100;
                actualizarBarraProgreso(porcentaje);
            }
        });

        



        // Evento para cuando el video termina
        video.addEventListener('ended', () => {
            barraProgreso.style.width = '100%';
            barraProgreso.setAttribute('aria-valuenow', 100);
            barraProgreso.textContent = '100%';
            
            // Activar la bandera en verde
            const bandera = document.querySelector('.bandera i');
            if (bandera) {
                bandera.style.color = '#28a745';
            }

            // Activar el botón de siguiente módulo usando la clase específica
            const btnSiguienteModulo = document.querySelector('.siguienteMod');
            if (btnSiguienteModulo) {
                btnSiguienteModulo.classList.remove('bg-dark');
                btnSiguienteModulo.classList.add('bg-primary');
                btnSiguienteModulo.href = './guiones.html';
            }
        });
    }

    // Funcionalidad de cambio de tamaño del video
    const btnModuloEstilos = document.getElementById('btnModuloEstilos');
    const videoContainer = document.querySelector('.video-yt');
    
    if (btnModuloEstilos && videoContainer) {
        btnModuloEstilos.addEventListener('click', function() {
            videoContainer.classList.toggle('full-width');
        });
    }
});

// Función para mostrar el modal de felicitaciones
function mostrarModalFelicitaciones() {
    const modal = new bootstrap.Modal(document.getElementById('modalFelicitaciones'));
    modal.show();

    // Manejar el botón de quedarse en el módulo
    const btnQuedarse = document.getElementById('btnQuedarse');
    if (btnQuedarse) {
        btnQuedarse.addEventListener('click', function() {
            modal.hide();
            // Reiniciar el video si es necesario
            const video = document.getElementById('miVideo');
            if (video) {
                video.currentTime = 0;
                video.pause();
            }
        });
    }

    // El botón de siguiente módulo ya tiene el href configurado en el HTML
    const btnSiguienteModulo = document.getElementById('btnSiguienteModulo');
    if (btnSiguienteModulo) {
        btnSiguienteModulo.addEventListener('click', function() {
            // La redirección se maneja automáticamente por el href
            modal.hide();
        });
    }
}

