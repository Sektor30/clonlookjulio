let user = JSON.parse(localStorage.getItem("usuarios")) || [];
/* let user = JSON.parse(localStorage.getItem("usuarios"))  */

const progreso = document.querySelector("#progreso")

console.log(user)

for (let i = 0; i < user.length; i++) {

    if(user[i].logged){
        progreso.textContent = `${user[i].progreso}%`
        console.log(user[i])
    }
    
}

//nombre user
document.addEventListener("DOMContentLoaded", function () {
    const nombre1 = document.querySelector("#NombreU");
    const nombre = document.querySelector("#NombreUser");
    const imagenesPerfil = document.querySelectorAll('.user-profile');
    
    for (let i = 0; i < user.length; i++) {
      
      if (user[i].logged) {
        nombre.textContent = `${user[i].userName}`;
        nombre1.textContent = `${user[i].userName}`;
        
        // Cargar imagen de perfil del usuario si existe
        if (user[i].profileImage) {
            imagenesPerfil.forEach(img => img.src = user[i].profileImage);
            console.log('Imagen de perfil cargada para:', user[i].userName, 'URL:', user[i].profileImage);
        }
        
        return
      }
  
    }

  })


   // Script para activar el collapse al pasar el mouse por el ícono de flecha
   document.addEventListener('DOMContentLoaded', function() {
    const toggles = [
      {icon: '#collapseEstilos', chevron: '#chevronEstilos'},
      {icon: '#collapseGuiones', chevron: '#chevronGuiones'},
      {icon: '#collapseProduccion', chevron: '#chevronProduccion'},
      {icon: '#collapseEdicion', chevron: '#chevronEdicion'}
    ];
    toggles.forEach(function(toggle) {
      const chevron = document.querySelector(toggle.chevron);
      if (chevron) {
        chevron.addEventListener('click', function() {
          const collapse = document.querySelector(toggle.icon);
          if (collapse) {
            const bsCollapse = bootstrap.Collapse.getOrCreateInstance(collapse);
            if (collapse.classList.contains('show')) {
              bsCollapse.hide();
            } else {
              bsCollapse.show();
            }
          }
        });
      }
    });
  });


//boton de certificado 
document.addEventListener("DOMContentLoaded", function () {
    const quizz = document.querySelector("#btnQuizz")
    const diploma = document.querySelector("#btncertificado")


    for (let i = 0; i < user.length; i++) {
  
        /* let Certificado = user[i] ? user[i].certificado: false
    
        console.log(Certificado) */
    
        if (user[i].logged && user[i].certificado) {

            quizz.style.display = "none";
            diploma.style.display = "block";
  
    
          return
        } 
    
    }
    quizz.style.display = "block";
    diploma.style.display = "none";
   
     

})

//carga de barra de progreso Modulos

