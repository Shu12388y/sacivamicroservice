import { User } from "../../Models/User/User.Model";
import {createHash} from "node:crypto";
import {type Response,type Request} from "express"


export class SignUpController{
    static async userSignUp(req:Request,res:Response){
        try {
            const {username,email,password} =  await req.body;
            if(!username && !email && !password){
                return res.json({message:"Every Field is required"}).status(404)
            }

            const findUser = await User.findOne({email:email});
            console.log(findUser)
            if(findUser){
                return res.json({message:"User already exist"}).status(404)
            }

            const hashedPassword = createHash('sha256').update(password).digest('hex');

            const genrateOtp = Math.floor(1000 + Math.random() * 9000);

            const saveduser = await new User({
                email:email,
                Username:username,
                password:hashedPassword,
                Otp:genrateOtp
            })

            await saveduser.save()
            console.log(saveduser)

            return res.json({message:"user created"}).status(200)

        } catch (error) {
            return res.json({message:error}).status(500)
            
        }
    }

}