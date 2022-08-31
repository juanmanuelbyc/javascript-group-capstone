const tvmazeApiBaseUrl = 'https://api.tvmaze.com/lookup/shows?imdb=';
const involvementBaseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

// export const getShowsData = async (showsIds) => {
//   let showsData = [];
//   for (let i=0;i<(showsIds.length);i++) {
//     await fetch(tvmazeApiBaseUrl+showsIds[i]).then((data) => data.json()).then((data) => showsData.push(data));
//   }
//   return showsData;
// }









const post = async (data) => {
  const url = involvementBaseUrl + 'apps/';
  let response = await fetch(url, {
    method: 'POST',
  });
  console.log(response);
};



const postlike = async (data) => {
  const xxx = {
    item_id: 'item1',
  };
  const body = JSON.stringify(xxx);
  const url = involvementBaseUrl + 'apps/iklagzru22zl/likes';
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(xxx),
  });
  console.log(response);
};







// post();

postlike();