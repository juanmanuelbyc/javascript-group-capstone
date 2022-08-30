const baseUrl = 'https://api.tvmaze.com/lookup/shows?imdb=';

export const getShowsData = async (showsIds) => {
  let showsData = [];
  for (let i=0;i<(showsIds.length);i++) {
   await fetch(baseUrl+showsIds[i]).then((data) => data.json()).then((data) => showsData.push(data));
  }
  return showsData;
}

