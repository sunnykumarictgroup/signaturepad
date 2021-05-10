const mongoose = require('mongoose')

const  uploadsignSchema = new mongoose.Schema({
    signdata: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('UploadSignature',uploadsignSchema)