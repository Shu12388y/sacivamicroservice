import {type Response, type Request} from "express";


export class RoomMateController{

    // create Roomate Profile
    static async createProfile(req:Request,res:Response){
        try {
            const token = await req.cookies;
            console.log(token);
            return res.json({message:"token"}).status(200)

        } catch (error) {
            return res.json({message:error}).status(500)
            
        }

    }

    // get all profiles
    static async getProfiles(req:Request,res:Response){

    }

    // get single profile
    static async getProfile(req:Request,res:Response){

    }
}