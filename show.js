axios.get('https://api.tvmaze.com/shows/1')
  .then(response => {
    const show = response.data;
    const container = document.getElementById('show-info');

    container.innerHTML = `
      <h2>${show.name}</h2>
      <img src="${show.image?.medium}" alt="${show.name}" class="show-image"/>
      <p><strong>Género:</strong> ${show.genres.join(', ')}</p>
      <p><strong>Resumen:</strong> ${show.summary}</p>
      <p><strong>Rating:</strong> ${show.rating.average}</p>
    `;
  })
  .catch(error => console.error('Error:', error));
