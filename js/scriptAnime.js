const searchTerm = document.getElementById('animeSearch').value;
const API = `https://api.jikan.moe/v4/anime?q=${searchTerm}`;


function searchAnime() {
    fetch(API)
        .then(response => response.json())
        .then(data => {
            const resultadoDiv = document.getElementById('resultado');
            resultadoDiv.innerHTML = '';

            data.data.forEach(anime => {
                const resultDiv = document.createElement('div');
                resultDiv.innerHTML = `
                    <h2>${anime.title}</h2>
                    <p>Episodios: ${anime.episodes}</p>
                    <a href="${anime.url}">Ver más</a>
                `;
                resultadoDiv.appendChild(resultDiv);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}