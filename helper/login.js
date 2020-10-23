import User from '../services/userservices';
import pass from './password';
export default class login {
    static async login(binput,password){       
        const user=await User.getemail(binput);
        if(user){      
           const hassp=user.password;     
            const boolPassword = pass.verifypassword(password,hassp);
            if(boolPassword==true){
                const tokenn=pass.jwtoken(user);
                return{user,tokenn};

              
            }else{
                return "wrong password";
            }
        
        }else{
            return 'invalide email';
        }
    }

    
}