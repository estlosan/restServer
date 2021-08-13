const { Schema, model } = require('mongoose');

const Role = new Schema({
    role: {
        type: String,
        required: [true, 'Not role provided'],
    }
});

module.exports = model('role', role);