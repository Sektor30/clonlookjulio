/* localStorage.clear();
window.location = "../index.html" */

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

function cerrarSesion (){

    for (let i = 0; i < usuarios.length; i++) {

        if(usuarios[i].logged){

            usuarios[i].logged = false
            localStorage.setItem("usuarios", JSON.stringify(usuarios))
            window.location = "../index.html" 
        }

    
        
    }

}
    
    
cerrarSesion ()

window.location = "../index.html"