import mongoose from "mongoose";

 const studentsSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        require:true
    }
},{timestamps:true})
 export const studentModal = new mongoose.model("studentTable",studentsSchema)
 