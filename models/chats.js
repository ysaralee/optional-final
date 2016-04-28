var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var ChatSchema = new Schema({
    text: String,
    insertOrder: Number
});

module.exports = mongoose.model('Chats', ChatSchema);
