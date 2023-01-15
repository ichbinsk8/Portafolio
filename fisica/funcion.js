const boton2 = document.querySelector(".boton2");
const boton1 = document.querySelector(".boton1");
const boton3 = document.querySelector(".boton3");
const boton4 = document.querySelector(".boton4");
const boton5 = document.querySelector(".boton5");
const boton6 = document.querySelector(".boton6");

boton1.addEventListener("click",mCubo)
boton2.addEventListener("click",mPrisma)
boton3.addEventListener("click",mCono)
boton4.addEventListener("click",mEsfera)
boton5.addEventListener("click",mCilindro)
boton6.addEventListener("click",mPiramide)

function mPrisma(){
    document.getElementById('mostrar2').style.display = 'block';
    document.getElementById('mostrar1').style.display = 'none';
    document.getElementById('mostrar3').style.display = 'none';
    document.getElementById('mostrar4').style.display = 'none';
    document.getElementById('mostrar5').style.display = 'none';
    document.getElementById('mostrar6').style.display = 'none';
}
function mCubo(){
    document.getElementById('mostrar1').style.display = 'block';
    document.getElementById('mostrar2').style.display = 'none';
    document.getElementById('mostrar3').style.display = 'none';
    document.getElementById('mostrar4').style.display = 'none';
    document.getElementById('mostrar5').style.display = 'none';
    document.getElementById('mostrar6').style.display = 'none';
}
function mCono(){
    document.getElementById('mostrar3').style.display = 'block';
    document.getElementById('mostrar2').style.display = 'none';
    document.getElementById('mostrar1').style.display = 'none';
    document.getElementById('mostrar4').style.display = 'none';
    document.getElementById('mostrar5').style.display = 'none';
    document.getElementById('mostrar6').style.display = 'none';
}

function mEsfera(){
    document.getElementById('mostrar4').style.display = 'block';
    document.getElementById('mostrar2').style.display = 'none';
    document.getElementById('mostrar3').style.display = 'none';
    document.getElementById('mostrar1').style.display = 'none';
    document.getElementById('mostrar5').style.display = 'none';
    document.getElementById('mostrar6').style.display = 'none';
}

function mCilindro(){
    document.getElementById('mostrar5').style.display = 'block';
    document.getElementById('mostrar2').style.display = 'none';
    document.getElementById('mostrar3').style.display = 'none';
    document.getElementById('mostrar4').style.display = 'none';
    document.getElementById('mostrar1').style.display = 'none';
    document.getElementById('mostrar6').style.display = 'none';
}
function mPiramide(){
    document.getElementById('mostrar6').style.display = 'block';
    document.getElementById('mostrar2').style.display = 'none';
    document.getElementById('mostrar3').style.display = 'none';
    document.getElementById('mostrar4').style.display = 'none';
    document.getElementById('mostrar5').style.display = 'none';
    document.getElementById('mostrar1').style.display = 'none';
}

//Formulas para calcular y mostrar el volumen
var ladoCubo = document.getElementById('ladoCubo').value;
var Boton = document.getElementById("enviar");

function cubo(){
    
}

Boton.onclick = function(){
    cubo();
    alert("El valor del lado es: "+ladoCubo);
}







