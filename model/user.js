
import mongoose from 'mongoose';
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
Role:{
    type:String,
    require:true,
    default:'user'
    
},
password:{
    type:String,
    require:true  
}
});
export default mongoose.model('User', userModel);