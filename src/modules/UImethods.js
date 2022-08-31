import { getlikes, postLike } from "./APImethods";

export const renderShows = (showsData) => {
  document.querySelector('.showsContainer').innerHTML = '';
  showsData.forEach((show) => {
    document.querySelector('.showsContainer').innerHTML += `
    <div class="show-card">
    <h3>${show.name}</h3>
    <h4>${show.premiered.substring(0, 4)}</h4>
    <img src=${show.image.medium}  width="290" height="290"/>
    <p>${show.summary.substring(0, 300)}</p>
    <div class="likesLine">
      <h4>Likes: </h4>
      <h4 class="likesCount" id=${show.externals.imdb}></h4>
    </div>
    <button clicked="false" class="button likeButton" type="button" id=${show.externals.imdb}>Like!</button>
    <button class="button" type="button" id="commentsButton">Details</button>
    </div>`;
  });
};

export const getButtonsList = () => {
  return document.querySelectorAll('.button');
};

export const getLikesCounters = () => {
  return document.querySelectorAll('.likesCount');
};

export const setClickListeners = (buttonsList) => {
  buttonsList.forEach(button => {
    button.addEventListener('click', (e) => {buttonClicked(e.target)});
  })
};

const buttonClicked = async (target) => {
  if (target.classList.contains('likeButton')){
  await postLike(target.id);
  await populateLikes(getLikesCounters());
  }
}

export const populateLikes = async (likesCounters) => {
  const likes = await getlikes();
  likes.forEach(element => {
    likesCounters.forEach(likeCount => {
      if (likeCount.id == element.item_id) likeCount.innerHTML = element.likes;
    });
  });
}

