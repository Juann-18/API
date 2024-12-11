const URL_API = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';

function obtenerDatosPokemon(url) {
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {
            mostrarPokemon(datos.results);
            configurarPaginacion(datos);
        })
        .catch(error => console.error('Error al obtener datos:', error));
}

function mostrarPokemon(listaPokemon) {
    const albumDatos = document.getElementById('albumDatos');
    albumDatos.innerHTML = '';
    listaPokemon.forEach(pokemon => {
        const tarjetaPokemon = document.createElement('div');
        tarjetaPokemon.classList.add('col');
        tarjetaPokemon.innerHTML = `
            <div class="card h-100">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[pokemon.url.split('/').length - 2]}.png" class="card-img-top" alt="${pokemon.name}">
                <div class="card-body">
                    <h5 class="card-title">${pokemon.name}</h5>
                </div>
            </div>
        `;
        albumDatos.appendChild(tarjetaPokemon);
    });
}

function configurarPaginacion(datos) {
    const paginacion = document.getElementById('paginacion');
    paginacion.innerHTML = '';

    if (datos.previous) {
        const botonAnterior = document.createElement('li');
        botonAnterior.classList.add('page-item');
        botonAnterior.innerHTML = `<a class="page-link" href="#" onclick="obtenerDatosPokemon('${datos.previous}')">Anterior</a>`;
        paginacion.appendChild(botonAnterior);
    }

    if (datos.next) {
        const botonSiguiente = document.createElement('li');
        botonSiguiente.classList.add('page-item');
        botonSiguiente.innerHTML = `<a class="page-link" href="#" onclick="obtenerDatosPokemon('${datos.next}')">Siguiente</a>`;
        paginacion.appendChild(botonSiguiente);
    }
}

obtenerDatosPokemon(URL_API);
