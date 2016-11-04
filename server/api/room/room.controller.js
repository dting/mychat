const u = require('../../util');
const Room = require('./room.model');

const controller = {};

controller.index = function index(req, res) {
  return Room.find({}, 'roomName')
    .then(u.respondWithResult(res))
    .catch(u.handleError(res));
};

controller.get = function get(req, res) {
  const roomName = req.params.roomName;
  return Room.findOne({ roomName })
    .then(u.handleEntityNotFound(res))
    .then(u.respondWithResult(res))
    .catch(u.handleError(res));
};

controller.create = function create(req, res) {
  const roomName = req.body.roomName;
  const createdBy = req.user._id
  return Room.create({ roomName, createdBy })
    .then(u.respondWithResult(res))
    .catch(u.validationError(res, 422));
};

module.exports = controller;
