import express from 'express';
import mongoose from 'mongoose';
import Joi, { date } from 'joi';
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
  
Title:{
    type:String,
    require:true

},
Subject:{
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