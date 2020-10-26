import joi from 'joi'
const queryschema = joi.object({
  Subject: joi.string().min(5).required(),
  Mail: joi.string().min(10).required(),
  
})
export default queryschema;