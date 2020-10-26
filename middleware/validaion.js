import validee from '../helper/uservalidation';
import validadmin from '../helper/adminvalidation';
import articlevalid from '../helper/articlevalidation'
import queryvalid from '../helper/queryvalidation';


export default class validation {
  static validateSignup(req, res, next) {
    const { firstName, lastName, password, email } = req.body;
    const validateIb = validee.validate({
      firstName,
      lastName,
      email,
      password

    });  

    if (validateIb.error) {
      return res.json({
        status: 400,
        message: validateIb.error.details[0].message
      });
    }

    next();

  };
  static validateAdmin(req, res, next) {
    const { firstName, lastName, password, email,Role } = req.body;
    const validateIb = validadmin.validate({
      firstName,
      lastName,
      email,
      password,
      Role

    });  

    if (validateIb.error) {
      return res.json({
        status: 400,
        message: validateIb.error.details[0].message
      });
    }

    next();

  };
  static postArticleval(req, res, next) {
    const { Title,Subject } = req.body;
    const validateIb = articlevalid.validate({
      Title,
      Subject

    });

    if (validateIb.error) {
      return res.json({
        status: 400,
        message: validateIb.error.details[0].message
      });
    }
    next();
  };
  static validatequery(req, res, next) {
    const { Subject,Mail } = req.body;
    const validateIb = queryvalid.validate({
    Subject,
    Mail
    });

    if (validateIb.error) {
      return res.json({
        status: 400,
        message: validateIb.error.details[0].message
      });
    }

    next();

  };
}
