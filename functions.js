axios.get('https://api.tvmaze.com/shows/1/episodes')
  .then(response => {
    const episodes = response.data;
    const container = document.getElementById('episodes-container');
    console.log(response.data)

    episodes.forEach(episode => {
      const div = document.createElement('div');
      div.className = 'episode';

      div.innerHTML = `
        <h3>${episode.name}</h3>
        <p>Season: ${episode.season}, Episode: ${episode.number}</p>
        <img src="${episode.image.original}" alt="Episode image" />
      `;

      container.appendChild(div);
    });
  })
  .catch(error => console.error('Error:', error));
