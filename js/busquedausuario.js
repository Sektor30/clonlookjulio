const buscador = document.querySelector('.busqueda');
const textoBusqueda = document.querySelector('#busqueda');
const container = document.querySelector('#container');



function mostrarResults(peliculas){
    peliculas.forEach( element => {

        const box = document.createElement('div')
        box.classList.add("box")


        box.innerHTML = `
        <div class="entradas">
            <div class="img-news"><img src="${element.imagen}" alt=""></div>
            <div class="cuadro">
                <div class="usuarioContenedor">
                    <div class="usuario" >
                        <img src="https://img.freepik.com/psd-gratis/ilustracion-3d-persona-gafas-sol-cabello-verde_23-2149436201.jpg?t=st=1725329625~exp=1725330225~hmac=c8ad3265a11127481035ecbc96e03c48a99c32b23453d0953100ebd0a657bd49" 
                        width="100%" alt="avatar" style="border-radius: 50%;">
                    </div>
                    <div class="puntaje" > 
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="descripcion">
                        <h1>${element.nombre}</h1>
                        <p>${element.year}-${element.director}</p>
                        <span> <a href="#"> ver más...</a> </span>
                    </div>
                </div>
            </div>
        </div>
        `
        container.appendChild(box)
    }) 
}


function filtrar (e){
    e.preventDefault()

    container.innerHTML = ""

    let filtro = peliculas

    
        
    if(textoBusqueda.value){
        filtro = filtro.filter(peliculas => peliculas.nombre.toLowerCase().includes(textoBusqueda.value.toLowerCase()) );
        mostrarResults(filtro)
    }
    else{
        mostrarResults(filtro)
    }

    textoBusqueda.value = ""


}

buscador.addEventListener('submit' ,filtrar)