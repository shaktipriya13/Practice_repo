import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String
    },
    cartData:{
        type:Object,
        default:{}
    }
},{timestamps:true , minimize:false})

const User = mongoose.model("User",userSchema)
// minimize: false tells Mongoose not to remove empty objects from the document.
// By default (minimize: true), Mongoose removes empty objects when saving to the database.

export default User