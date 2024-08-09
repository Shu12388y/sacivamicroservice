import { User } from "../../Models/User/User.Model";
import { type Response, type Request } from "express";

export class VerifyUser{
    static async verifyOtp(req:Request,res:Response){
        try {
            const params =  await req.params;
            const {otp} = await req.body;
            const findUser = await User.find({email:params.user});
            if(!findUser){
                return res.json({message:"User not Found"}).status(404)
            }
            if(findUser[0].Otp != otp){
                return res.json({message:"Wrong OTP"}).status(404)
            }
            await User.findOneAndUpdate({email:params.user},{verify:true})
            return res.json({message:"User verify"}).status(200)

        } catch (error) {
            return res.json({message:error}).status(500)
        }

    }
}