import comments from './comments.js';

const baseUrl = 'https://api.tvmaze.com/lookup/shows?imdb=';

const popup = (Obj) => {
  const container = document.createElement('div');
  container.className = 'popup-container';

  const closeIcon = document.createElement('div');
  closeIcon.className = 'x-text';
  closeIcon.innerText = 'X';
  closeIcon.addEventListener('click', () => {
    container.remove();
  });
  container.appendChild(closeIcon);

  const fig = document.createElement('FIGURE');
  fig.className = 'show-image';
  container.appendChild(fig);

  const img = document.createElement('img');
  img.setAttribute('src', Obj.image.medium);
  img.setAttribute('width', 'auto');
  img.setAttribute('height', 'auto');

  fig.appendChild(img);

  const showname = document.createElement('div');
  showname.className = 'show-name';
  showname.innerText = Obj.name;
  container.appendChild(showname);

  document.body.appendChild(container);

  comments(Obj);
};

const retriveData = async (imdbId) => {
  const response = await fetch(baseUrl + imdbId);
  const Obj = await response.json();
  popup(Obj);
};

const detailsButton = () => {
  const btns = document.querySelectorAll('[id^=tt]');
  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      retriveData(btn.id);
    });
  });
};

export default detailsButton;
