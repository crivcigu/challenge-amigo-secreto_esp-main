// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];


function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function agregarAmigo (){
    let inputAmigo = document.getElementById('amigo').value;
    if (inputAmigo == '' || inputAmigo != 'string'){
        alert('Debes ingresar un nombre válido');
    }else{
        amigos.push(inputAmigo);
        actualizarListaAmigos();
    }
    limpiar();
    console.log(amigos);
    return;

}

function sortearAmigo(){
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById('resultado');
    document.createElement('li');
    if (amigoSorteado == undefined){
        resultado.innerHTML = '';
    }else{
        resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
    }
    return;
}

function limpiar(){
    document.querySelector('#amigo').value = '';
    return;

}

function actualizarListaAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (amigo of amigos){
        let nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = amigo;
        listaAmigos.appendChild(nuevoElemento);

    }
}

agregarAmigo();
sortearAmigo();