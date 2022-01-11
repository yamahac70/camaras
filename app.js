let numCamara=document.getElementById("numCamara");
const addCamara=document.getElementById("addCamara")
const checkModo=document.getElementById("modo");
const modoTexto=document.getElementById("modoTexto");
let numCamaraArray=[];
const camarasDesinstaladas=[];
let modo=0;
addCamara.addEventListener("click",()=>{
    if (numCamara.value !=="") {
        if (cambioModo()) {
            camarasDesinstaladas.push(Number(numCamara.value))
        }else{
            numCamaraArray.push(Number(numCamara.value))
        }    
    }else{
        alert("Ingrese un numero de camara ");

    }

})
function cambioModo(a) {
    if (checkModo.checked) {
       
       modoTexto.innerHTML="CAMARAS DESINSTALADAS"
        return true;

    }else{
        modoTexto.innerHTML="CAMARAS SIN FUNCIONAR"
        return false;
    }
}
