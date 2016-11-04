const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  contents: { type: String, required: true },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Message', MessageSchema);
