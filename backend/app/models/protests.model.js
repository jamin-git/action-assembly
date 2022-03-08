const mongoose = require('mongoose');

const ProtestSchema = new mongoose.Schema({
    protestName: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    hashtag: {
        type: [],
        default:''
    },
    date: {
        type: String,
        default: ''
    },
    address: {
        type: String,
        default: ''
    }
})

module.exports = mongoose.model('Protest', ProtestSchema);