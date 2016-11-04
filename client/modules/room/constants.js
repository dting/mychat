import { rsaaActionTypes } from '../rsaa-helpers';

const rsaaTypes = rsaaActionTypes(['CREATE', 'GET'], 'room');

export default {
  ...rsaaTypes,
}
