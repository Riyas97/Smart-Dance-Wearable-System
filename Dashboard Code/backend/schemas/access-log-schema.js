const mongoose = require('mongoose');

const accessLogSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: false, trim: true },
    role: { type: String, required: true, unique: false, trim: true },
    timestamp: { type: String, required: true, unique: false, trim: true, default: Date.now()},
    createdAt: { type: Date, default: Date.now() },
    accessToken: { type: String, required: true, unique: true, trim: true  },
})

const AccessLogModel = mongoose.model('access_log', accessLogSchema);

module.exports = AccessLogModel;

