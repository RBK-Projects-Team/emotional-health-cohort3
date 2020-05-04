const mongoose = require('mongoose');

const SurveySchema = mongoose.Schema({
    name: String,
    emotion: Number,
}, {
    timestamps: true
});

module.exports = mongoose.model('surveys', SurveySchema);