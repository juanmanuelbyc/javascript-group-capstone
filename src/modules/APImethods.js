const baseUrl = 'https://api.tvmaze.com/lookup/shows?imdb=';

const getShowsData = async (showsIds) => {
  const showsData = [];
  for (let i = 0; i < (showsIds.length); i += 1) {
    // eslint-disable-next-line max-len, no-await-in-loop
    await fetch(baseUrl + showsIds[i]).then((data) => data.json()).then((data) => showsData.push(data));
  }
  return showsData;
};

export default getShowsData;
