import { combineReducers } from 'redux';
import { accountReducer } from './accountReducers';

const rootReducer = combineReducers({
  accounts: accountReducer,
});

export default rootReducer;