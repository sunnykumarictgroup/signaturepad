const mongoose = require('mongoose')

const  signSchema = new mongoose.Schema({
    signdata: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Signature',signSchema)