const mongoose = require('mongoose');
const {Schema} = mongoose;

const User = new Schema({
    social_id:  String,
    network:  String,
});

module.exports = User;