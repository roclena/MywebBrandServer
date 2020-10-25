import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
export default class jverifytoken {
  static verijwt(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
      const bearer = bearerHeader.split(' ');
      const bearertoken = bearer[1];
      try {
        jwt.verify(bearertoken, process.env.tokenkey, (err, ttko) => {
          if (err) {
            res.json("Invalid token")
          } else {
            req.userData = ttko;
            next();
          }
        })
      } catch (err) {
        res.json("Invalid token")
      }

    } else {
      return res.json({
        status: 403,
        message: "Not Allowed Log in first"
      });



    }
  }
}

