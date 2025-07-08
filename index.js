/* 
pseudocodigo

*/

//inicia comentario

/* const btnstar = document.getElementById('btnstar');
const btnregistro = document.getElementById('btnregistro');
const btnclose = document.getElementById('btnclose');
const container = document.querySelector('.container');
const busqueda = document.querySelector('#busqueda')
const buscador = document.querySelector('#buscador')
 */

/* function busque(e){
   e.preventDefault();
   console.log(videos)

   let result = videos.filter(video => video.titulo.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(busqueda.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"")))
   console.log(result)

   localStorage.setItem("results",JSON.stringify(result))

   window.location = "./vistas/busqueda-videos.html"
}

buscador.addEventListener('submit',busque)

//saludar a el usuario 

function saludo(){
    const saludo = document.querySelector('#saludo');
    let nombreUser = JSON.parse( localStorage.getItem ('user') );
    if(nombreUser){
        saludo.innerHTML = `${nombreUser.userName}`
    }
    else{
        saludo.innerHTML = '';
    }
} 
btnclose.addEventListener('click', saludo);

document.addEventListener('DOMContentLoaded', saludo);

   


modulos.forEach( element => {

    const box = document.createElement('div')
    box.classList.add("box")


    box.innerHTML = `
        <div class="card">
            <div class="card-header">
                <img src="${element.imagen}" alt="">
            </div>
            <div class="card-body">
              <h1 class="title">${element.nombre}</h1>    
              <p class="text">${element.descripcion}</p>
              <a href="${element.link}">ver mas</a>
            </div>
        </div>
    `
    container.appendChild(box)
}) 
 */

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    
    // Verificar si hay un tema guardado
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      updateIcon(savedTheme);
    }

    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateIcon(newTheme);
    });

    function updateIcon(theme) {
      icon.className = theme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
    }
  });
  



//condiciones al iniciar sesion 
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



/* video corousel */

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('mainCarousel');
    // Selecciona todos los videos dentro del carrusel
    const videos = carousel.querySelectorAll('video');
    console.log('Videos encontrados en el carrusel:', videos.length);
    
    const carouselInstance = new bootstrap.Carousel(carousel, {
        interval: 20000, // Cambia cada 20 segundos
        wrap: true,     // Vuelve al inicio después del último slide
        keyboard: true  // Permite navegación con teclado
    });

    // Función para manejar la reproducción de video de forma segura
    async function playVideoSafely(video, index) {
        try {
            // Verificar que el video esté listo
            if (video.readyState >= 2) { // HAVE_CURRENT_DATA
                video.playbackRate = 0.9;
                await video.play();
                console.log(`Video ${index + 1} (${video.id}) reproduciéndose correctamente`);
            } else {
                console.log(`Video ${index + 1} (${video.id}) no está listo aún`);
            }
        } catch (error) {
            console.warn(`Error reproduciendo video ${index + 1} (${video.id}):`, error.message);
            
            // Si es un error de autoplay policy, intentar con interacción del usuario
            if (error.name === 'NotAllowedError') {
                console.log('Error de política de autoplay. Esperando interacción del usuario...');
            }
        }
    }

    // Función para pausar video de forma segura
    function pauseVideoSafely(video, index) {
        try {
            video.pause();
            console.log(`Video ${index + 1} (${video.id}) pausado correctamente`);
        } catch (error) {
            console.warn(`Error pausando video ${index + 1} (${video.id}):`, error.message);
        }
    }
   
    // Función para reproducir y ralentizar todos los videos
    async function playVideosRalentizados() {
        const playPromises = videos.map((video, index) => playVideoSafely(video, index));
        await Promise.allSettled(playPromises);
    }

    // Configurar videos cuando estén listos
    videos.forEach((video, index) => {
        // Configurar atributos importantes para autoplay
        video.muted = true;
        video.playsInline = true;
        video.preload = 'metadata';

        // Listener para cuando el video esté cargado
        video.addEventListener('loadeddata', function() {
            console.log(`Video ${index + 1} (${video.id}) cargado correctamente`);
        });
        
        // Listener para cuando el video esté listo para reproducir
        video.addEventListener('canplay', function() {
            console.log(`Video ${index + 1} (${video.id}) listo para reproducir`);
        });
        
        // Agregar listener para errores de carga
        video.addEventListener('error', function(e) {
            console.error(`Error cargando video ${index + 1} (${video.id}):`, e);
        });

        // Listener para cuando el video termine
        video.addEventListener('ended', function() {
            console.log(`Video ${index + 1} (${video.id}) terminado, avanzando al siguiente slide`);
            carouselInstance.next();
        });
    });

    // Usar IntersectionObserver para pausar/reproducir según visibilidad
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;
            const index = Array.from(videos).indexOf(video);
            
            if (entry.isIntersecting) {
                console.log(`Video ${index + 1} (${video.id}) visible, intentando reproducir...`);
                playVideoSafely(video, index);
            } else {
                console.log(`Video ${index + 1} (${video.id}) no visible, pausando...`);
                pauseVideoSafely(video, index);
            }
        });
    }, { 
        threshold: 0.5,
        rootMargin: '0px'
    });

    videos.forEach(video => observer.observe(video));

    // Reproducir los videos cuando el usuario interactúe con la página
    let userInteracted = false;
    
    function handleUserInteraction() {
        if (!userInteracted) {
            userInteracted = true;
            console.log('Usuario interactuó con la página, reproduciendo videos...');
            playVideosRalentizados();
            
            // Remover listeners después de la primera interacción
            document.removeEventListener('click', handleUserInteraction);
            document.removeEventListener('touchstart', handleUserInteraction);
            document.removeEventListener('keydown', handleUserInteraction);
        }
    }

    // Agregar múltiples tipos de interacción para mayor compatibilidad
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);

    // Intentar reproducir videos después de un breve delay
    setTimeout(() => {
        if (!userInteracted) {
            console.log('Intentando reproducción automática después del delay...');
            playVideosRalentizados();
        }
    }, 2000);

    // Actualizar indicadores activos
    carousel.addEventListener('slide.bs.carousel', function (e) {
        const indicators = document.querySelectorAll('.carousel-indicators button');
        indicators.forEach((indicator, index) => {
            if (index === e.to) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    });

    // Manejar clics en los indicadores
    const indicators = document.querySelectorAll('.carousel-indicators button');
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            carouselInstance.to(index);
        });
    });

    // Manejar eventos del carrusel para pausar/reproducir videos
    carousel.addEventListener('slide.bs.carousel', function (e) {
        // Pausar todos los videos
        videos.forEach((video, index) => {
            pauseVideoSafely(video, index);
        });
    });

    carousel.addEventListener('slid.bs.carousel', function (e) {
        // Reproducir el video del slide actual si está visible
        const currentVideo = videos[e.to];
        if (currentVideo) {
            const index = Array.from(videos).indexOf(currentVideo);
            playVideoSafely(currentVideo, index);
        }
    });
});

/* MODAL CAROUSEL  */
function navegarModal(modalActual, modalSiguiente) {
    // Cerrar el modal actual
    const modalActualElement = document.getElementById(modalActual);
    const bsModalActual = bootstrap.Modal.getInstance(modalActualElement);
    bsModalActual.hide();

    // Abrir el siguiente modal
    const modalSiguienteElement = document.getElementById(modalSiguiente);
    const bsModalSiguiente = new bootstrap.Modal(modalSiguienteElement);
    bsModalSiguiente.show();
  }