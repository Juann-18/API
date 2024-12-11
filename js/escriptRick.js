const API_ALBUM = "https://rickandmortyapi.com/api/character";

function getAlbum(api) {
    fetch(api).then((response) => response.json())
    .then((json) => {
        fillData(json.results);
        paginatio(json.info);  // Asegúrate de tener definida esta función
    })
    .catch((error) => {
        console.log(error, "Error consumiendo la API");
    });
}

function fillData(characters) {
    let cards = "";
    for (let i = 0; i < 20; i++) {
        cards += `
        <div class="col">
            <div class="card h-100" style="width: 12rem;">
                <img src="${characters[i].image}" class="card-img-top" alt="img-personaje">
                <h2 class="card-title">${characters[i].name}</h2>
                <div class="card-body">
                    <h5 class="card-title">Status: ${characters[i].status}</h5>
                    <h5 class="card-title">Species: ${characters[i].species}</h5>
                </div>
            </div>
        </div>
        `;
    }
    document.getElementById("dataAlbum").innerHTML = cards;
}

// Llama a la función getAlbum para cargar los datos iniciales
getAlbum(API_ALBUM);

getAlbum(API_ALBUM);
