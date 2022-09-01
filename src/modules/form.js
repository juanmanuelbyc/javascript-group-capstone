import send from './send.js';

const form = (obj) => {
  const form = document.createElement('form');
  form.setAttribute('id', obj.externals.imdb);

  const FN = document.createElement('input');
  FN.setAttribute('type', 'text');
  FN.setAttribute('name', 'Name');
  FN.setAttribute('placeholder', 'Your Name');

  form.appendChild(FN);

  const FS = document.createElement('input');
  FS.setAttribute('type', 'text');
  FS.setAttribute('name', 'Insights');
  FS.setAttribute('placeholder', 'Your Insights');

  form.appendChild(FS);

  const submit = document.createElement('button');
  submit.setAttribute('type', 'submit');
  submit.innerText = 'Submit';

  form.appendChild(submit);

  const child = document.querySelector('.popup-container');

  const addComment = document.createElement('div');
  addComment.className = 'add-comment';
  addComment.innerText = 'Add Comment';

  child.appendChild(addComment);

  child.appendChild(form);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const imdbId = e.submitter.parentElement.id;
    const name = form.elements.Name.value;
    const insights = form.elements.Insights.value;
    if (name !== '' && insights !== '') {
      const myObject = {
        item_id: imdbId,
        username: name,
        comment: insights,
      };
      send(myObject);
      form.elements.Name.value = '';
      form.elements.Insights.value = '';
    }
  });
};

export default form;
