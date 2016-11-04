const express = require('express');

const { isAuthenticated } = require('../auth/auth.service');
const { populateReqRoom } = require('./room.auth');
const controller = require('./room.controller');
const messagesRouter = require('./message');

const rooms = express.Router();

rooms.use(isAuthenticated);

rooms.post('/', controller.create);

rooms.get('/', controller.index);
rooms.get('/:roomName', controller.get);

rooms.use('/:roomName/messages', populateReqRoom, messagesRouter);

module.exports = rooms;