document.addEventListener("DOMContentLoaded", function () {
    let user = JSON.parse(localStorage.getItem("usuarios")) || [];
    let progresoTotal = 0;
    let modulos = 0;
    let modulosCompletos = 0;
    for (let i = 0; i < user.length; i++) {
        if (user[i].logged) {
            // Estilos
            const barraEstilos = document.getElementById('progress-estilos-dashboard');
            const barraEstilosOffcanvas = document.getElementById('progress-estilos-offcanvas');
            let progresoEstilos = user[i].progresoEstilos || 0;
            if (progresoEstilos >= 20) { modulosCompletos++; progresoEstilos = 20; }
            if (barraEstilos) {
                barraEstilos.style.width = progresoEstilos * 5 + '%';
                barraEstilos.textContent = progresoEstilos * 5 + '%';
                barraEstilos.setAttribute('aria-valuenow', progresoEstilos * 5);
            }
            if (barraEstilosOffcanvas) {
                barraEstilosOffcanvas.style.width = progresoEstilos * 5 + '%';
                barraEstilosOffcanvas.textContent = progresoEstilos * 5 + '%';
                barraEstilosOffcanvas.setAttribute('aria-valuenow', progresoEstilos * 5);
            }
            progresoTotal += progresoEstilos;
            modulos++;
            // Guiones
            const barraGuiones = document.getElementById('progress-guiones-dashboard');
            const barraGuionesOffcanvas = document.getElementById('progress-guiones-offcanvas');
            let progresoGuiones = user[i].progresoGuiones || 0;
            if (progresoGuiones >= 20) { modulosCompletos++; progresoGuiones = 20; }
            if (barraGuiones) {
                barraGuiones.style.width = progresoGuiones * 5 + '%';
                barraGuiones.textContent = progresoGuiones * 5 + '%';
                barraGuiones.setAttribute('aria-valuenow', progresoGuiones * 5);
            }
            if (barraGuionesOffcanvas) {
                barraGuionesOffcanvas.style.width = progresoGuiones * 5 + '%';
                barraGuionesOffcanvas.textContent = progresoGuiones * 5 + '%';
                barraGuionesOffcanvas.setAttribute('aria-valuenow', progresoGuiones * 5);
            }
            progresoTotal += progresoGuiones;
            modulos++;
            // Producción
            const barraProduccion = document.getElementById('progress-produccion-dashboard');
            const barraProduccionOffcanvas = document.getElementById('progress-produccion-offcanvas');
            let progresoProduccion = user[i].progresoProduccion || 0;
            if (progresoProduccion >= 20) { modulosCompletos++; progresoProduccion = 20; }
            if (barraProduccion) {
                barraProduccion.style.width = progresoProduccion * 5 + '%';
                barraProduccion.textContent = progresoProduccion * 5 + '%';
                barraProduccion.setAttribute('aria-valuenow', progresoProduccion * 5);
            }
            if (barraProduccionOffcanvas) {
                barraProduccionOffcanvas.style.width = progresoProduccion * 5 + '%';
                barraProduccionOffcanvas.textContent = progresoProduccion * 5 + '%';
                barraProduccionOffcanvas.setAttribute('aria-valuenow', progresoProduccion * 5);
            }
            progresoTotal += progresoProduccion;
            modulos++;
            // Edición
            const barraEdicion = document.getElementById('progress-edicion-dashboard');
            const barraEdicionOffcanvas = document.getElementById('progress-edicion-offcanvas');
            let progresoEdicion = user[i].progresoEdicion || 0;
            if (progresoEdicion >= 20) { modulosCompletos++; progresoEdicion = 20; }
            if (barraEdicion) {
                barraEdicion.style.width = progresoEdicion * 5 + '%';
                barraEdicion.textContent = progresoEdicion * 5 + '%';
                barraEdicion.setAttribute('aria-valuenow', progresoEdicion * 5);
            }
            if (barraEdicionOffcanvas) {
                barraEdicionOffcanvas.style.width = progresoEdicion * 5 + '%';
                barraEdicionOffcanvas.textContent = progresoEdicion * 5 + '%';
                barraEdicionOffcanvas.setAttribute('aria-valuenow', progresoEdicion * 5);
            }
            progresoTotal += progresoEdicion;
            modulos++;
            // Actualizar el progreso total en el dashboard (máximo 80%)
            const progresoElem = document.getElementById('progreso');
            const progresoText = document.getElementById('progreso-text');
            if (progresoElem && modulos > 0) {
                let porcentaje = Math.round((progresoTotal / (modulos * 20)) * 80); // máximo 80%
                const circle = progresoElem;
                const radius = circle.r.baseVal.value;
                const circumference = 2 * Math.PI * radius;
                circle.style.strokeDasharray = `${circumference}`;
                circle.style.strokeDashoffset = `${circumference - (porcentaje / 100) * circumference}`;
                if (progresoText) progresoText.textContent = porcentaje + '%';
            }
            // Habilitar botón de examen solo si todos los módulos están al 20%
            const btnQuizz = document.getElementById('btnQuizz');
            if (btnQuizz) {
                if (modulosCompletos === 4) {
                    btnQuizz.disabled = false;
                    btnQuizz.classList.remove('btn-dark');
                    btnQuizz.classList.add('btn-primary');
                } else {
                    btnQuizz.disabled = true;
                    btnQuizz.classList.remove('btn-primary');
                    btnQuizz.classList.add('btn-dark');
                }
            }
        }
    }
});

// Funciones para actualizar el progreso de cada módulo y sincronizar ambas barras
function actualizarProgresoEstilos(nuevoProgreso) {
    actualizarProgresoModulo('progresoEstilos', 'progress-estilos-dashboard', 'progress-estilos-offcanvas', nuevoProgreso);
}
function actualizarProgresoGuiones(nuevoProgreso) {
    actualizarProgresoModulo('progresoGuiones', 'progress-guiones-dashboard', 'progress-guiones-offcanvas', nuevoProgreso);
}
function actualizarProgresoProduccion(nuevoProgreso) {
    actualizarProgresoModulo('progresoProduccion', 'progress-produccion-dashboard', 'progress-produccion-offcanvas', nuevoProgreso);
}
function actualizarProgresoEdicion(nuevoProgreso) {
    actualizarProgresoModulo('progresoEdicion', 'progress-edicion-dashboard', 'progress-edicion-offcanvas', nuevoProgreso);
}

function actualizarProgresoModulo(key, idDashboard, idOffcanvas, nuevoProgreso) {
    let user = JSON.parse(localStorage.getItem("usuarios")) || [];
    for (let i = 0; i < user.length; i++) {
        if (user[i].logged) {
            user[i][key] = nuevoProgreso;
            localStorage.setItem("usuarios", JSON.stringify(user));
            // Actualizar ambas barras
            const barraDashboard = document.getElementById(idDashboard);
            const barraOffcanvas = document.getElementById(idOffcanvas);
            if (barraDashboard) {
                barraDashboard.style.width = nuevoProgreso + '%';
                barraDashboard.textContent = nuevoProgreso + '%';
                barraDashboard.setAttribute('aria-valuenow', nuevoProgreso);
            }
            if (barraOffcanvas) {
                barraOffcanvas.style.width = nuevoProgreso + '%';
                barraOffcanvas.textContent = nuevoProgreso + '%';
                barraOffcanvas.setAttribute('aria-valuenow', nuevoProgreso);
            }
            // Actualizar el progreso general
            actualizarProgresoGeneral();
            break;
        }
    }
}

