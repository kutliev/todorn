import { combineReducers } from 'redux';
import account from './account';
import todos from './todos';

export default combineReducers({ account, todos });
