import { combineReducers } from 'redux';
import WebsitesReducer from './reducer_websites';

const rootReducer = combineReducers({
  websites: WebsitesReducer
});

export default rootReducer;
