import { combineReducers } from 'redux';
import WebsitesReducer from './reducer_websites';
import VideosReducer from './reducer_videos';

const rootReducer = combineReducers({
  websites: WebsitesReducer,
  videos: VideosReducer
});

export default rootReducer;
