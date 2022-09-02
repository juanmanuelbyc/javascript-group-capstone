const involvementBaseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dnotAWJTR3nbocRUoECT/';

const website = 'http://api.tvmaze.com/shows';

export const getShowsData = async () => {
  let movies = [];
  await fetch(website)
    .then((response) => response.json())
    .then((data) => { movies = [...data]; });
  return movies;
};

export const postLike = async (id) => {
  const body = { item_id: id };
  const url = `${involvementBaseUrl}likes`;
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export const getlikes = async () => {
  const url = `${involvementBaseUrl}likes`;
  const likes = await fetch(url).then((likes) => likes.json());
  return likes;
};
