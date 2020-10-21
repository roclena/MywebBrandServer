import express from 'express';
import mongoose from 'mongoose';
import Joi from 'joi';
const mongo=new mongoose.Schema;

const articleModel=new mongoose.Schema({
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
    require:true
}
    

});
export default mongoose.model('Article', articleModel);