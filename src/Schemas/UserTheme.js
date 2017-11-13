const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserTheme = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'User'},
    theme_id: {type: Schema.Types.ObjectId, ref: 'Theme'}
});

module.exports = mongoose.model('UserTheme', UserTheme);