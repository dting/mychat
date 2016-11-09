import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import {
  auth,
  editor,
  message,
  room,
  roomList,
  token,
  user,
} from '../modules';

export default combineReducers({
  auth,
  editor,
  message,
  room,
  roomList,
  token,
  user,
  routing,
});
