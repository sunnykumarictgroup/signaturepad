const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors= require('cors')

const multer = require('multer');
const path = require('path')

const UploadSign = require('./models/Uploadsignature')




// Connect to DB
const url = 'mongodb://localhost/TestDBex'

mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on('open',function(){
    console.log('Connected...')
})
app.use(cors());
app.use(express.json())


// Import Routes
const alienRouter = require('./routes/aliens')
const authRoute = require('./routes/auth')
const signPad = require('./routes/signaturepad')

// Route Middleware
app.use('/aliens',alienRouter)
app.use('/api/user', authRoute)
app.use('/api/user', signPad)

// STORAGE ENGINE

const storage = multer.diskStorage({
    destination: './upload/sign',
    filename: (req, file, cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
   storage: storage
})

app.use('/sign', express.static('upload/sign'))
app.post('/upload', upload.single('sign'), (req, res) =>{
    const spadu = new UploadSign({
        signdata: 'http://localhost:9000/sign/' +req.file.filename
        
    })
    //console.log(typeof(req.file.filename,'=============================='))

    try{
        //console.log(spadu)
        const s1 = spadu.save()
        res.status(200).json({spadu})
    }catch(err){
        res.status(400).send('Error' + err)
    }
   
})

app.listen(9000, function(){
    console.log('Server Started')
})