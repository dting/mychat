const { decorateRequest, handleEntityNotFound, handleError } = require('../../util');
const Room = require('./room.model');

const auth = {};

auth.populateReqRoom = function populateReqRoom(req, res, next) {
  const { roomName } = req.params;
  Room.findOne({ roomName })
    .then(handleEntityNotFound(res))
    .then(decorateRequest(req, 'room', next))
    .catch(handleError(res));
};

/**
 * Authorization checks for private rooms should go here
 */
module.exports = auth;
