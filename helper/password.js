import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();
export default class pawwordenclip {
    static enclippass(textPassword) {
        const encpass = bcrypt.hashSync(textPassword, 10);
        return encpass;
    }
    static verifypassword(inputPassword, storedPassword) {
        const boolPassword = bcrypt.compareSync(inputPassword, storedPassword);
        return boolPassword;
    }
   
}