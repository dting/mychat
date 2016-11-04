const u = require('../../../util');
const Message = require('./message.model');

const controller = {};

controller.create = function create(req, res) {
  const room = req.room._id;
  const createdBy = req.user._id;
  const { contents } = req.body;
  return Message.create({ contents, createdBy, room })
    .then(u.respondWithResult(res))
    .catch(u.validationError(res));
};

controller.index = function index(req, res) {
  const room = req.room._id;
  return Message.find({ room })
    .populate('createdBy')
    .then(u.handleEntityNotFound(res))
    .then(u.respondWithResult(res))
    .catch(u.handleError(res));
};

module.exports = controller;
