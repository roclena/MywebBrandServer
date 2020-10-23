import validee from '../helper/uservalidation';
import User from '../services/userservices';

const  validateSignup = (req, res, next) => {
    const {firstName,lastName, password, email } = req.body;
    const validateIb = validee.validate({
      firstName,
      lastName,
      email,
      password
      
    });
 
    if (validateIb.error) {
      return res.json({
          status:400,
          message:validateIb.error.details[0].message
        });
    } 
  
    next();
  
  };
  export default validateSignup;
  