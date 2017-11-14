import mongoose from 'mongoose';

const {Schema} = mongoose;

const UserTheme = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'User'},
    theme_id: {type: Schema.Types.ObjectId, ref: 'Theme'}
});

export default mongoose.model('UserTheme', UserTheme);