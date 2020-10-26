import User from '../services/userservices';
import article from '../services/articleservices';

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
    static async articleexist(req,res,next){ 
        console.log("test");
        const  {_id}=req.params;      
        const onearticle = article.getoneArticle({_id});
         if(onearticle){ 
            //return next();
            return res.json('onearticle');
         }else{
            return res.json("Article not found");
             
         }
     }
}