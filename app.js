let numCamara=document.getElementById("numCamara");
const addCamara=document.getElementById("addCamara")
const checkModo=document.getElementById("modo");
let numCamaraArray=[];
const camarasDesinstaladas=[];

addCamara.addEventListener("click",()=>{

    if (checkModo.Checked) {
        alert("check")
    }else{
        alert("no check")
    }


    if (numCamara.value !=="") {
        
    }else{
        alert("Ingrese un numero de camara ");

    }

})
