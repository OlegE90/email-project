import mongoose from 'mongoose';

const {Schema} = mongoose;

const Theme = new Schema({
    title: String,
    description: String,
    link: String,
});

export default mongoose.model('Theme', Theme);