import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
export default class jwtokenf {
    static jwtoken(generate) {
        const token = jwt.sign({ generate }, process.env.tokenkey, { expiresIn: '24h' });
        return token;
    }
    static verifytoken(req,res,next){
        const bearerHeader=req.headers['authorization'];
        if(typeof bearerHeader!=='undefined'){
            const bearer=bearerHeader.split(' ');
            const bearertoken=bearer[1];
           return bearertoken;

            
        }else{
            return res.sendStatus(403);
        }
    }
}