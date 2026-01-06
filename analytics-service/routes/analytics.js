const mongoose = require('mongoose');

const AnalyticsSchema = new mongoose.Schema({
    deviceId: String,
    temperature: Number,
    humidity: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Analytics', AnalyticsSchema);
