import { getShowsData } from './modules/APImethods.js';

const showsIds = ['tt5491994','tt0903747','tt0795176','tt0185906','tt7366338','tt0306414'];
const showsData = await getShowsData(showsIds);

showsData.forEach(show => {
 console.log(show.name);
});

