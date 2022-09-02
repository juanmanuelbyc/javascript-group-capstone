// const commentsCount = async (obj) => {
//   const requestURL = 'https:us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dnotAWJTR3nbocRUoECT/comments?item_id=';
//   const response = await fetch(requestURL + obj.externals.imdb);
//   const Obj = await response.json();
//   const text = document.querySelector('.comments');
//   text.innerText = ` Comments (${Object.keys(Obj).length})`;
//   return Obj;
// };

const commentsCount = async (imdbId) => {
  const requestURL = 'https:us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dnotAWJTR3nbocRUoECT/comments?item_id=';
  const response = await fetch(requestURL + imdbId);
  const Obj = await response.json();
  return Object.keys(Obj).length;
};

export default commentsCount;