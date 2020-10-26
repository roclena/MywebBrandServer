import mongoose from 'mongoose';
const mongo=new mongoose.Schema;

const queryModel=new mongoose.Schema({
    senderFirstName:{
        type:String,
        require:true
    },
    senderLastName:{
        type:String,
        require:true
    },
    senderEmail:{
        type:String,
        require:true
    },  
Subject:{
    type:String,
    require:true
},
Mail:{
    type:String,
    require:true    
},
CreateDate:{
    type:Date,
    default: Date.now,
    require:true
}
});
export default mongoose.model('query', queryModel);
