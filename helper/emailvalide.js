import joi from 'joi'
const Schema = joi.object({ 
  email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org', 'fr'] } }).required(), 
})
export default Schema;