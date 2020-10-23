import mongoose from 'mongoose';

const mongo = new mongoose.Schema;
const articleModel = new mongoose.Schema({

    Title: {
        type: String,
        require: true
    },
    Subject: {
        type: String,
        require: true
    },
    CreateDate: {
        type: Date,
        default: Date.now,
        require: true
    }
});
export default mongoose.model('Article', articleModel);
