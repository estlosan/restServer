const { model, Schema } = require('mongoose');

const User = new Schema({
    name: {
        type: String,
        required: [true, 'Not name provided'],
    },
    email: {
        type: String,
        required: [true, 'Not email provided'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Not password provided']
    },
    img: {
        type: String,
    },
    role: {
        type: String,
        required: true,
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    status: {
        type: Boolean,
        default: true,
    },
    google: {
        type: Boolean,
        default: false,
        
    }
})

module.exports = model('User', User);