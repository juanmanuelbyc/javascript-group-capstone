import './index.html';
import './style.css';
import { getShowsData } from './modules/APImethods.js';
import {
  getButtonsList, getLikesCounters, populateLikes, renderShows, setClickListeners,
} from './modules/UImethods.js';
import commentsButton from './modules/commentsButton.js';

const showsData = await getShowsData();

renderShows(showsData);
setClickListeners(getButtonsList());
populateLikes(getLikesCounters());

commentsButton();
