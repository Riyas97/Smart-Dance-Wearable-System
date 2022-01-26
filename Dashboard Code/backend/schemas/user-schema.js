const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: false, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    username: { type: String, required: true, unique: true, trim: true  },
    password: { type: String, required: true, unique: false, trim: true  },
    role: { type: String, enum: ['coach', 'trainee'] },
    createdAt: { type: Date, default: Date.now() },
    timestamp: { type: String, required: true, unique: false, trim: true, default: Date.now()},
})

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;

