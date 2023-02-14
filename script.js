const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copiar = document.querySelector(".btn-copiar");
const actualizar = document.querySelector(".btn-actualizar");

function btnEncriptar(){
    if (textArea.value != ""){
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value = textoEncriptado
        textArea.value = ""
        mensaje.style.backgroundImage = "none"
    } 
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    let listaAcentos = ["á","é","í","ó","ú"]
    for(let i=0; i < listaAcentos.length; i++){
        if(stringEncriptado.includes(listaAcentos[i])){
            alert("Los acentos serán eliminados al momento de la encriptación")
        }
    }
    stringEncriptado = stringEncriptado.toLowerCase()
    stringEncriptado = stringEncriptado.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}

function btnDesencriptar(){
    if (textArea.value != "" ) {
        const textoEncriptado = desencriptar(textArea.value)
        mensaje.value = textoEncriptado
        textArea.value = ""
        mensaje.style.backgroundImage = "none"
    }
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado
}

function btnCopiar(){
    const textoEncriptado = mensaje.value
    textArea.value = textoEncriptado
    mensaje.value = ""
    mensaje.style.backgroundImage = "url(img/Muñeco.png), url(img/Texto.png)"
}

function btnActualizar(){
    textArea.value = ""
    mensaje.value = ""
    mensaje.style.backgroundImage = "url(img/Muñeco.png), url(img/Texto.png)"
}

function mostrar(){
    if(textArea.value != "" && mensaje.value == ""){
        copiar.style.display = "initial"
        actualizar.style.display = "initial"
    }
}

function ocultar(){
    copiar.style.display = "none"
    actualizar.style.display = "none"
}