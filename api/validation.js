// Validation
const Joi = require('@hapi/joi');


// Register Validation
const registerValidation = (data) => {
        const schema = Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().required().email(),
        password: Joi.string().min(6).max(1024).required()
        })
    
        return schema.validate(data);

}

// LOGIN Validation
const loginValidation = (data) => {
    const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().min(6).max(1024).required()
    })

    return schema.validate(data);

}
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
