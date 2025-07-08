const buscador = document.querySelector('#buscador');
const textoBusqueda = document.querySelector('#busqueda');
const container = document.querySelector('.container');



const resultado =JSON.parse(localStorage.getItem('results'))
console.log(resultado)






function mostrarResults(videos){
    videos.forEach( element => {

        const box = document.createElement('div')
        box.classList.add("box")


        box.innerHTML = `
        <div class="card">
            <img src="${element.imagen}" class="card-img">

            <div class="card-info">
                <h2 class="card-title">${element.titulo}</h2>
                <h5 class="card-subtitle">guiones: creacion de personajes</h5>
                <p class="card-text">Lore imput lastel crimpos parperten live in a movie</p>
                <h5 class="card-subtitle">Duracion</h5>
                <p class="card-text">5:00 min</p>                
            </div>
        </div>
        `
        container.appendChild(box)
    }) 
}


function filtrar (e){
    e.preventDefault()

    container.innerHTML = ""

    let filtro = videos

        
    if(textoBusqueda.value != "All"){
        filtro = filtro.filter(peliculas => peliculas.titulo.toLowerCase().includes(textoBusqueda.value.toLowerCase()) );
        localStorage.setItem("results",JSON.stringify(filtro))
        mostrarResults(filtro)

    }
    else{
        mostrarResults(filtro)
    }

    textoBusqueda.value = ""
    

}

buscador.addEventListener('submit' ,filtrar)

mostrarResults(resultado)