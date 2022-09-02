import './index.html';
import './style.css';
import { getShowsData } from './modules/APImethods.js';
import {
  renderShows, getButtonsList, setClickListeners, populateLikes, getLikesCounters,
} from './modules/UImethods.js';
import commentsButton from './modules/commentsButton.js';

const showsIds = ['tt5491994', 'tt0903747', 'tt0795176', 'tt0185906', 'tt7366338', 'tt0306414'];
const showsData = await getShowsData(showsIds);

renderShows(showsData);
setClickListeners(getButtonsList());
populateLikes(getLikesCounters());

commentsButton();
