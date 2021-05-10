const express = require('express')
const router = express.Router()
const dotenv = require('dotenv')
const User = require('../models/User')
const { registerValidation,loginValidation } = require('../validation')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


router.post('/register', async (req, res) => {

// Validate before saving User
//const validation = Joi.ValidationError(req.body);
const {error} = registerValidation(req.body)
//console.log(error)
 if(error) return res.status(422).json({
 'status': 'error',
 'message': error.details[0].message
 })

 // Check Email Exist
 const emailExist = await User.findOne({email: req.body.email});
 if(emailExist) return res.status(400).send('Email already exists'); 

 // HASH Password
const salt =await bcrypt.genSalt(10)
const hashPassword = await bcrypt.hash(req.body.password, salt)

 // Create User

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    })
    try{
        const savedUser = await user.save()
        res.status(200).json({user: user._id})
    }catch(err){
        res.status(400).send('Error' + err)
    }
})
//LOGIN
router.post('/login', async (req,res) => {

    //Login VAlidation
    const {error} = loginValidation(req.body)
    if(error) return res.status(422).json({
        'status': 'error',
        'message': error.details[0].message
        })

// Check Email Exist
 const userExist = await User.findOne({email: req.body.email});
 if(!userExist) return res.status(400).send('Email or Password is not Valid'); 
 // Password is Correct
 const validPass = await bcrypt.compare(req.body.password, userExist.password);
 if(!validPass) return res.status(400).send('Invalid Password')
// Create Token
const token = jwt.sign({_id:userExist._id}, process.env.TOKEN_SECRET);
res.header('auth-token', token).send(token);


// res.send('Logged In..')
})

module.exports = router