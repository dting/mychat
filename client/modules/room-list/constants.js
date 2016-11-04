import { rsaaActionTypes } from '../rsaa-helpers';

const rsaaTypes = rsaaActionTypes(['INDEX', 'UPDATE'], 'room-list');

export default {
  CLEAR: 'room-list/CLEAR',
  FORM_ON_CHANGE: 'auth/FORM_ON_CHANGE',
  ...rsaaTypes,
};
