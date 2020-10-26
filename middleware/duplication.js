import User from '../services/userservices';

export default class signupcheck {
    static async duplisign(req,res,next){ 
       const  binput=req.body.email;      
        const user=await User.getemail(binput);
        if(user){ 
           return res.json("Acount already exist");
        }else{
            return next();
        }
    }
}