const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    name: String,
    username: String,
    password: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('students', StudentSchema);