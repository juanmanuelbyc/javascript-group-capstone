export const renderShows = (showsData) => {
 
  document.querySelector('.showsContainer').innerHTML = '';
  showsData.forEach((show) => {
    document.querySelector('.showsContainer').innerHTML += `
    <div class="show-card">
    <h3>${show.name}</h3>
    <h4>${show.premiered}</h4>
    <p>${show.summary.substring(0, 300)}</p>
    </div>`;
  });

}

