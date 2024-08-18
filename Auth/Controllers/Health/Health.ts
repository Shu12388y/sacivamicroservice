import {type Response, type Request} from "express"

export class HealthCheck{
    static async checkHealth(_:Request,res:Response){
        try {
            return res.json({message:"Healthy"}).status(200)
        } catch (error) {
                return res.json({message:error}).status(500)   
        }
    }
}