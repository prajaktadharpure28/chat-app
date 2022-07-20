
const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
   user: String,
   messageType: String,
   messageBody: String,
   createdAt: {type: Date, default: Date.now}
});

const messageModel = mongoose.model('messages', messageSchema);

module.exports = messageModel;