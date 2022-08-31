const tvmazeApiBaseUrl = 'https://api.tvmaze.com/lookup/shows?imdb=';
const involvementBaseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dnotAWJTR3nbocRUoECT/';

export const getShowsData = async (showsIds) => {
  let showsData = [];
  for (let i=0;i<(showsIds.length);i++) {
    await fetch(tvmazeApiBaseUrl+showsIds[i]).then((data) => data.json()).then((data) => showsData.push(data));
  }
  return showsData;
}

export const postLike = async (id) => {
  const body = {item_id: id,};
  const url = involvementBaseUrl + 'likes';
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
}

const getlikes = async () => {
  const url = involvementBaseUrl + 'likes';
  const likes = await fetch(url).then((likes) => likes.json());
  return likes;
}

