import mongoose from 'mongoose';

const {Schema} = mongoose;

const Messages = new Schema({
    message: String,
    user_id: {type: Schema.Types.ObjectId, ref: 'User'},
    theme_id: {type: Schema.Types.ObjectId, ref: 'Theme'},
    createdDate: Date,
});

Messages.pre('save', function (next) {
    if (!this.createdDate) this.createdDate = new Date;
    next();
});

export default mongoose.model('Messages', Messages);