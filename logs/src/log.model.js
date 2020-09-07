const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    entity: {
        type: String,
        required: [true, 'Please insert an entity']
    },
    type: {
        type: String,
        required: [true, 'Please insert a type']
    },
    route: {
        type: String,
        required: [true, 'Please insert a route']
    }
}, {timestamps: true});

const Log = mongoose.model('Log', logSchema);
module.exports = Log;