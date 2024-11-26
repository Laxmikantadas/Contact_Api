const mongoose=require('mongoose')

const constact_Schame=new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        trim:true
     },
     lname:{
        type:String,
        required:true,
        trim:true
     },
     nmbr:{
        type:Number,
        required:true,
        trim:true
     },
     loc:{
        type:String,
        required:true,
        enum:['mobile','sim','email']
        
     }
},{timestamps:true})

const constact_Model=mongoose.model('contact',constact_Schame)
module.exports=constact_Model