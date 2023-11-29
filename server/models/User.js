const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        required: true,
        type: String,
        unique: true,
        trim: true,
    },
    password: {
        required: true,
        type: String,
        minLength: 6,
    },
    username: {
        required: true,
        type: String,
        unique: true,
        trim: true,
    },
    avatar: {
        type: String,
        required: false,
        trim: true,
    }
});

module.exports = mongoose.model('user', userSchema);