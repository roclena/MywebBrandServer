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
        return res.json({
            status: 201,
            message: "Admin Acount created"
        })
    }
    static async login(req, res) {
        const binput = req.body.email;
        const password = req.body.password;
        const user = await helperlogin.login(binput, password);
        return res.json({
            message: "Log in successfully",
            Token: user
        });
    }
}
