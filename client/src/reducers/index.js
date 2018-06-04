import { combineReducers } from 'redux';

import auth from './auth_reducer';
import schedule from './schedule_reducer';

export default combineReducers({
    auth,
    schedule
});