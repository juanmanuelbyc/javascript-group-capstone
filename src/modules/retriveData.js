import fetch from 'isomorphic-fetch';

const requestURL = 'https:us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dnotAWJTR3nbocRUoECT/comments?item_id=';

const retriveData = async (id) => {
  const response = await fetch(requestURL + id);
  const Obj = await response.json();
  return Obj;
};

export default retriveData;
