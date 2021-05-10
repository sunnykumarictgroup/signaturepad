const express = require('express')
const router = express.Router()
const dotenv = require('dotenv')
const Sign = require('../models/Signaturepad')

router.post('/insertSignature', async(req,res) => {
    const spad = new Sign({
        signdata: req.body.signdata
    })
    try{
        const s1 = await spad.save()
        res.status(200).json({message: 'success'})
    }catch(err){
        res.status(400).send('Error' + err)
    }


    // try{
    //     const s1 = await spsd.save()
    //     res.json(s1)
    // }catch(err){
    //     res.send('Error' + err)
    // }
})

router.get('/getAllSign',async(req,res) => {
    try{
        const signs = await Sign.find()
        res.json(signs)
    }catch(err){
        res.send('Error' + err)
    }
})

module.exports = router