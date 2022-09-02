const tvmazeApiBaseUrl = 'https://api.tvmaze.com/lookup/shows?imdb=';
const involvementBaseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dnotAWJTR3nbocRUoECT/';

/* eslint-disable no-await-in-loop */
export const getShowsData = async (showsIds) => {
  const showsData = [];
  for (let i = 0; i < (showsIds.length); i += 1) {
    const data = await fetch(tvmazeApiBaseUrl + showsIds[i]).then((data) => data.json());
    showsData.push(data);
  }
  return showsData;
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
