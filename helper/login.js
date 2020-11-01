import User from '../services/userservices';
import pass from './password';
import jtoken from './Authorization';
export default class login {
    static async login(binput,password,res){       
        const user=await User.getemail(binput);
        if(user){      
           const hassp=user.password;     
            const boolPassword = pass.verifypassword(password,hassp);
            if(boolPassword==true){
                const Token=jtoken.jwtoken(user);
                return {           
                    message: "Login successfully",
                    Token: Token,
                    data:user
                }                
            }else{
                return "wrong password"
                
            }
        
        }else{
               return "wrong email";
             
        }
    }

    
}