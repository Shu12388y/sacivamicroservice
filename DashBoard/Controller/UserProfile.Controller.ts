import {type Request,type Response} from "express"
import { prisma } from "../DataBase/db";
import jwt, { type JwtPayload } from "jsonwebtoken";


export class UserProfile{
    static async createUserProfile(req:Request,res:Response){
                    try {
                        const userId = await req.params.id
                        const {name,ImageUrl,age,university,language,major,country,foodPref,smoke, drink,exp,ambiance,tidiness,socalizing,about,start,end} = await req.body;
                        if(![name && ImageUrl && age && university && language && major && country && foodPref && smoke && drink && exp && ambiance && tidiness && socalizing && about]){
                            return res.json({message:"Every field are required"}).status(404)
                        }

                        await prisma.userPreference.create({
                            data:{
                               email:userId,
                               name:name,
                               ImageUrl:ImageUrl,
                               age:age,
                               university:university,
                               starting:start,
                               ending:end,
                               language:language,
                               major:major,
                               country:country,
                               foodPrefernce:foodPref,
                               smoking:smoke,
                               drinking:drink,
                               expenditure:exp,
                               ambiance:ambiance,
                               tidiness:tidiness,
                               socializing:socalizing,
                               about:about 
                            }
                        })

                        



                    } catch (error) {
                        
                    }
    }

    static async updateFindmates(req:Request,res:Response){
        try{
                const userCookie  = await req.cookies;
                if(!userCookie){
                    return res.json({message:"Login Please"}).status(503)
                }
                // console.log(userCookie.token)
                const userId:JwtPayload =  await jwt.verify(userCookie.token,process.env.SECERT!) as JwtPayload
                // console.log(userId?.data)
                await prisma.userPreference.update({
                    where:{
                        email:userId?.data
                    },
                    data:{
                        findmate:true
                    }
                })
                res.json({message:"user updated"}).status(200)
                
        }
        catch(error){
                return res.json({messaage:error}).status(500)
        }
    }

    static async findUser(req:Request,res:Response){
        try {
            
            const userPref = await prisma.userPreference.findMany({
                where:{
                    findmate:true
                }
            })
            if(!userPref){
                return res.json({message:"User error cna't get the users"}).status(404)
            }
            return res.json({message:"success",data:userPref}).status(200)
        } catch (error) {
            res.json({message:error}).status(500)
        }

    }

    static async updateUserProfile(req:Request,res:Response){
        try {
            const userCookie = await req.cookies;
            if(!userCookie){
                return res.json({message:"Login, can't get the cookie"}).status(503)
            }
            const useId:JwtPayload = await jwt.verify(userCookie.token,process.env.SECERT!) as JwtPayload;
            const {name,ImageUrl,age,university,language,major,country,foodPref,smoke, drink,exp,ambiance,tidiness,socalizing,about} = await req.body;
            await prisma.userPreference.update({
                where:{
                    email:useId?.data
                },
                data:{
                    name:name,
                    ImageUrl:ImageUrl,
                    age:age,
                    university:university,
                    language:language,
                    major:major,
                    country:country,
                    foodPrefernce:foodPref,
                    smoking:smoke,
                    drinking:drink,
                    expenditure:exp,
                    ambiance:ambiance,
                    tidiness:tidiness,
                    socializing:socalizing,
                    about:about 

                }

            })


            return res.json({message:"User Udated"}).status(200)
        } catch (error) {
            return res.json({message:error}).status(500)
            
        }

    }

    static async deleteUserProfile(req:Request,res:Response){
        try {
                const userCookie = await req.cookies;
                if(!userCookie){
                    return res.json({message:"Login can't get the cookie"}).status(503)
                }
                const userId:JwtPayload = await jwt.verify(userCookie.token,process.env.SECERT!) as JwtPayload;
                await prisma.userPreference.delete({
                    where:{
                        email:userId?.data
                    }
                })
                return res.json({"message":"User profile deleted"}).status(200)
        } catch (error) {
            return res.json({message:error}).status(500)
        }
    }

}