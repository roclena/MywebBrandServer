import User from '../services/userservices';
import helper from '../helper/password';
import helperlogin from '../helper/login';
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
}
