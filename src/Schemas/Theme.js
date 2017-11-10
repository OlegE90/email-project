const mongoose = require('mongoose');
const {Schema} = mongoose;

const Theme = new Schema({
    title:  String,
    description:  String,
    link:  String,
});

module.exports = Theme;