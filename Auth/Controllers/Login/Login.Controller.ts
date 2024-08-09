import { User } from "../../Models/User/User.Model";
import { type Request, type Response } from "express";
import {createHash} from "node:crypto";
import jwt from "jsonwebtoken";

export class LoginController {
    static async loginUser(req:Request,res:Response){
                try {
                        const {email,password} = await req.body;
                        if(!email && !password){
                            return res.json({message:"All Field are Required"})
                        }
                        const hashed = createHash('sha256');
                        const hashedPassword = hashed.update(password).digest('hex');
                        
                        const findUser = await User.findOne({email:email});

                        if(!findUser){
                            return res.json({message:"User Not Found"}).status(404)
                        }
                        if(findUser.password != hashedPassword){
                            return res.json({message:"Wrong Password"}).status(404)
                        }

                        const token = await jwt.sign({
                            data: findUser.email,
                        },process.env.SECERT!,{expiresIn:'3h'})

                        return res.cookie('token',token).json({message:"Login Successfull"}).status(200);

                } catch (error) {
                    return res.json({message:error}).status(500)
                    
                }
    }
}