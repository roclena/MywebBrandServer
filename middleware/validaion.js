import validee from '../helper/uservalidation';
import articlevalid from '../helper/articlevalidation'

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
}
