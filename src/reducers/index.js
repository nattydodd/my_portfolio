import { combineReducers } from 'redux';
import WebsitesReducer from './reducer_websites';
import VideosReducer from './reducer_videos';
import ActiveWebsite from './reducer_active_website';
import ActiveVideo from './reducer_active_video';

const rootReducer = combineReducers({
  websites: WebsitesReducer,
  videos: VideosReducer,
  activeWebsite: ActiveWebsite,
  activeVideo: ActiveVideo
});

export default rootReducer;
