import mongoose from "mongoose";

const UserProfileSchema =  new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    UserImage:{
        type:String,
        required:true
    },
    university:{
        type:String,
        required:true
    },
    major:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    }
});

export const Profile = mongoose.models.Profile || mongoose.model("Profile",UserProfileSchema);