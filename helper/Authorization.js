import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
export default class jwtokenf {
    static jwtoken(generate) {
        const token = jwt.sign({ generate }, process.env.tokenkey, { expiresIn: '24h' });
        return token;
    }
}