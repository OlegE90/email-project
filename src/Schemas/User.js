import mongoose from 'mongoose';

const {Schema} = mongoose;

const User = new Schema({
    social_id:  String,
    network:  String,
    name:  String,
});

export default mongoose.model('User', User);