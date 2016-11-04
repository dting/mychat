const express = require('express');

const controller = require('./message.controller');

const messages = express.Router();

messages.post('/', controller.create);
messages.get('/', controller.index);

module.exports = messages;
