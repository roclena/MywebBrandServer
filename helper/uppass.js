import joi from 'joi'
const Schema = joi.object({
    password: joi.string().min(6).required(),
    newpassword: joi.string().min(6).required()
})
export default Schema;
