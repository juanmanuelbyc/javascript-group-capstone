import populateComments from './populateComments.js';

const getData = async (obj) => {
  const imdbId = obj.externals.imdb;
  const requestURL = 'https:us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dnotAWJTR3nbocRUoECT/comments?item_id=';
  const response = await fetch(requestURL + imdbId);
  const Obj = await response.json();
  populateComments(imdbId, Obj);
};

export default getData;
