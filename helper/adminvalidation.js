import joi from 'joi'
const Schema = joi.object({
  firstName: joi.string().min(3).required(),
  lastName: joi.string().min(3).required(),
  email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org', 'fr'] } }).required(),
  Role: joi.string().min(3).required(),
  password: joi.string().min(6).required(),
  
})
export default Schema;