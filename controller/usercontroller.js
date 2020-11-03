import User from '../services/userservices';
import helper from '../helper/password';
import helperlogin from '../helper/login';
import pass from '../helper/password';
export default class UserController {
    static async signup(req, res) {
        const inputFormData = req.body;
        const textPassword = inputFormData.password;
        inputFormData.password = helper.enclippass(textPassword);
        const user = await User.createUser(inputFormData);
        return res.status(201).json({
            status: 201,
            message: "Acount created"
        })
    }
    static async signupAdmin(req, res) {
        const inputFormData = req.body;
        const Role = "Admin";
        const textPassword = inputFormData.password;
        inputFormData.password = helper.enclippass(textPassword);
        inputFormData.Role = "Admin";
        const user = await User.createUser(inputFormData);
        if (user) {
            return res.status(201).json({
                status: 201,
                message: "Admin Acount created"
            })
        } else {
            return res.status(400).json({
                message: "Admin Acount not created"
            })
        }
    }
    static async login(req, res) {
        const binput = req.body.email;
        const password = req.body.password;
        const user = await helperlogin.login(binput, password);
        if (user) {

            return res.status(200).json(user);
        } else {
            return res.status(400).json(user);
        }
    }
    static async changepassword(req, res) {
        const user=await User.getemail(req.body.email);
       
        const password = req.body.password;
        const hassp = user.password;     
        const newpassword = helper.enclippass(req.body.newpassword);
        const boolPassword = pass.verifypassword(password, hassp);
        if (boolPassword == true) {            
            const aa = await User.changepass(newpassword);            
            return res.status(200).json("Password Updated successfull");
        } else {
            return res.status(400).json("Invalid  current password");
        }     
    }
    static async getusers(req,res){
        const users=await User.getuser();
        return res.status(200).json(users);
    }
    static async getdelete(req,res){
        const user=await User.getemail(req.body.email);
        if(user){
        const email=req.body.email;
        const as=await User.deleteuser(email)
            return res.status(200).json("Account deleted");
            }else{
                return res.status(400).json("Account not found");
            }
       
    }
}
