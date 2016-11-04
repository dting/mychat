import { rsaaActionTypes } from '../rsaa-helpers';

const rsaaTypes = rsaaActionTypes(['CREATE', 'GET'], 'messages');

export default {
  ...rsaaTypes,
}
