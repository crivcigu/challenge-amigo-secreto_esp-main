// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];


function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function agregarAmigo (){
    let inputAmigo = document.getElementById('amigo').value;
    if (inputAmigo == ''){
        alert('Debes ingresar un nombre');
    }else{
        amigos.push(inputAmigo);
        let listaAmigos = document.getElementById('listaAmigos');
        let nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = inputAmigo;
        listaAmigos.appendChild(nuevoElemento);
    }
    limpiar();
    console.log(amigos);
    asignarTextoElemento('p', inputAmigo);
    return;

}

function limpiar(){
    document.querySelector('#amigo').value = '';

}

agregarAmigo();