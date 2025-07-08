// Sincronización y visualización de progreso de módulos en dashboard y offcanvas

document.addEventListener("DOMContentLoaded", function () {
    let user = JSON.parse(localStorage.getItem("usuarios")) || [];
    let progresoTotal = 0;
    let modulos = 0;
    for (let i = 0; i < user.length; i++) {
        if (user[i].logged) {
            // Estilos
            const barraEstilos = document.getElementById('progress-estilos-dashboard');
            const barraEstilosOffcanvas = document.getElementById('progress-estilos-offcanvas');
            let progresoEstilos = user[i].progresoEstilos || 0;
            if (barraEstilos) {
                barraEstilos.style.width = progresoEstilos + '%';
                barraEstilos.textContent = progresoEstilos + '%';
                barraEstilos.setAttribute('aria-valuenow', progresoEstilos);
            }
            if (barraEstilosOffcanvas) {
                barraEstilosOffcanvas.style.width = progresoEstilos + '%';
                barraEstilosOffcanvas.textContent = progresoEstilos + '%';
                barraEstilosOffcanvas.setAttribute('aria-valuenow', progresoEstilos);
            }
            progresoTotal += progresoEstilos;
            modulos++;
            // Guiones
            const barraGuiones = document.getElementById('progress-guiones-dashboard');
            const barraGuionesOffcanvas = document.getElementById('progress-guiones-offcanvas');
            let progresoGuiones = user[i].progresoGuiones || 0;
            if (barraGuiones) {
                barraGuiones.style.width = progresoGuiones + '%';
                barraGuiones.textContent = progresoGuiones + '%';
                barraGuiones.setAttribute('aria-valuenow', progresoGuiones);
            }
            if (barraGuionesOffcanvas) {
                barraGuionesOffcanvas.style.width = progresoGuiones + '%';
                barraGuionesOffcanvas.textContent = progresoGuiones + '%';
                barraGuionesOffcanvas.setAttribute('aria-valuenow', progresoGuiones);
            }
            progresoTotal += progresoGuiones;
            modulos++;
            // Producción
            const barraProduccion = document.getElementById('progress-produccion-dashboard');
            const barraProduccionOffcanvas = document.getElementById('progress-produccion-offcanvas');
            let progresoProduccion = user[i].progresoProduccion || 0;
            if (barraProduccion) {
                barraProduccion.style.width = progresoProduccion + '%';
                barraProduccion.textContent = progresoProduccion + '%';
                barraProduccion.setAttribute('aria-valuenow', progresoProduccion);
            }
            if (barraProduccionOffcanvas) {
                barraProduccionOffcanvas.style.width = progresoProduccion + '%';
                barraProduccionOffcanvas.textContent = progresoProduccion + '%';
                barraProduccionOffcanvas.setAttribute('aria-valuenow', progresoProduccion);
            }
            progresoTotal += progresoProduccion;
            modulos++;
            // Edición
            const barraEdicion = document.getElementById('progress-edicion-dashboard');
            const barraEdicionOffcanvas = document.getElementById('progress-edicion-offcanvas');
            let progresoEdicion = user[i].progresoEdicion || 0;
            if (barraEdicion) {
                barraEdicion.style.width = progresoEdicion + '%';
                barraEdicion.textContent = progresoEdicion + '%';
                barraEdicion.setAttribute('aria-valuenow', progresoEdicion);
            }
            if (barraEdicionOffcanvas) {
                barraEdicionOffcanvas.style.width = progresoEdicion + '%';
                barraEdicionOffcanvas.textContent = progresoEdicion + '%';
                barraEdicionOffcanvas.setAttribute('aria-valuenow', progresoEdicion);
            }
            progresoTotal += progresoEdicion;
            modulos++;
            // Actualizar el progreso total en el dashboard (promedio de los 4 módulos)
            const progresoElem = document.getElementById('progreso');
            if (progresoElem && modulos > 0) {
                let promedio = Math.round(progresoTotal / modulos);
                progresoElem.textContent = promedio + '%';
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
            if (progresoElem) {
                progresoElem.textContent = promedio + '%';
            }
            break;
        }
    }
} 