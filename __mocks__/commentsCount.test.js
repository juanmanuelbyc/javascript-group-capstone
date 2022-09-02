/**
* @jest-environment jsdom
*/

import send from '../src/modules/send.js';
import commentsCount from '../src/modules/commentsCount.js';
import retriveData from '../src/modules/retriveData.js';

const imdbId = 'tt0903747';

let count = 0;

commentsCount(retriveData(imdbId)).then((data) => {
  count += data;
}).then(

  describe('comments count', () => {
    test('add comment', () => {
      const newObjectToAdd = {
        item_id: imdbId,
        username: 'name',
        comment: 'insights',
      };
      send(newObjectToAdd);
      return commentsCount(retriveData(imdbId)).then((data) => {
        expect(data).toEqual(count + 1);
      });
    });
  }),
);
