import { postLike } from "./APImethods";

export const renderShows = (showsData) => {
  document.querySelector('.showsContainer').innerHTML = '';
  showsData.forEach((show) => {
    document.querySelector('.showsContainer').innerHTML += `
    <div class="show-card">
    <h3>${show.name}</h3>
    <h4>${show.premiered.substring(0, 4)}</h4>
    <img src=${show.image.medium}  width="290" height="290"/>
    <p>${show.summary.substring(0, 300)}</p>
    <button class="button" type="button" id=${show.externals.imdb}>Like!</button>
    <button class="button" type="button" id="commentsButton">Details</button>
    </div>`;
  });
};

export const getButtonsList = () => {
  return document.querySelectorAll('.button');
};

export const setClickListeners = (buttonsList) => {
  buttonsList.forEach(button => {
    button.addEventListener('click', (e) => {buttonClicked(e.target.id)});
  })
};

const buttonClicked = (targetId) => {
  console.log(targetId+' clicked!');
  postLike(targetId);
}



export default renderShows;
