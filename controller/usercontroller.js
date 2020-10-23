
import User from '../services/userservices';
import helper from '../helper/password';
import helperlogin from '../helper/login';
export default class UserController {
    static async signup(req, res) {
      const inputFormData = req.body;
      const textPassword = inputFormData.password;
      inputFormData.password = helper.enclippass(textPassword);
      const user = await User.createUser(inputFormData);
     return res.json({
         status:201,
         message:"Acount created",
         data:user
     })
    }
    static async login(req,res){
        const binput=req.body.email;
        const password=req.body.password;        
        const user=await helperlogin.login(binput,password);
        return res.json({user});

    }
}