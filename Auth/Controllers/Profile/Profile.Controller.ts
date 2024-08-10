import { Profile } from "../../Models/UserProfile/UserProfile.Model";
import {type Response, type Request } from "express"


export class UserProfile{
    static async  userProfileController(req:Request,res:Response){
        try {
            const {email,name,age,imageUrl,university,major,gender,language,country} = await req.body;
            if(![email && name && age && imageUrl && university && major && gender && language && country]){
                return res.json({message:"All field are required"}).status(404)
            }
            const savedUser = await new Profile({
                email,
                name,
                UserImage:imageUrl,
                university,
                major,
                gender,
                age,
                language,
                country
            })
            await savedUser.save();
            return res.json({message:"created the user profile"}).status(200)
        } catch (error) {
            return res.json({message:error}).status(500)
        }
    }
}