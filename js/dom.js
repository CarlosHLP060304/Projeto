const cadastro = document.querySelector("#cadastro") 
const btn_login_cadastro = document.querySelector("#btn_login_cadastro")
const cadastro_login = document.querySelector("#cadastro_login") 


const login = document.querySelector("#login") 
const senha_login= document.querySelector("#senha_login")
const btn_senha_login= document.querySelector("#mostrar_senha_login")

function mostrarSenha() {
    if(senha_login.getAttribute("type") == "password"){
        senha_login.setAttribute("type","text")
    }else{
        senha_login.setAttribute("type","password")
    }
}

function trocaTela(){
    login.classList.toggle("none")
    cadastro.classList.toggle("none")
}

btn_senha_login.addEventListener("click",mostrarSenha)
btn_login_cadastro.addEventListener("click", trocaTela)