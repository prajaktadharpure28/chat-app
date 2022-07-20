const express = require('express');
const mongoose = require('mongoose');
const messageModel = require('./models/message');

const PORT = 5000;

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://prajudharpure:prajakta@cluster0.vzgzz.mongodb.net/?retryWrites=true&w=majority',()=>{
    console.log('connected to mongodb')
})

app.get('/health',(req, res) => {
    res.json({
        success: true,
    });
})

app.post('/message', async(req,res)=>{
    /* const user = req.body.user;
     const messageType = req.body.messageType;
     const messageBody = req.body.messageBody;*/
   
     const {user, messageType, messageBody} = req.body;
   
     const newMessage = new messageModel({
       user: user,
       messageType: messageType,
       messageBody: messageBody,
     })
   
     const savedMessage = await newMessage.save();
   
     res.json(savedMessage);
   })
   
   app.get('/message', async(req,res)=>{
     const messages = await messageModel.find();
     res.json(messages);
   })

app.listen(PORT, () =>{
    console.log('Server is running on PORT 5000');
})