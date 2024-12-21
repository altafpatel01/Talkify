const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }],
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message',
        default: []
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
},{timestamps:true});

const Conversation = mongoose.model('Conversation', conversationSchema);

module.exports = Conversation;