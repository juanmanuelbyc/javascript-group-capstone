const commentsCount = async (imdbId) => {
  const requestURL = 'https:us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dnotAWJTR3nbocRUoECT/comments?item_id=';
  const response = await fetch(requestURL + imdbId);
  const Obj = await response.json();
  return Object.keys(Obj).length;
};

export default commentsCount;