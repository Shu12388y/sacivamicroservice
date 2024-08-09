import mongoose from "mongoose";


export async function ConnectDatabase(){
    try {
        
        const connection = await mongoose.connect(process.env.DATABASE as string);
        if(connection){
            console.log("database connected")
        }

    } catch (error) {
        console.log(error)
    }
}