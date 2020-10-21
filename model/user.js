import express from 'express';
import mongoose from 'mongoose';
import Joi from 'joi';
const mongo=new mongoose.Schema;

const userModel=new mongoose.Schema({
firstName:{
    type:String,
    require:true

},
lastName:{
    type:String,
    require:true
    
},
email:{
    type:String,
    require:true
    
},
password:{
    type:String,
    require:true
  
}
});
export default mongoose.model('User', userModel);