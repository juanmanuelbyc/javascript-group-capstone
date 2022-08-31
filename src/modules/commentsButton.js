// import getShowsData from './APImethods.js';

const popup = () => {
  const container = document.createElement('div');
  container.className = 'popup-container';

  const closeIcon = document.createElement('div');
  closeIcon.className = 'x-text';
  closeIcon.innerText = 'X';
  closeIcon.addEventListener('click', () => {
    container.remove();
  });
  container.appendChild(closeIcon);

  return container;
};

const commentsButton = () => {
  const btns = document.querySelectorAll('#commentsButton');
  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      document.body.appendChild(popup());
    });
  });
};

export default commentsButton;
