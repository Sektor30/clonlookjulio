const form = document.querySelector("#post")
const usuario = document.querySelector("#nombre")
const contraseña = document.querySelector("#contra")
const guestModeButton = document.querySelector("#guestModeButton");




function usuarioValido(e){
    e.preventDefault();

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    for (let i = 0; i < usuarios.length; i++) {

        if (usuarios[i].userName === usuario.value.trim() && usuarios[i].userPass === contraseña.value.trim()) {
            window.location = "../vistas/dashboard.html";
            usuarios[i].logged = true
            console.log(usuarios)
            localStorage.setItem("usuarios", JSON.stringify(usuarios))
            return
        }
        else{
           /*  const myModal = document.getElementById('myModal')
            const myInput = document.getElementById('myInput')
            myModal.addEventListener('shown.bs.modal', () => {
                myInput.focus()
            })  */
        }
       
        
        
    }
    form.reset();
    
}

// Función para manejar el modo de invitados
function modoInvitados() {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Crear usuario invitado si no existe
    const usuarioInvitado = {
        userName: "Invitado",
        userPass: "",
        logged: true
    };

    // Verificar si ya existe un invitado registrado
    const existeInvitado = usuarios.some(user => user.userName === "Invitado");

    if (!existeInvitado) {
        usuarios.push(usuarioInvitado);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }

    // Redirigir al dashboard
    window.location = "../vistas/dashboard.html";
}

// Asignar eventos
form.addEventListener("submit", usuarioValido);
guestModeButton.addEventListener("click", (e) => {
    e.preventDefault(); // Evitar el comportamiento predeterminado del enlace
    modoInvitados();
});



form.addEventListener('submit', usuarioValido);

