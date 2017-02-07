import { combineReducers } from 'redux';
import WebsitesReducer from './reducer_websites';
import VideosReducer from './reducer_videos';
import ActiveWebsite from './reducer_active_website';

const rootReducer = combineReducers({
  websites: WebsitesReducer,
  videos: VideosReducer,
  activeWebsite: ActiveWebsite
});

export default rootReducer;
