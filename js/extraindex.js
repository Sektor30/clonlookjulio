const btnstar = document.getElementById('btnstar');
const btnregistro = document.getElementById('btnregistro');
const btnclose = document.getElementById('btnclose');
const container = document.querySelector('.container');
const busqueda = document.querySelector('#busqueda')
const buscador = document.querySelector('#buscador')


function busque(e){
   e.preventDefault();
   console.log(videos)

   let result = videos.filter(video => video.titulo.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(busqueda.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"")))
   console.log(result)

   localStorage.setItem("results",JSON.stringify(result))

   window.location = "./vistas/busqueda-videos.html"
}

buscador.addEventListener('submit',busque)





/* saludar a el usuario */

function saludo(){
    const saludo = document.querySelector('#saludo');
    let nombreUser = JSON.parse( localStorage.getItem ('user') );
    if(nombreUser){
        saludo.innerHTML = `bienvenido ${nombreUser.userName}✔✔`
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