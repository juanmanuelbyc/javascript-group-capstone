import commentsCounter from './commentsCounter.js';

const populateComments = (imdbId, ArrayObj) => {
  const container = document.querySelector('.comments-container');
  if (ArrayObj) {
    ArrayObj.forEach((item) => {
      const div = document.createElement('div');
      div.className = imdbId;
      div.innerText = `${item.creation_date} \b ${item.username}: ${item.comment}`;
      container.appendChild(div);
    });
  }
  document.querySelector('.comments').innerText = `Comments (${commentsCounter(ArrayObj)})`;
};

export default populateComments;
