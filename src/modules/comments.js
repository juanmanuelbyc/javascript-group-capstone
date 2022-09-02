import getData from './getData.js';
import form from './form.js';

const comments = (obj) => {
  const child = document.querySelector('.popup-container');
  const h2 = document.createElement('h2');
  h2.className = 'comments';
  h2.innerText = 'Comments';
  child.appendChild(h2);
  const commentsContainer = document.createElement('div');
  commentsContainer.className = 'comments-container';
  child.appendChild(commentsContainer);

  getData(obj);
  form(obj);
};

export default comments;