function actualizarProgresoGeneral() {
    let user = JSON.parse(localStorage.getItem("usuarios")) || [];
    for (let i = 0; i < user.length; i++) {
        if (user[i].logged) {
            let total = 0;
            let modulos = 0;
            total += user[i].progresoEstilos || 0; modulos++;
            total += user[i].progresoGuiones || 0; modulos++;
            total += user[i].progresoProduccion || 0; modulos++;
            total += user[i].progresoEdicion || 0; modulos++;
            let promedio = Math.round(total / modulos);
            const progresoElem = document.getElementById('progreso');
            const progresoText = document.getElementById('progreso-text');
            if (progresoElem) {
                // Progress ring SVG
                const circle = progresoElem;
                const radius = circle.r.baseVal.value;
                const circumference = 2 * Math.PI * radius;
                circle.style.strokeDasharray = `${circumference}`;
                circle.style.strokeDashoffset = `${circumference - (promedio / 100) * circumference}`;
                if (progresoText) progresoText.textContent = promedio + '%';
            }
            break;
        }
    }
}

// Lógica para el modal de edición de perfil
document.addEventListener('DOMContentLoaded', () => {
    const modalEditarPerfil = document.getElementById('modalEditarPerfil');
    if (!modalEditarPerfil) return;

    const btnGuardar = document.getElementById('btnGuardarCambiosPerfil');
    const btnCancelar = document.getElementById('btnCancelarCambiosPerfil');
    const opcionesPerfil = document.querySelectorAll('.perfil-opcion');
    const imagenesPerfil = document.querySelectorAll('.user-profile');

    let originalSrc = '';
    let seleccionActualSrc = '';

    // Función para obtener el usuario logueado
    function getUsuarioLogueado() {
        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        return usuarios.find(usuario => usuario.logged);
    }

    // Función para actualizar el usuario en localStorage
    function actualizarUsuarioEnStorage(usuarioActualizado) {
        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        const index = usuarios.findIndex(u => u.userName === usuarioActualizado.userName);
        if (index !== -1) {
            usuarios[index] = usuarioActualizado;
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
        }
    }

    modalEditarPerfil.addEventListener('show.bs.modal', () => {
        const usuarioLogueado = getUsuarioLogueado();
        if (usuarioLogueado && usuarioLogueado.profileImage) {
            originalSrc = usuarioLogueado.profileImage;
        } else {
            originalSrc = imagenesPerfil[0].src;
        }
        seleccionActualSrc = originalSrc;
        
        // Marcar la opción seleccionada actualmente
        opcionesPerfil.forEach(opcion => {
            if (opcion.getAttribute('data-img') === originalSrc) {
                opcion.style.border = '2px solid #0dcaf0';
            } else {
                opcion.style.border = '2px solid transparent';
            }
        });
    });

    opcionesPerfil.forEach(opcion => {
        opcion.addEventListener('click', function() {
            seleccionActualSrc = this.getAttribute('data-img');
            
            // Actualizar borde para feedback visual
            opcionesPerfil.forEach(o => o.style.border = '2px solid transparent');
            this.style.border = '2px solid #0dcaf0';
        });
    });

    btnGuardar.addEventListener('click', () => {
        const usuarioLogueado = getUsuarioLogueado();
        if (usuarioLogueado) {
            // Actualizar la imagen en todas las instancias
            imagenesPerfil.forEach(img => img.src = seleccionActualSrc);
            
            // Guardar la imagen en el objeto del usuario
            usuarioLogueado.profileImage = seleccionActualSrc;
            actualizarUsuarioEnStorage(usuarioLogueado);
            
            console.log('Imagen de perfil guardada para:', usuarioLogueado.userName);
            console.log('URL de la imagen guardada:', seleccionActualSrc);
            console.log('Usuario actualizado:', usuarioLogueado);
        } else {
            console.error('No se encontró usuario logueado');
        }
        
        const modalInstance = bootstrap.Modal.getInstance(modalEditarPerfil);
        modalInstance.hide();
    });

    btnCancelar.addEventListener('click', () => {
        // No es necesario hacer nada aquí porque no cambiamos la imagen en vivo,
        // y el data-bs-dismiss="modal" ya cierra el modal.
        // Al reabrir, se tomará la imagen correcta gracias al evento 'show.bs.modal'.
    });
});

// Cargar lista de estudiantes
document.addEventListener('DOMContentLoaded', () => {
    const listaEstudiantes = document.getElementById('lista-estudiantes');
    if (listaEstudiantes) {
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        listaEstudiantes.innerHTML = ''; // Limpiar la lista por si acaso

        usuarios.forEach(usuario => {
            const li = document.createElement('li');
            li.textContent = usuario.userName;
            li.classList.add('list-group-item'); // Para que se vea como los otros items si es necesario
            listaEstudiantes.appendChild(li);
        });
    }
});