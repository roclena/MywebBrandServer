import User from '../services/userservices';
import pass from './password';
import jtoken from './Authorization';
export default class login {
    static async login(binput,password){       
        const user=await User.getemail(binput);
        if(user){      
           const hassp=user.password;     
            const boolPassword = pass.verifypassword(password,hassp);
            if(boolPassword==true){
                const Token=jtoken.jwtoken(user);
                return Token;

              
            }else{
                return "wrong password";
            }
        
        }else{
            return 'invalide email';
        }
    }

    
}