import joi from 'joi'
const articleschema = joi.object({
  Title: joi.string().min(10).required(),
  Subject: joi.string().min(50).required(),
  
})
export default articleschema;
