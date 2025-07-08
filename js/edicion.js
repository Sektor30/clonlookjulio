document.addEventListener("DOMContentLoaded", function () {
    const btnRegistro = document.querySelector('#btnregistro');
    const btnIniciarSesion = document.querySelector('#btniniciar');
    const btnModulos = document.querySelector('#btnmodulos');
    const userIcon = document.querySelector("#ico");

  
  

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  
    for (let i = 0; i < usuarios.length; i++) {
  
      let confirmarSesion = usuarios[i] ? usuarios[i].logged : false
  
      console.log(confirmarSesion)
  
      if (confirmarSesion) {

        btnModulos.style.display = "block";
        btnRegistro.style.display = "none";
        btnIniciarSesion.style.display = "none";


        const nombre = document.querySelector("#NombreUser");

        nombre.textContent = `${usuarios[i].userName}`;

  
        return
      }
  
    }
  
   
    btnModulos.style.display = "none";
    userIcon.style.display = "none";
    btnRegistro.style.display = "block";
    btnIniciarSesion.style.display = "block";
  });

//seleccion modal dashboard icon

document.addEventListener('DOMContentLoaded', function() {
    var btnResumen = document.getElementById('btnResumenDashboard');
    if (btnResumen) {
      btnResumen.addEventListener('click', function() {
        var modal = bootstrap.Modal.getInstance(document.getElementById('modalOpcionesDashboard'));
        if (modal) modal.hide();
        var offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasUser'));
        setTimeout(function() {
          offcanvas.show();
        }, 300);
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
                  if (!usuarios[i].progresoEdicion || usuarios[i].progresoEdicion < porcentaje) {
                      usuarios[i].progresoEdicion = Math.floor(porcentaje);
                      localStorage.setItem("usuarios", JSON.stringify(usuarios));
                  }
              }
          }
          // Actualizar barra de la card lateral si existe
          const barraCard = document.getElementById('progress-edicion-card');
          if (barraCard) {
              barraCard.style.width = Math.floor(porcentaje) + '%';
              barraCard.textContent = Math.floor(porcentaje) + '%';
              barraCard.setAttribute('aria-valuenow', Math.floor(porcentaje));
          }
          // Actualizar barra de dashboard si está abierta
          const barraDashboard = document.getElementById('progress-edicion-dashboard');
          if (barraDashboard) {
              barraDashboard.style.width = Math.floor(porcentaje) + '%';
              barraDashboard.textContent = Math.floor(porcentaje) + '%';
              barraDashboard.setAttribute('aria-valuenow', Math.floor(porcentaje));
          }
          // Si el progreso llega al 100%, mostrar el modal
          if (porcentaje >= 100) {
              mostrarModalFelicitaciones();
          }
      }

      // --- Lógica para habilitar/deshabilitar el botón de examen según progreso general y video ---
      let videoTerminado = false;
      function controlarBotonExamen() {
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        let progresoEstilos = 0, progresoGuiones = 0, progresoProduccion = 0, progresoEdicion = 0;
        for (let i = 0; i < usuarios.length; i++) {
          if (usuarios[i].logged) {
            progresoEstilos = usuarios[i].progresoEstilos || 0;
            progresoGuiones = usuarios[i].progresoGuiones || 0;
            progresoProduccion = usuarios[i].progresoProduccion || 0;
            progresoEdicion = usuarios[i].progresoEdicion || 0;
            break;
          }
        }
        let promedio = Math.round((progresoEstilos + progresoGuiones + progresoProduccion + progresoEdicion) / 4);
        const btnSiguienteMod = document.querySelector('.siguienteMod');
        if (btnSiguienteMod) {
          if (promedio >= 80 && videoTerminado) {
            btnSiguienteMod.removeAttribute('disabled');
            btnSiguienteMod.classList.remove('bg-dark', 'btn-dark');
            btnSiguienteMod.classList.add('bg-primary');
            btnSiguienteMod.setAttribute('title', '¡Listo para presentar el examen!');
          } else {
            btnSiguienteMod.setAttribute('disabled', '');
            btnSiguienteMod.classList.add('bg-dark', 'btn-dark');
            btnSiguienteMod.classList.remove('bg-primary');
            if (!videoTerminado) {
              btnSiguienteMod.setAttribute('title', 'Debes ver el video completo para presentar el examen');
            } else {
              btnSiguienteMod.setAttribute('title', 'Debes completar al menos el 80% de todos los módulos para presentar el examen');
            }
          }
          if (window.bootstrap) {
            if (btnSiguienteMod._tooltip) btnSiguienteMod._tooltip.dispose();
            btnSiguienteMod._tooltip = new bootstrap.Tooltip(btnSiguienteMod);
          }
        }
      }
      // Bloquear al cargar
      controlarBotonExamen();

      // Eventos del video
      video.addEventListener('timeupdate', () => {
          if (video.duration) {
              const porcentaje = (video.currentTime / video.duration) * 100;
              actualizarBarraProgreso(porcentaje);
              videoTerminado = false;
              controlarBotonExamen();
          }
      });
      video.addEventListener('loadedmetadata', () => {
          if (video.duration) {
              const porcentaje = (video.currentTime / video.duration) * 100;
              actualizarBarraProgreso(porcentaje);
              videoTerminado = false;
              controlarBotonExamen();
          }
      });

      // Evento para cuando el video termina
      video.addEventListener('ended', () => {
          barraProgreso.style.width = '100%';
          barraProgreso.setAttribute('aria-valuenow', 100);
          barraProgreso.textContent = '100%';
          const bandera = document.querySelector('.bandera i');
          if (bandera) {
              bandera.style.color = '#28a745';
          }
          videoTerminado = true;
          controlarBotonExamen();
          // Botón del modal
          const btnPresentarExamenModal = document.getElementById('btnPresentarExamenModal');
          if (btnPresentarExamenModal) {
            if (videoTerminado && promedio >= 80) {
              btnPresentarExamenModal.removeAttribute('disabled');
              btnPresentarExamenModal.setAttribute('title', '¡Listo para presentar el examen!');
            } else if (!videoTerminado) {
              btnPresentarExamenModal.setAttribute('disabled', '');
              btnPresentarExamenModal.setAttribute('title', 'Debes ver el video completo para presentar el examen');
            } else {
              btnPresentarExamenModal.setAttribute('disabled', '');
              btnPresentarExamenModal.setAttribute('title', 'Debes completar al menos el 80% de todos los módulos para presentar el examen');
            }
            if (window.bootstrap) {
              if (btnPresentarExamenModal._tooltip) btnPresentarExamenModal._tooltip.dispose();
              btnPresentarExamenModal._tooltip = new bootstrap.Tooltip(btnPresentarExamenModal);
            }
          }
      });
  }

  // Funcionalidad de cambio de tamaño del video
  const btnModuloGuiones = document.getElementById('btnModuloProduccion');
  const videoContainer = document.querySelector('.video-yt');
  
  if (btnModuloGuiones && videoContainer) {
      btnModuloGuiones.addEventListener('click', function() {
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
  const btnPresentarExamenModal = document.getElementById('btnPresentarExamenModal');
  if (btnPresentarExamenModal) {
      btnPresentarExamenModal.addEventListener('click', function() {
          // La redirección se maneja automáticamente por el href
          modal.hide();
      });
  }
}
