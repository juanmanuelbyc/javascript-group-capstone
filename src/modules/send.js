const requestURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dnotAWJTR3nbocRUoECT/comments/';

const send = async (obj) => {
  await fetch(requestURL, {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export default send;
