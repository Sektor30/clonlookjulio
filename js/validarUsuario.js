let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

document.addEventListener("DOMContentLoaded", function () {
  const btnRegistro = document.querySelector('#btnregistro');
  const btnIniciarSesion = document.querySelector('#btniniciar');
  const btnModulos = document.querySelector('#btnmodulos');
  const userIcon = document.querySelector("#ico");
  
  const conbusqueda = document.querySelector("#condicon-busqueda")


  for (let i = 0; i < usuarios.length; i++) {

    let confirmarSesion = usuarios[i] ? usuarios[i].logged : false

    console.log(confirmarSesion)

    if (confirmarSesion) {
      
      btnModulos.style.display = "block";
      btnRegistro.style.display = "none";
      btnIniciarSesion.style.display = "none";

      return
    }

  }

  btnModulos.style.display = "none";
  userIcon.style.display = "none";
  btnRegistro.style.display = "block";
  btnIniciarSesion.style.display = "block";
});

function redirigirUsuario(){
  for (let i = 0; i < usuarios.length; i++) {

    let confirmarSesion = usuarios[i] ? usuarios[i].logged : false

    console.log(confirmarSesion)

    if (confirmarSesion) {
      
      window.location.href = "../vistas/dashboard.html";

      return
    }
    else{
      window.location.href = "../index.html"
    }

  }
}
document.getElementById("miEnlace").addEventListener("click", redirigirUsuario);
