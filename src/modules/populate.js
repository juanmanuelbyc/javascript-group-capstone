import populateComments from './populateComments.js';

const populate = async (id) => {
  const requestURL = 'https:us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dnotAWJTR3nbocRUoECT/comments?item_id=';
  const response = await fetch(requestURL + id.externals.imdb);
  const Obj = await response.json();
  populateComments(Obj);
};

export default populate;
