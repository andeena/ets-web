// const element = document.getElementById("title");
// const plot = document.getElementById("plot");

// document.getElementById("title").innerHTML = element.innerHTML;
// document.getElementById("plot").innerHTML = element.innerHTML;
function addMovie() {
    const apiUrl = `https://it-its.id/api/movies?query=${searchTerm}`;

    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'it-its.id/api/movies',
        }
    })
    .then(response => response.json())
    .then(data => {
        const movieList = document.getElementById('movie-list');

        data.titles.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('col-md-6', 'mb-4');

            const movieTitle = document.createElement('h4');
            movieTitle.textContent = movie.title;
            movieCard.appendChild(movieTitle);

            const moviePlot = document.createElement('p');
            moviePlot.textContent = movie.plot;
            movieCard.appendChild(moviePlot);

            movieList.appendChild(movieCard);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
}

