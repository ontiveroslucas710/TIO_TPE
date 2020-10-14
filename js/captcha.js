"use strict"
function CreateCaptcha( ) {
    let NumeroCaptcha = Math.floor(Math.random() * (500000-100000)) +1;
    document.querySelector("#TextoCaptcha").innerHTML = NumeroCaptcha;
    }
    
    function ValidCaptcha() {
    let valor_del_usuario = document.querySelector("#EscribirCaptcha").value;
    let captcha = document.querySelector("#TextoCaptcha").innerHTML
    console.log(valor_del_usuario)
    console.log(captcha)
        if (captcha == valor_del_usuario) {
    document.querySelector("#ResultadoCaptcha").innerHTML = "valor correcto"
        }
        else {
            document.querySelector("#ResultadoCaptcha").innerHTML = "valor incorrecto"
        }
    
    }
    
    CreateCaptcha();
    
    let VerificarCaptcha = document.querySelector("#BotonCaptcha");
    VerificarCaptcha.addEventListener("click", ValidCaptcha);