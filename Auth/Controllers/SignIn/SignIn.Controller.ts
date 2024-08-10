import { User } from "../../Models/User/User.Model";
import {createHash} from "node:crypto";
import {type Response,type Request} from "express";
import { sendMail } from "../../Service/Mail";


export class SignUpController{
    static async userSignUp(req:Request,res:Response){
        try {
            const {email,password} =  await req.body;
            if(!email && !password){
                return res.json({message:"Every Field is required"}).status(404)
            }
            const findUser = await User.findOne({email:email});
            if(findUser){
                return res.json({message:"User already exist"}).status(404)
            }

            const hashedPassword = createHash('sha256').update(password).digest('hex');

            const genrateOtp = Math.floor(1000 + Math.random() * 9000);

            const saveduser = await new User({
                email:email,
                password:hashedPassword,
                Otp:genrateOtp
            })


            if(saveduser){
                await sendMail(genrateOtp,email)
            }

            await saveduser.save()
            return res.json({message:"user created"}).status(200)

        } catch (error) {
            return res.json({message:error}).status(500)
            
        }
    }

}