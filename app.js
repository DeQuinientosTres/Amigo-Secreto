// Arreglo que almacena los nombres de los amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const nombre = document.getElementById('nombreAmigo').value.trim();
    
    // Validar si el nombre ingresado está vacío
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return; // Detener la ejecución si el nombre está vacío
    }

    // Añadir el nombre al arreglo de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    document.getElementById('nombreAmigo').value = '';

    // Actualizar la lista de amigos en pantalla
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en el HTML
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar la lista existente

    // Iterar sobre el arreglo de amigos y agregar cada nombre a la lista
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para realizar el sorteo de amigo secreto
function sortearAmigo() {
    // Validar que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert('No hay amigos para sortear.');
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el nombre sorteado en pantalla
    document.getElementById('resultado').innerHTML = 'El amigo secreto es: ' + amigoSorteado;
}
