import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    Username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    Otp:{
        type:String,
        required:true
    },
    verify:{
        type:Boolean,
        default:false
    }
});


export const User = mongoose.models.User || mongoose.model('User',UserSchema);