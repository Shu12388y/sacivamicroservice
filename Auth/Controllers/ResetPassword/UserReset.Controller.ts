import { User } from "../../Models/User/User.Model";
import {type Response, type Request} from "express"
import jwt, { type JwtPayload } from "jsonwebtoken";
import {createHash} from "node:crypto"


export class ResetPassword{
        static async userResetPassword(req:Request,res:Response){
            try {
                const usertoken = req.cookies;
                if(!usertoken){
                    return res.json({message:"Please login"}).status(202)
                }
                const userData:JwtPayload = await jwt.verify(usertoken.token,process.env.SECERT!) as JwtPayload;
                const findUser = await User.findOne({email:userData?.data})
                if(!findUser){
                    return res.json({message:"User not find"}).status(404)
                }
                const {password} = await req.body;

                if(!password){
                    return res.json({message:"Password is required"})
                }
                
                const hashedPassword = createHash('sha256').update(password).digest('hex');

                if(findUser.password == hashedPassword){
                    return res.json({message:"Enter a new Password"})
                }
                await User.findOneAndUpdate({email:userData?.data},{password:hashedPassword});
                return res.cookie("token","").json({message:"Updated"}).status(200)
            } catch (error) {
                return res.json({message:error}).status(500)
            }
        }
}