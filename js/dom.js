const btn = document.querySelector("#mostrar_senha")
const senha = document.querySelector("#senha")
function mostrarSenha() {
    if(senha.getAttribute("type") == "password"){
        senha.setAttribute("type","text")
    }else{
        senha.setAttribute("type","password")
    }
}

btn.addEventListener("click", mostrarSenha)
